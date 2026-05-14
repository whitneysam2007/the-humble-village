import { useState } from 'react';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Give() {
  const [email, setEmail] = useState('');

  return (
    <main>
      {/* HERO / DONATE */}
      <section style={{
        paddingTop: '80px',
        background: '#B4AA9E',
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          maxWidth: '620px',
          margin: '0 auto',
          padding: '80px 40px',
          textAlign: 'center',
        }}>
          <h1 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(26px, 3.5vw, 48px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#36302A',
            marginBottom: '32px',
            lineHeight: 1.2,
          }}>
            Come be Part of the Humble Village. Your Support is Making a Difference.
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#36302A', opacity: 0.85, marginBottom: '40px' }}>
            Our work to help Indigenous Q'eqchi' Mayans needs your support. Together, we can help them access healthcare, education, and support economic self-reliance. With a focus on women, who carry most of the burden, we can give them tools and resources to change their situation.
          </p>

          {/* White donation card */}
          <div style={{
            background: '#F6F3EC',
            borderRadius: '8px',
            padding: '40px 48px',
            marginBottom: '32px',
          }}>
            <p style={{
              fontFamily: 'Figtree, sans-serif',
              fontSize: '16px',
              color: '#36302A',
              opacity: 0.8,
              marginBottom: '28px',
              lineHeight: 1.6,
            }}>
              Click below to make one-time or recurring donations to our cause
            </p>
            <a
              href="https://www.zeffy.com/en-US/donation-form/donate-to-the-humble-village"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: '#36302A',
                color: '#F6F3EC',
                padding: '18px 32px',
                borderRadius: '6px',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              CLICK TO DONATE
            </a>
          </div>

          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#36302A', opacity: 0.7, marginBottom: '8px' }}>
            <strong>Please note</strong>: Our ticketing platform will ask you to "Help Keep Zeffy free" by adding a percentage in addition to your donation.
          </p>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#36302A', opacity: 0.75, marginBottom: '0' }}>
            <strong>IT IS OPTIONAL!</strong> The Humble Village <em>will not</em> be charged for your transaction.
          </p>
        </div>
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
