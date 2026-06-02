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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <img
            src={`${BASE}/images/thv-logo-circle.png`}
            alt="The Humble Village"
            style={{ height: '120px', width: 'auto', opacity: 0.95 }}
          />
          <a
            href="https://www.zeffy.com/en-US/donation-form/humble-village"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#C8B59E',
              color: '#36302A',
              fontFamily: 'Figtree, sans-serif',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '12px 32px',
              borderRadius: '2px',
              textDecoration: 'none',
            }}
          >
            Give Now
          </a>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '12px',
            color: '#C8B59E',
            opacity: 0.85,
            letterSpacing: '0.02em',
            margin: 0,
          }}>
            100% of public donations go directly to our Humble Village projects.
          </p>
        </div>

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

        {/* Social icons — below reports, above divider */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a
            href="https://www.facebook.com/NaruGuatemala/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            style={{ color: '#C8B59E', opacity: 0.8, transition: 'opacity 0.2s', lineHeight: 0 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/thehumblevillageproject/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{ color: '#C8B59E', opacity: 0.8, transition: 'opacity 0.2s', lineHeight: 0 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
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
  );
}
