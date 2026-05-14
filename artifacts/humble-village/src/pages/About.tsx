import { useState } from 'react';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function About() {
  const [email, setEmail] = useState('');

  return (
    <main>
      {/* HERO / INTRO */}
      <section style={{
        paddingTop: '80px',
        background: '#ECE4DA',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }} className="about-hero-grid">
          <div>
            <h1 style={{
              fontFamily: 'Libre Baskerville, serif',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 400,
              color: '#36302A',
              marginBottom: '28px',
              lineHeight: 1.15,
            }}>
              The Humble Village: a Nonprofit Organization Empowering Women and Transforming Communities
            </h1>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#36302A', opacity: 0.85, marginBottom: '20px' }}>
              At The Humble Village, we believe that when you educate and empower families—starting with women—you bless all of humanity. We work hand-in-hand with communities, providing what they need to create lasting change from within.
            </p>
            <h2 style={{
              fontFamily: 'Libre Baskerville, serif',
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              fontWeight: 400,
              color: '#36302A',
              marginBottom: '20px',
              lineHeight: 1.2,
            }}>
              Together, We can Lift Families from Malnourishment and Poverty
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#36302A', opacity: 0.85, marginBottom: '20px' }}>
              Since 2009, we've been working towards ending malnourishment and high infant-mortality rates in these highlands of Guatemala. It's an ambitious goal, and with your help, we are making real progress every single day.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#36302A', opacity: 0.85 }}>
              We work tirelessly to support the Villages there with nutrition and health, and also with an increase of economic development so that they can create stable and self-reliant communities.
            </p>
          </div>
          <div>
            <img
              src={`${BASE}/images/5c6da391-1394-4dce-a685-835062b5e382.JPG`}
              alt="Humble Village Community"
              style={{ width: '100%', height: '560px', objectFit: 'cover', borderRadius: '4px' }}
            />
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .about-hero-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
              padding: 60px 24px !important;
            }
          }
        `}</style>
      </section>

      {/* STATS */}
      <section style={{
        padding: '80px 40px',
        background: '#36302A',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '48px',
        }} className="about-stats-grid">
          {[
            { number: '13,000', label: 'PROJECTS FUNDED' },
            { number: '150,000+', label: 'MEDICAL VISITS' },
            { number: '20,000+', label: 'CHILDREN HELPED' },
          ].map((stat, i) => (
            <div key={i}>
              <div style={{
                fontFamily: 'Libre Baskerville, serif',
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 700,
                color: '#F6F3EC',
                lineHeight: 1,
                marginBottom: '10px',
              }}>
                {stat.number}
              </div>
              <div style={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: '#F6F3EC',
                opacity: 0.65,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 600px) {
            .about-stats-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          }
        `}</style>
      </section>

      {/* HOW WE WORK */}
      <section style={{ padding: '100px 40px', background: '#ECE4DA' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }} className="how-we-work-grid">
          <div>
            <img
              src={`${BASE}/images/IMG_5278.JPG`}
              alt="How We Work"
              style={{ width: '100%', height: '480px', objectFit: 'cover', borderRadius: '4px' }}
            />
          </div>
          <div>
            <h2 style={{
              fontFamily: 'Libre Baskerville, serif',
              fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 400,
              color: '#36302A',
              marginBottom: '28px',
              lineHeight: 1.2,
            }}>
              How We Work
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#36302A', opacity: 0.85, marginBottom: '20px' }}>
              Our mission is simple: equip women with the tools to lift their families out of generational poverty. We provide urgently needed nourishment, healthcare, education, and economic training.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#36302A', opacity: 0.85, marginBottom: '28px' }}>
              100% of funds donated go directly to these projects and local Guatemalan staff who are on the ground working day to day. The Humble Village board members are 100% volunteers.
            </p>
            <a
              href="https://www.zeffy.com/en-US/donation-form/donate-to-the-humble-village"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              CLICK TO DONATE
            </a>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .how-we-work-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* PHOTO CTA SECTION */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '480px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}>
        <img
          src={`${BASE}/images/HV-photo.png`}
          alt="The Humble Village"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(54,48,42,0.55)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '60px 40px', color: '#F6F3EC' }}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(22px, 3vw, 36px)',
            fontWeight: 400,
            marginBottom: '32px',
            lineHeight: 1.3,
            maxWidth: '600px',
          }}>
            Ready to Help Us? Donate today and Give a Gift that will Change Generations of Lives.
          </h2>
          <a
            href="https://www.zeffy.com/en-US/donation-form/donate-to-the-humble-village"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#F6F3EC',
              color: '#36302A',
              padding: '16px 40px',
              borderRadius: '6.4px',
              fontFamily: 'Figtree, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            CLICK TO DONATE
          </a>
        </div>
      </section>

      {/* EMAIL SIGNUP */}
      <section style={{
        padding: '80px 40px',
        background: '#36302A',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', color: '#F6F3EC' }}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(22px, 3vw, 30px)',
            fontWeight: 400,
            marginBottom: '12px',
          }}>
            Join us!
          </h2>
          <p style={{ fontSize: '16px', opacity: 0.8, marginBottom: '32px' }}>
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
