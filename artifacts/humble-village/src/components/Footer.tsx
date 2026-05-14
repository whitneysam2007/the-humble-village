import { Link } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Footer() {
  return (
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
        <Link to="/">
          <img
            src={`${BASE}/images/thv-logo-circle.png`}
            alt="The Humble Village"
            style={{ height: '120px', width: 'auto', opacity: 0.95 }}
          />
        </Link>

        <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px' }}>
          {[
            { label: 'ABOUT', href: '/about' },
            { label: 'OUR CAUSE', href: '/ourcause' },
            { label: 'OUR TEAM', href: '/our-team' },
            { label: 'STORIES', href: '/stories' },
            { label: 'DONATE', href: '/give-1' },
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
                color: '#ECE4DA',
                textDecoration: 'none',
                opacity: 0.7,
                transition: 'opacity 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ width: '40px', height: '1px', background: 'rgba(236,228,218,0.3)' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <p style={{
            fontSize: '13px',
            color: '#ECE4DA',
            opacity: 0.6,
            lineHeight: 1.6,
            maxWidth: '500px',
          }}>
            The Humble Village is a 501(c)(3) nonprofit organization. 100% of public donations go directly to our programs in Guatemala.
          </p>
          <p style={{ fontSize: '12px', color: '#ECE4DA', opacity: 0.4 }}>
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
  );
}
