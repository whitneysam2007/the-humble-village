import { Link } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Footer() {
  return (
    <>
      {/* GIVE NOW FOOTER BANNER — appears on every page */}
      <section style={{
        background: '#574C3F',
        padding: '72px 40px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#C8B59E',
            marginBottom: '20px',
          }}>
            Make a Difference Today
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(24px, 3.5vw, 38px)',
            fontWeight: 400,
            color: '#F8F3EC',
            marginBottom: '28px',
            lineHeight: 1.25,
          }}>
            Every dollar reaches a family in need.
          </h2>
          <a
            href="https://www.zeffy.com/en-US/donation-form/donate-to-the-humble-village"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#F8F3EC',
              color: '#36302A',
              padding: '16px 48px',
              borderRadius: '6px',
              fontFamily: 'Figtree, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              marginBottom: '16px',
            }}
          >
            Give Now
          </a>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '13px',
            color: '#F8F3EC',
            opacity: 0.65,
            lineHeight: 1.6,
          }}>
            100% of public donations go directly to our Humble Village projects.
          </p>
        </div>
      </section>

      <footer style={{
        background: '#36302A',
        padding: '60px 40px 40px',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '36px',
          textAlign: 'center',
        }}>
          <div>
            <img
              src={`${BASE}/images/thv-logo-circle.png`}
              alt="The Humble Village"
              style={{ height: '120px', width: 'auto', opacity: 0.95 }}
            />
          </div>

          <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px' }}>
            {[
              { label: 'ABOUT', href: '/about' },
              { label: 'OUR PROGRAMS', href: '/ourcause' },
              { label: 'OUR TEAM', href: '/our-team' },
              { label: 'STORIES', href: '/stories' },
              { label: 'GIVE', href: '/give-1' },
              { label: 'NARÚ CIRCLE', href: '/naru-circle' },
            ].map(link => (
              <Link
                key={link.label}
                to={link.href}
                style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: '#F8F3EC',
                  textDecoration: 'none',
                  opacity: 0.7,
                  transition: 'opacity 0.2s',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
            {[
              { label: '2025 Impact Report', href: 'https://drive.google.com/file/d/1Koku7iP_mieu7J6oSOg6T_nen348FcPC/view?usp=drive_link' },
              { label: 'The Narú Circle Overview', href: 'https://drive.google.com/file/d/1s7aN-36JXkzL2B9cz8qDAYZ_PlzjLngN/view?usp=drive_link' },
            ].map(doc => (
              <a
                key={doc.label}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#F8F3EC',
                  opacity: 0.55,
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(248,243,236,0.3)',
                  paddingBottom: '2px',
                }}
              >
                {doc.label} ↗
              </a>
            ))}
          </div>

          <div style={{ width: '40px', height: '1px', background: 'rgba(248,243,236,0.3)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={{
              fontSize: '13px',
              color: '#F8F3EC',
              opacity: 0.6,
              lineHeight: 1.6,
              maxWidth: '500px',
            }}>
              The Humble Village is a 501(c)(3) nonprofit organization. 100% of public donations go directly to our programs in Guatemala.
            </p>
            <p style={{ fontSize: '12px', color: '#F8F3EC', opacity: 0.4 }}>
              © 2025 The Humble Village · EIN: 99-5148890
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            footer { padding: 48px 24px 32px !important; }
          }
        `}</style>
      </footer>
    </>
  );
}
