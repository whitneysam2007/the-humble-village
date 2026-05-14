import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'ABOUT US', href: '/about' },
    { label: 'OUR CAUSE', href: '/ourcause' },
    { label: 'OUR TEAM', href: '/our-team' },
    { label: 'GIVE', href: '/give-1' },
  ];

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: '#ECE4DA',
        borderBottom: scrolled ? '1px solid rgba(54,48,42,0.12)' : '1px solid rgba(54,48,42,0.08)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: scrolled ? '0 2px 12px rgba(54,48,42,0.08)' : 'none',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
        }}>
          {/* Logo */}
          <Link to="/">
            <img
              src={`${BASE}/logo.webp`}
              alt="The Humble Village"
              style={{ height: '52px', width: 'auto', display: 'block' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '36px',
          }} className="desktop-nav">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: '#36302A',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                  opacity: location.pathname === link.href ? 0.5 : 1,
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.zeffy.com/en-US/ticketing/shop-to-support"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: '#36302A',
                textDecoration: 'none',
              }}
            >
              SHOP
            </a>
            <a
              href="https://www.zeffy.com/en-US/donation-form/donate-to-the-humble-village"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '11px', padding: '10px 22px' }}
            >
              GIVE
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            aria-label="Toggle menu"
            style={{
              display: 'none',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              width: '40px',
              height: '40px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: '#36302A',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: '#36302A',
              transition: 'opacity 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: '#36302A',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: 'fixed',
        top: menuOpen ? '80px' : '-100vh',
        left: 0,
        right: 0,
        bottom: 0,
        background: '#ECE4DA',
        zIndex: 99,
        transition: 'top 0.35s ease',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 32px',
        gap: '8px',
        overflowY: 'auto',
      }}>
        {navLinks.map(link => (
          <Link
            key={link.href}
            to={link.href}
            style={{
              fontFamily: 'Figtree, sans-serif',
              fontSize: '20px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              color: '#36302A',
              textDecoration: 'none',
              padding: '16px 0',
              borderBottom: '1px solid rgba(54,48,42,0.12)',
              display: 'block',
            }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://www.zeffy.com/en-US/ticketing/shop-to-support"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '20px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            color: '#36302A',
            textDecoration: 'none',
            padding: '16px 0',
            borderBottom: '1px solid rgba(54,48,42,0.12)',
            display: 'block',
          }}
        >
          SHOP
        </a>
        <div style={{ paddingTop: '24px' }}>
          <a
            href="https://www.zeffy.com/en-US/donation-form/donate-to-the-humble-village"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ width: '100%', textAlign: 'center', display: 'block', padding: '16px' }}
          >
            GIVE
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
