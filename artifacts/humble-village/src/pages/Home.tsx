import { useState } from 'react';
import { Link } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

const stats = [
  { number: '178', label: 'Communities Reached' },
  { number: '317', label: 'Prenatal and postnatal mothers received support' },
  { number: '156', label: 'Kitchen gardens were established' },
  { number: '13,161', label: 'Total visits were made to our sites' },
  { number: '4,006', label: 'Attendance at family education sessions' },
  { number: '1,056', label: 'Acutely malnourished children receiving nutritional support' },
  { number: '1,328', label: 'Training lessons taught in homes' },
];

const causes = [
  {
    img: '2cd5f320-5aca-4437-a625-adbf405c9b92.JPG',
    title: 'Nutrition & Health',
    desc: 'Help provide stability for malnourished children and women.',
  },
  {
    img: 'Literacy-woman-writing-1024x768.jpg',
    title: 'Education & Comprehensive Training',
    desc: 'Help provide education and trainings that empower.',
  },
  {
    img: 'e6939af0-9657-4e0f-8cb0-a0a67f9f44c4.JPG',
    title: 'Self-Reliance & Economic Development',
    desc: 'Help create self-reliance through economic development.',
  },
];

const gifts = [
  {
    img: 'b3823993-35ce-439a-a909-f37d5364e8ec.JPG',
    title: 'Virtual Gifts',
    desc: 'Help by gifting laying hens, seeds or education. Each donation can help change lives.',
  },
  {
    img: 'IMG_5484-1024x683.jpg',
    title: 'Emergency Fund',
    desc: 'Help support immediate needs that arise of those in dire need.',
  },
  {
    img: 'Naru_Team_Pic.jpeg',
    title: 'Work With Us',
    desc: 'Help catalyze change, from one-time opportunities to lasting partnerships.',
  },
];

const igPhotos = [
  'image-asset.jpeg',
  '2b445cec-4487-4cc4-a4fd-e909f5034bf8.JPG',
  '004de813-d98a-4270-b750-0dd54f5f4890.JPG',
  '9312a127-6296-49b2-9327-0c23facdc2e0.JPG',
];

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <main>
      {/* HERO */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '80px',
        background: '#36302A',
      }}>
        <img
          src={`${BASE}/images/HV-main.png`}
          alt="The Humble Village"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(54,48,42,0.32)',
        }} />
        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
          color: '#F6F3EC',
        }}>
          <h1 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 400,
            lineHeight: 1.1,
            maxWidth: '680px',
            marginBottom: '24px',
          }}>
            Empower a Mother. Transform a Village.
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            lineHeight: 1.7,
            maxWidth: '520px',
            opacity: 0.9,
            marginBottom: '36px',
            fontFamily: 'Figtree, sans-serif',
          }}>
            Every dollar you give lifts Q'eqchi' Mayan families in Guatemala with nutrition, education, health and tools for self-reliance.
          </p>
          <a
            href="https://www.zeffy.com/en-US/donation-form/donate-to-the-humble-village"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#F6F3EC',
              color: '#36302A',
              padding: '16px 40px',
              borderRadius: '6px',
              fontFamily: 'Figtree, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Give Now
          </a>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section style={{
        background: '#36302A',
        padding: '80px 40px',
        color: '#F6F3EC',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            opacity: 0.6,
            marginBottom: '16px',
          }}>
            Our Impact
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 400,
            marginBottom: '60px',
            maxWidth: '600px',
            lineHeight: 1.2,
          }}>
            Serving the Poorest of the Poor in Guatemala
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
          }}>
            {stats.map((stat, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  fontWeight: 400,
                  marginBottom: '8px',
                  color: '#F6F3EC',
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '14px',
                  lineHeight: 1.5,
                  opacity: 0.75,
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section style={{
        background: '#ECE4DA',
        padding: '100px 40px',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#574C3F',
            marginBottom: '24px',
          }}>
            Who We Are
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(24px, 3.5vw, 40px)',
            fontWeight: 400,
            color: '#36302A',
            lineHeight: 1.3,
            marginBottom: '32px',
          }}>
            We are a Christian nonprofit dedicated to empowering Q'eqchi' Mayan mothers and families in rural Guatemala.
          </h2>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '17px',
            color: '#574C3F',
            lineHeight: 1.8,
            marginBottom: '40px',
          }}>
            Through nutrition, health, education, and self-reliance programs, we work to break the cycle of poverty — one family at a time.
          </p>
          <Link to="/about" className="btn-primary">Learn Our Story</Link>
        </div>
      </section>

      {/* OUR CAUSE CARDS */}
      <section style={{
        background: '#F6F3EC',
        padding: '100px 40px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#574C3F',
            marginBottom: '16px',
          }}>
            Our Cause
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 400,
            color: '#36302A',
            marginBottom: '60px',
          }}>
            How We Help
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}>
            {causes.map((cause, i) => (
              <div key={i} style={{
                background: '#fff',
                borderRadius: '8px',
                overflow: 'hidden',
              }}>
                <div style={{ height: '260px', overflow: 'hidden' }}>
                  <img
                    src={`${BASE}/images/${cause.img}`}
                    alt={cause.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '28px' }}>
                  <h3 style={{
                    fontFamily: 'Libre Baskerville, serif',
                    fontSize: '20px',
                    fontWeight: 400,
                    color: '#36302A',
                    marginBottom: '12px',
                  }}>
                    {cause.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '15px',
                    color: '#574C3F',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                  }}>
                    {cause.desc}
                  </p>
                  <Link
                    to="/ourcause"
                    style={{
                      fontFamily: 'Figtree, sans-serif',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#36302A',
                      textDecoration: 'underline',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GIVE SECTION */}
      <section style={{
        background: '#36302A',
        padding: '100px 40px',
        color: '#F6F3EC',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            opacity: 0.6,
            marginBottom: '16px',
          }}>
            Give
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 400,
            marginBottom: '60px',
          }}>
            Ways to Give
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}>
            {gifts.map((gift, i) => (
              <div key={i} style={{
                background: 'rgba(246,243,236,0.08)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}>
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img
                    src={`${BASE}/images/${gift.img}`}
                    alt={gift.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '28px' }}>
                  <h3 style={{
                    fontFamily: 'Libre Baskerville, serif',
                    fontSize: '20px',
                    fontWeight: 400,
                    marginBottom: '12px',
                  }}>
                    {gift.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '15px',
                    opacity: 0.8,
                    lineHeight: 1.6,
                  }}>
                    {gift.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <a
              href="https://www.zeffy.com/en-US/donation-form/donate-to-the-humble-village"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#F6F3EC',
                color: '#36302A',
                padding: '16px 48px',
                borderRadius: '6px',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Give Now
            </a>
          </div>
        </div>
      </section>

      {/* INSTAGRAM GRID */}
      <section style={{
        background: '#ECE4DA',
        padding: '80px 40px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '40px',
            flexWrap: 'wrap',
            gap: '16px',
          }}>
            <h2 style={{
              fontFamily: 'Libre Baskerville, serif',
              fontSize: 'clamp(22px, 3vw, 36px)',
              fontWeight: 400,
              color: '#36302A',
            }}>
              Follow Our Journey
            </h2>
            <a
              href="https://www.instagram.com/thehumblevillage/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: '#36302A',
                textDecoration: 'underline',
                letterSpacing: '0.05em',
              }}
            >
              @thehumblevillage
            </a>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
          }}>
            {igPhotos.map((photo, i) => (
              <a
                key={i}
                href="https://www.instagram.com/thehumblevillage/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', aspectRatio: '1', overflow: 'hidden', borderRadius: '4px' }}
              >
                <img
                  src={`${BASE}/images/${photo}`}
                  alt="The Humble Village on Instagram"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL SIGNUP */}
      <section style={{
        background: '#574C3F',
        padding: '80px 40px',
        color: '#F6F3EC',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(24px, 3.5vw, 40px)',
            fontWeight: 400,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            Stay Connected
          </h2>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '16px',
            opacity: 0.85,
            marginBottom: '36px',
            lineHeight: 1.7,
          }}>
            Get stories, updates, and ways to make a difference — straight to your inbox.
          </p>
          <form
            onSubmit={e => { e.preventDefault(); setEmail(''); }}
            style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              style={{
                padding: '14px 20px',
                borderRadius: '6px',
                border: 'none',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '15px',
                width: '280px',
                outline: 'none',
                background: '#F6F3EC',
                color: '#36302A',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '14px 32px',
                borderRadius: '6px',
                border: 'none',
                background: '#36302A',
                color: '#F6F3EC',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
