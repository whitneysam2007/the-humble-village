import { Link } from 'wouter';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Footer() {
  return (
    <footer style={{
      background: '#ECE4DA',
      borderTop: '1px solid rgba(54,48,42,0.15)',
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
        {/* Logo */}
        <Link href="/">
          <img
            src={`${BASE}/images/hv-naru-logos-04__281_29.png`}
            alt="The Humble Village"
            style={{ height: '100px', width: 'auto' }}
          />
        </Link>

        {/* Nav Links */}
        <nav style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '32px',
        }}>
          {[
            { label: 'ABOUT US', href: '/about' },
            { label: 'OUR CAUSE', href: '/ourcause' },
            { label: 'TAKE ACTION', href: '/ourcause' },
          ].map(link => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: '#36302A',
                textDecoration: 'none',
                opacity: 0.75,
                transition: 'opacity 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.zeffy.com/en-US/donation-form/donate-to-the-humble-village"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Figtree, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: '#36302A',
              textDecoration: 'none',
              opacity: 0.75,
            }}
          >
            GIVE
          </a>
        </nav>

        {/* Legal */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <p style={{
            fontSize: '13px',
            color: '#36302A',
            opacity: 0.65,
            lineHeight: 1.6,
            maxWidth: '500px',
          }}>
            The Humble Village: is a 501(c)(3) nonprofit organization. 100% of public donations go directly to our Humble Village projects in Guatemala.
          </p>
          <p style={{ fontSize: '12px', color: '#36302A', opacity: 0.5 }}>
            © 2025 | The Humble Village EIN#: 99-5148890
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer {
            padding: 48px 24px 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
