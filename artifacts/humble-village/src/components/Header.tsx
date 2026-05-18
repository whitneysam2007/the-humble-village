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
    { label: 'ABOUT', href: '/about' },
    { label: 'OUR CAUSE', href: '/ourcause' },
    { label: 'OUR TEAM', href: '/our-team' },
    { label: 'STORIES', href: '/stories' },
    { label: 'DONATE', href: '/give-1' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: '#F8F3EC',
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
          <div>
            <img
              src={`${BASE}/logo.webp`}
              alt="The Humble Village"
              style={{ height: '68px', width: 'auto', display: 'block' }}
            />
          </div>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
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
                  textDecoration: isActive(link.href) ? 'underline' : 'none',
                  textUnderlineOffset: '4px',
                  transition: 'opacity 0.2s',
                  opacity: 1,
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
            <Link
              to="/naru-circle"
              style={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#F6F3EC',
                background: '#36302A',
                padding: '9px 18px',
                borderRadius: '5px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              NARÚ CIRCLE
            </Link>
          </nav>

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
              display: 'block', width: '22px', height: '2px', background: '#36302A',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '2px', background: '#36302A',
              transition: 'opacity 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: '22px', height: '2px', background: '#36302A',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </header>

      <div style={{
        position: 'fixed',
        top: '80px',
        left: 0,
        right: 0,
        height: 'calc(100vh - 80px)',
        background: '#F8F3EC',
        zIndex: 99,
        transition: 'transform 0.35s ease, visibility 0.35s',
        transform: menuOpen ? 'translateY(0)' : 'translateY(-120%)',
        visibility: menuOpen ? 'visible' : 'hidden',
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
        <div style={{ paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Link
            to="/naru-circle"
            style={{
              width: '100%',
              textAlign: 'center',
              display: 'block',
              padding: '16px',
              background: '#36302A',
              color: '#F6F3EC',
              borderRadius: '6px',
              fontFamily: 'Figtree, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textDecoration: 'none',
            }}
          >
            NARÚ CIRCLE
          </Link>
          <a
            href="https://www.zeffy.com/en-US/donation-form/donate-to-the-humble-village"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '100%',
              textAlign: 'center',
              display: 'block',
              padding: '16px',
              background: 'transparent',
              color: '#36302A',
              border: '1.5px solid #36302A',
              borderRadius: '6px',
              fontFamily: 'Figtree, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textDecoration: 'none',
            }}
          >
            GIVE NOW
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
