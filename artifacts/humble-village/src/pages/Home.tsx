import { useState, useEffect } from 'react';

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
              borderRadius: '6.4px',
              fontFamily: 'Figtree, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
          >
            CLICK TO DONATE
          </a>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section:first-of-type {
              min-height: 90vh;
            }
          }
        `}</style>
      </section>

      {/* BECAUSE IT TAKES A VILLAGE */}
      <section style={{
        padding: '100px 40px',
        background: '#ECE4DA',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }} className="grid-2col">
          <div>
            <h2 style={{
              fontFamily: 'Libre Baskerville, serif',
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: 400,
              color: '#36302A',
              marginBottom: '28px',
              lineHeight: 1.2,
            }}>
              Because it Takes a Village. It Takes You.
            </h2>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: '#36302A',
              marginBottom: '20px',
              opacity: 0.85,
            }}>
              When you give to The Humble Village, you invest in mothers, children, and entire communities. You bring dignity, hope, and the tools to create a better life.
            </p>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: '#36302A',
              marginBottom: '20px',
              opacity: 0.85,
            }}>
              We have helped over 1,000 acutely malnourished children receive nutritional support and taught over 1,300 training lessons in homes.
            </p>
            <p style={{
              fontSize: '15px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#36302A',
              opacity: 0.6,
              marginBottom: '28px',
            }}>
              FROM NUTRITION TO EDUCATION
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
          <div>
            <img
              src={`${BASE}/images/2b445cec-4487-4cc4-a4fd-e909f5034bf8.JPG`}
              alt="Community in Guatemala"
              style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '4px' }}
            />
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .grid-2col {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </section>

      {/* DONATE CTA with 100% badge */}
      <section style={{
        padding: '80px 40px',
        background: '#36302A',
        color: '#F6F3EC',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            marginBottom: '36px',
            flexWrap: 'wrap',
          }}>
            {['100%', '100%'].map((val, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: 'clamp(48px, 8vw, 80px)',
                  fontWeight: 700,
                  lineHeight: 1,
                  color: '#F6F3EC',
                }}>
                  {val}
                </div>
                <div style={{ fontSize: '13px', letterSpacing: '0.05em', opacity: 0.75, marginTop: '6px' }}>
                  {i === 0 ? 'OF FUNDS GO DIRECTLY TO PROJECTS' : 'OF TRANSACTIONS ARE FEE-FREE'}
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '17px', lineHeight: 1.8, opacity: 0.85, marginBottom: '12px' }}>
            Our work to help Indigenous Q'eqchi' Mayans needs your support. Together, we can help them access healthcare, education, and a path out of poverty.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.75, marginBottom: '8px' }}>
            100% of funds donated go directly to projects and local Guatemalan staff who are on the ground working day to day.
          </p>
          <p style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.65, marginBottom: '8px' }}>
            Click below to make one-time or recurring donations to our cause.
          </p>
          <p style={{ fontSize: '13px', opacity: 0.55, marginBottom: '32px' }}>
            Please note: Our ticketing platform will ask you to "Help Keep Zeffy free" by adding a percentage in addition to your donation. IT IS OPTIONAL! The Humble Village will not be charged for your transaction.
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

      {/* WHERE YOUR DONATION MAKES A DIFFERENCE */}
      <section style={{ padding: '100px 40px', background: '#ECE4DA' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontWeight: 400,
            color: '#36302A',
            textAlign: 'center',
            marginBottom: '64px',
          }}>
            Where Your Donation Makes a Difference:
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
          }} className="grid-3col">
            {causes.map((cause, i) => (
              <div key={i} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}>
                <img
                  src={`${BASE}/images/${cause.img}`}
                  alt={cause.title}
                  style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '4px' }}
                />
                <h3 style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: '20px',
                  fontWeight: 400,
                  color: '#36302A',
                }}>
                  {cause.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#36302A', opacity: 0.8 }}>
                  {cause.desc}
                </p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) {
              .grid-3col { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* VIRTUAL GIFTS / WORK WITH US */}
      <section style={{ padding: '80px 40px', background: '#EDE5DB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
          }} className="grid-3col-b">
            {gifts.map((gift, i) => (
              <div key={i} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
                <img
                  src={`${BASE}/images/${gift.img}`}
                  alt={gift.title}
                  style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '4px' }}
                />
                <h3 style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: '18px',
                  fontWeight: 400,
                  color: '#36302A',
                }}>
                  {gift.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#36302A', opacity: 0.8 }}>
                  {gift.desc}
                </p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) {
              .grid-3col-b { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* DOCUMENTARY VIDEO */}
      <section style={{
        padding: '100px 40px',
        background: '#36302A',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '16px',
            color: '#F6F3EC',
            opacity: 0.8,
            marginBottom: '32px',
            lineHeight: 1.7,
          }}>
            Watch our latest documentary film to see The Humble Village–Narú team in action.
          </p>
          <a
            href="https://www.youtube.com/watch?v=bh0TpBF26uQ"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', position: 'relative' }}
          >
            <img
              src={`${BASE}/images/youtube_thumbnail.png`}
              alt="Documentary Film — The Humble Village"
              style={{ width: '100%', borderRadius: '4px', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                width: '72px',
                height: '72px',
                background: 'rgba(246,243,236,0.9)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#36302A">
                  <polygon points="8,5 19,12 8,19" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section style={{ padding: '100px 40px', background: '#ECE4DA' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(22px, 2.8vw, 34px)',
            fontWeight: 400,
            color: '#36302A',
            textAlign: 'center',
            marginBottom: '16px',
          }}>
            The Humble Village Impact Last Year:
          </h2>
          <p style={{
            fontSize: '15px',
            color: '#36302A',
            opacity: 0.7,
            textAlign: 'center',
            marginBottom: '64px',
          }}>
            We use 100% of your donation to fund our various projects. Here is what we accomplished together last year.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
          }} className="stats-grid">
            {stats.slice(0, 4).map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: 'clamp(36px, 4vw, 56px)',
                  fontWeight: 700,
                  color: '#36302A',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '13px', color: '#36302A', opacity: 0.65, lineHeight: 1.5 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
            marginTop: '48px',
          }} className="stats-grid-b">
            {stats.slice(4).map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: 'clamp(36px, 4vw, 56px)',
                  fontWeight: 700,
                  color: '#36302A',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '13px', color: '#36302A', opacity: 0.65, lineHeight: 1.5 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 768px) {
              .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
              .stats-grid-b { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 480px) {
              .stats-grid { grid-template-columns: 1fr !important; }
              .stats-grid-b { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* HOW YOU CAN HELP */}
      <section style={{ padding: '100px 40px', background: '#EDE5DB' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(24px, 3vw, 38px)',
            fontWeight: 400,
            color: '#36302A',
            textAlign: 'center',
            marginBottom: '64px',
          }}>
            How You Can Help
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '48px',
            textAlign: 'center',
          }} className="help-grid">
            {[
              {
                icon: 'HV-icons-05.png',
                title: 'Learn',
                desc: 'Learn about the people in the highlands of Guatemala and the challenges they face with malnourishment and high infant-mortality rates.',
              },
              {
                icon: 'HV-icons-04.png',
                title: 'Support',
                desc: 'Support sustainable programs that lift women and their communities out of poverty, provide healthcare and nutritional resources.',
              },
              {
                icon: 'HV-icons-06.png',
                title: 'Empower',
                desc: 'Become part of the story that ends generational poverty in "The Valley of the Forgotten" and help in our grassroots efforts.',
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <img
                  src={`${BASE}/images/${item.icon}`}
                  alt={item.title}
                  style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                />
                <h3 style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: '22px',
                  fontWeight: 400,
                  color: '#36302A',
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#36302A', opacity: 0.8 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 768px) {
              .help-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            }
          `}</style>
        </div>
      </section>

      {/* EMAIL SIGNUP */}
      <section style={{
        padding: '80px 40px',
        background: '#36302A',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <img
          src={`${BASE}/images/3DCC7369-6180-4E1B-861B-BB604804B281.JPG`}
          alt="Community"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.3,
          }}
        />
        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center',
          color: '#F6F3EC',
        }}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(22px, 3vw, 34px)',
            fontWeight: 400,
            marginBottom: '12px',
          }}>
            Join us!
          </h2>
          <p style={{ fontSize: '16px', opacity: 0.85, marginBottom: '32px', lineHeight: 1.6 }}>
            Get our emails to see the impact of your donations and support!
          </p>
          <form
            onSubmit={e => { e.preventDefault(); }}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              style={{
                flex: '1 1 240px',
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
                padding: '14px 28px',
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
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section style={{ padding: '80px 40px', background: '#ECE4DA', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '16px',
            fontStyle: 'italic',
            color: '#36302A',
            opacity: 0.7,
            marginBottom: '40px',
            lineHeight: 1.6,
          }}>
            "Not all of us can do great things, but we can do small things with great love."
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px',
            marginBottom: '36px',
          }} className="ig-grid">
            {igPhotos.map((photo, i) => (
              <a
                key={i}
                href="https://www.instagram.com/thehumblevillageproject/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', overflow: 'hidden' }}
              >
                <img
                  src={`${BASE}/images/${photo}`}
                  alt="Instagram"
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    display: 'block',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </a>
            ))}
          </div>
          <a
            href="https://www.instagram.com/thehumblevillageproject/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            FIND US ON INSTAGRAM
          </a>
          <style>{`
            @media (max-width: 768px) {
              .ig-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
          `}</style>
        </div>
      </section>
    </main>
  );
}
