const http = require('http');
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, 'artifacts/humble-village/dist/public');
const mime = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
};

http.createServer((req, res) => {
  let p = req.url.split('?')[0];
  let fp = path.join(root, p);
  try {
    if (!fs.existsSync(fp) || fs.statSync(fp).isDirectory()) {
      fp = path.join(root, 'index.html');
    }
  } catch (e) {
    fp = path.join(root, 'index.html');
  }
  const ext = path.extname(fp);
  res.setHeader('Content-Type', mime[ext] || 'application/octet-stream');
  res.setHeader('Cache-Control', 'no-cache');
  fs.createReadStream(fp).pipe(res);
}).listen(3000, () => console.log('Server running on port 3000'));
