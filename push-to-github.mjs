import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const TOKEN = process.env.GITHUB_TOKEN;
const OWNER = 'whitneysam2007';
const REPO = 'the-humble-village';
const BASE = 'https://api.github.com';

const headers = {
  'Authorization': `Bearer ${TOKEN}`,
  'Accept': 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'Content-Type': 'application/json',
};

const SKIP = new Set(['node_modules', '.git', 'dist', '.cache']);

function collectFiles(dir, rootDir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    if (SKIP.has(entry)) continue;
    const full = join(dir, entry);
    const rel = relative(rootDir, full);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...collectFiles(full, rootDir));
    } else {
      results.push({ path: rel, full });
    }
  }
  return results;
}

async function api(path, opts = {}) {
  const res = await fetch(`${BASE}${path}`, { headers, ...opts });
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch { json = text; }
  return { status: res.status, body: json };
}

async function initRepo() {
  // Create README to initialize the repo (creates a first commit + main branch)
  const content = Buffer.from('# The Humble Village\n').toString('base64');
  const r = await api(`/repos/${OWNER}/${REPO}/contents/README.md`, {
    method: 'PUT',
    body: JSON.stringify({ message: 'init', content }),
  });
  if (![200, 201].includes(r.status)) throw new Error(`Init failed: ${JSON.stringify(r.body)}`);
  console.log('Repo initialized with first commit');
  return r.body.commit.sha;
}

async function getRef() {
  const r = await api(`/repos/${OWNER}/${REPO}/git/refs/heads/main`);
  if (r.status === 200) return r.body.object?.sha;
  return null;
}

async function getCommitTree(sha) {
  const r = await api(`/repos/${OWNER}/${REPO}/git/commits/${sha}`);
  return r.body.tree.sha;
}

async function createBlob(content) {
  const r = await api(`/repos/${OWNER}/${REPO}/git/blobs`, {
    method: 'POST',
    body: JSON.stringify({ content, encoding: 'base64' }),
  });
  if (!r.body.sha) throw new Error(`Blob failed: ${JSON.stringify(r.body)}`);
  return r.body.sha;
}

async function createTree(fileBlobs, baseTreeSha) {
  const tree = fileBlobs.map(f => ({ path: f.path, mode: '100644', type: 'blob', sha: f.sha }));
  const r = await api(`/repos/${OWNER}/${REPO}/git/trees`, {
    method: 'POST',
    body: JSON.stringify({ tree, base_tree: baseTreeSha }),
  });
  if (!r.body.sha) throw new Error(`Tree failed: ${JSON.stringify(r.body)}`);
  return r.body.sha;
}

async function createCommit(message, treeSha, parentSha) {
  const r = await api(`/repos/${OWNER}/${REPO}/git/commits`, {
    method: 'POST',
    body: JSON.stringify({ message, tree: treeSha, parents: [parentSha] }),
  });
  if (!r.body.sha) throw new Error(`Commit failed: ${JSON.stringify(r.body)}`);
  return r.body.sha;
}

async function updateRef(sha) {
  const r = await api(`/repos/${OWNER}/${REPO}/git/refs/heads/main`, {
    method: 'PATCH',
    body: JSON.stringify({ sha, force: true }),
  });
  if (r.status !== 200) throw new Error(`Ref update failed: ${JSON.stringify(r.body)}`);
}

const NETLIFY_TOML = `[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
`;

async function main() {
  if (!TOKEN) throw new Error('GITHUB_TOKEN is not set');

  const appDir = join(process.cwd(), 'artifacts/humble-village');
  const files = collectFiles(appDir, appDir);
  console.log(`Found ${files.length} files`);

  // Ensure repo has at least one commit
  let commitSha = await getRef();
  if (!commitSha) {
    commitSha = await initRepo();
    // Re-fetch after init
    commitSha = await getRef();
  }
  const baseTreeSha = await getCommitTree(commitSha);

  console.log('Creating blobs...');
  const fileBlobs = [];

  // netlify.toml
  fileBlobs.push({ path: 'netlify.toml', sha: await createBlob(Buffer.from(NETLIFY_TOML).toString('base64')) });

  let count = 0;
  for (const f of files) {
    try {
      const buf = readFileSync(f.full);
      const sha = await createBlob(buf.toString('base64'));
      fileBlobs.push({ path: f.path, sha });
      count++;
      if (count % 20 === 0) console.log(`  ${count}/${files.length} done`);
    } catch (err) {
      console.warn(`  SKIP ${f.path}: ${err.message}`);
    }
  }

  console.log(`${fileBlobs.length} blobs ready. Creating tree...`);
  const treeSha = await createTree(fileBlobs, baseTreeSha);

  console.log('Creating commit...');
  const newCommit = await createCommit(
    'The Humble Village — full site (React + Vite, ready for Netlify)',
    treeSha,
    commitSha
  );

  console.log('Updating main branch...');
  await updateRef(newCommit);

  console.log(`\nDone! https://github.com/${OWNER}/${REPO}`);
  console.log(`Deploy to Netlify: https://app.netlify.com/start/deploy?repository=https://github.com/${OWNER}/${REPO}`);
}

main().catch(e => { console.error('Error:', e.message); process.exit(1); });
