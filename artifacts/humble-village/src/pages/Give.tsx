import { useState } from 'react';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Give() {
  const [email, setEmail] = useState('');

  return (
    <main>
      {/* HERO / DONATE */}
      <section style={{
        paddingTop: '80px',
        background: '#ECE4DA',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '80px 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start',
        }} className="give-hero-grid">
          <div>
            <h1 style={{
              fontFamily: 'Libre Baskerville, serif',
              fontSize: 'clamp(26px, 3.5vw, 42px)',
              fontWeight: 400,
              color: '#36302A',
              marginBottom: '28px',
              lineHeight: 1.15,
            }}>
              Come be Part of the Humble Village. Your Support is Making a Difference.
            </h1>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#36302A', opacity: 0.85, marginBottom: '16px' }}>
              Our work to help Indigenous Q'eqchi' Mayans needs your support. Together, we can help them access healthcare, education, and a path out of poverty.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#36302A', opacity: 0.8, marginBottom: '16px' }}>
              Click below to make one-time or recurring donations to our cause.
            </p>

            {/* 100% badges */}
            <div style={{
              display: 'flex',
              gap: '24px',
              marginBottom: '28px',
              flexWrap: 'wrap',
            }}>
              {[
                { label: 'OF FUNDS GO DIRECTLY TO PROJECTS' },
                { label: 'OF TRANSACTIONS ARE FEE-FREE' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{
                    fontFamily: 'Libre Baskerville, serif',
                    fontSize: '36px',
                    fontWeight: 700,
                    color: '#36302A',
                    lineHeight: 1,
                  }}>
                    100%
                  </span>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: '#36302A',
                    opacity: 0.6,
                    maxWidth: '100px',
                    lineHeight: 1.4,
                  }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#36302A', opacity: 0.65, marginBottom: '8px' }}>
              Please note: Our ticketing platform will ask you to "Help Keep Zeffy free" by adding a percentage in addition to your donation.
            </p>
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#36302A', opacity: 0.75, marginBottom: '28px' }}>
              IT IS OPTIONAL! The Humble Village will not be charged for your transaction.
            </p>

            <a
              href="https://www.zeffy.com/en-US/donation-form/donate-to-the-humble-village"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '13px', padding: '16px 36px' }}
            >
              CLICK TO DONATE
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <a
              href="https://youtu.be/humble-village-doc"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', position: 'relative', borderRadius: '4px', overflow: 'hidden' }}
            >
              <img
                src={`${BASE}/images/youtube_thumbnail.png`}
                alt="Documentary"
                style={{ width: '100%', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,0,0,0.2)',
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'rgba(246,243,236,0.9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#36302A">
                    <polygon points="8,5 19,12 8,19" />
                  </svg>
                </div>
              </div>
            </a>
            <p style={{ fontSize: '14px', color: '#36302A', opacity: 0.7, lineHeight: 1.6, textAlign: 'center' }}>
              Learn all about The Humble Village mission and impact in our latest documentary.
            </p>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .give-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding: 60px 24px !important; }
          }
        `}</style>
      </section>

      {/* EMAIL SIGNUP */}
      <section style={{
        padding: '80px 40px',
        background: '#36302A',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img
          src={`${BASE}/images/3DCC7369-6180-4E1B-861B-BB604804B281.JPG`}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.25,
          }}
        />
        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '500px',
          margin: '0 auto',
          textAlign: 'center',
          color: '#F6F3EC',
        }}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: 400,
            marginBottom: '12px',
          }}>
            Join us!
          </h2>
          <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '32px' }}>
            Get our emails to see the impact of your donations and support!
          </p>
          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              style={{
                flex: '1 1 200px',
                padding: '14px 20px',
                borderRadius: '6.4px',
                border: 'none',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '15px',
                background: '#F6F3EC',
                color: '#36302A',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '14px 24px',
                borderRadius: '6.4px',
                border: '1.5px solid #F6F3EC',
                background: 'transparent',
                color: '#F6F3EC',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
