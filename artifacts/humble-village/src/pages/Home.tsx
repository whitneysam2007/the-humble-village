import { useState } from 'react';
import { Link } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <main>
      {/* HERO */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        paddingTop: '80px',
        background: '#36302A',
      }}>
        <img
          src={`${BASE}/images/HV-main.png`}
          alt="The Humble Village"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(54,48,42,0.38)' }} />
        <div style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 60px 80px',
          color: '#F6F3EC',
        }}>
          <h1 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(30px, 4.5vw, 58px)',
            fontWeight: 400,
            lineHeight: 1.1,
            maxWidth: '560px',
            marginBottom: '20px',
          }}>
            Empower a Mother.<br />Transform a Village.
          </h1>
          <p style={{
            fontSize: 'clamp(14px, 1.5vw, 17px)',
            lineHeight: 1.7,
            maxWidth: '420px',
            opacity: 0.9,
            marginBottom: '36px',
            fontFamily: 'Figtree, sans-serif',
          }}>
            Every dollar you give lifts Q'eqchi' Mayan families in Guatemala with nutrition, education, health, and tools for self-reliance.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="https://www.zeffy.com/en-US/donation-form/donate-to-the-humble-village"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#F6F3EC',
                color: '#36302A',
                padding: '15px 36px',
                borderRadius: '6px',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Give Now
            </a>
            <Link
              to="/naru-circle"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#F6F3EC',
                padding: '14px 32px',
                borderRadius: '6px',
                border: '1.5px solid rgba(246,243,236,0.6)',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              The Narú Circle
            </Link>
          </div>
        </div>
      </section>

      {/* THE NARÚ WAY */}
      <section style={{ background: '#36302A', padding: '100px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#574C3F',
            marginBottom: '28px',
          }}>
            The Narú Way
          </p>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '17px',
            lineHeight: 1.85,
            color: '#F6F3EC',
            opacity: 0.85,
            marginBottom: '20px',
          }}>
            Narú is the way The Humble Village approaches its work. The word means "can do" in the Q'eqchi' language.
          </p>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '17px',
            lineHeight: 1.85,
            color: '#F6F3EC',
            opacity: 0.85,
            marginBottom: '20px',
          }}>
            Our goal is not simply to provide food, but to help mothers learn how to nourish their own children and build a future. Through guidance, education, and support, families learn what they <strong>CAN DO</strong>, despite their circumstances.
          </p>
        </div>
      </section>

      {/* MALNUTRITION STAT */}
      <section style={{
        background: '#ECE4DA',
        padding: '100px 40px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#574C3F',
            marginBottom: '28px',
          }}>
            The Crisis
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(22px, 3.5vw, 44px)',
            fontWeight: 400,
            color: '#36302A',
            lineHeight: 1.3,
            marginBottom: '28px',
          }}>
            Alta Verapaz, Guatemala has the <em>highest rates of child malnutrition</em> in all of Central, South, and North America.
          </h2>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '14px',
            color: '#574C3F',
            letterSpacing: '0.05em',
            marginBottom: '40px',
          }}>
            — UNICEF
          </p>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '17px',
            lineHeight: 1.8,
            color: '#36302A',
            opacity: 0.8,
            marginBottom: '20px',
          }}>
            In the highlands of Alta Verapaz, most families survive on less than $1 a day. Living on a diet of almost exclusively corn tortillas produces potentially fatal protein malnutrition, blindness, stunting, and a myriad of illnesses.
          </p>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '17px',
            lineHeight: 1.8,
            color: '#36302A',
            opacity: 0.8,
            marginBottom: '40px',
          }}>
            With little to no government support, at-risk mothers have no access to healthcare, clean water, or food for their malnourished children.
          </p>
          <Link to="/ourcause" className="btn-primary">See the Full Picture</Link>
        </div>
      </section>

      {/* ELENA'S STORY */}
      <section style={{ background: '#36302A', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#574C3F',
            marginBottom: '28px',
            textAlign: 'center',
          }}>
            One Story of Thousands
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(26px, 4vw, 48px)',
            fontWeight: 400,
            color: '#F6F3EC',
            textAlign: 'center',
            marginBottom: '64px',
            fontStyle: 'italic',
          }}>
            From Desperation to Dignity
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }} className="elena-grid">
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  color: '#574C3F',
                  marginBottom: '8px',
                  textAlign: 'center',
                }}>BEFORE</div>
                <img
                  src={`${BASE}/images/elena-before.jpg`}
                  alt="Jeremia and Gerson — Elena would not leave the corner"
                  style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: '4px' }}
                />
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', color: '#ECE4DA', opacity: 0.7, marginTop: '6px', textAlign: 'center', fontStyle: 'italic', lineHeight: 1.4 }}>
                  Twins Jeremia & Gerson with their Aunt and Grandmother. Elena, not pictured.
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  color: '#574C3F',
                  marginBottom: '8px',
                  textAlign: 'center',
                }}>AFTER</div>
                <img
                  src={`${BASE}/images/elena-after.jpg`}
                  alt="Elena with her boys today"
                  style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: '4px' }}
                />
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', color: '#ECE4DA', opacity: 0.7, marginTop: '6px', textAlign: 'center', fontStyle: 'italic', lineHeight: 1.4 }}>
                  7 years later, Elena with her boys today.
                </p>
              </div>
            </div>

            <div>
              <p style={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: '17px',
                lineHeight: 1.85,
                color: '#F6F3EC',
                opacity: 0.85,
                marginBottom: '20px',
              }}>
                When Lauren and her team visited this humble home, they found two severely malnourished babies with only days to live.
              </p>
              <p style={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: '17px',
                lineHeight: 1.85,
                color: '#F6F3EC',
                opacity: 0.85,
                marginBottom: '20px',
              }}>
                Elena, malnourished herself, could not produce milk. She fed her babies corn water — it only made things worse. With expected burials approaching, she had emotionally detached from her boys.
              </p>
              <p style={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: '17px',
                lineHeight: 1.85,
                color: '#F6F3EC',
                opacity: 0.85,
                marginBottom: '20px',
              }}>
                The twins were immediately admitted into the nutrition program. Gerson was diagnosed with a tongue tie, a correctable condition, and received life-saving care. Elena entered the self-reliance program at the Narú Training Center, gaining tools, skills, and support to pull herself and her family out of poverty.
              </p>
              <p style={{
                fontFamily: 'Libre Baskerville, serif',
                fontSize: '20px',
                fontStyle: 'italic',
                color: '#ECE4DA',
                lineHeight: 1.5,
                marginBottom: '40px',
              }}>
                Healthy boys. A thriving home. And Elena — empowered, self-sufficient, and a leader in her community.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/stories" className="btn-primary" style={{ background: '#ECE4DA', color: '#36302A' }}>
                  Read More Stories
                </Link>
                <a
                  href="https://www.zeffy.com/en-US/donation-form/donate-to-the-humble-village"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: 'transparent',
                    color: '#F6F3EC',
                    padding: '14px 28px',
                    borderRadius: '6px',
                    border: '1.5px solid rgba(246,243,236,0.5)',
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '12px',
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
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .elena-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* IMPACT STATS */}
      <section style={{ background: '#ECE4DA', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#574C3F',
            marginBottom: '16px',
            textAlign: 'center',
          }}>
            2025 Impact
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(26px, 3.5vw, 42px)',
            fontWeight: 400,
            color: '#36302A',
            textAlign: 'center',
            marginBottom: '64px',
          }}>
            The Humble Village Impact Last Year
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '48px',
          }} className="stats-grid">
            {[
              { number: '184', label: 'Communities Reached' },
              { number: '758', label: 'Children received nutrition support' },
              { number: '417', label: 'Children improved nutritional status' },
              { number: '274', label: 'Children achieved healthy weight' },
              { number: '304', label: 'Kitchen gardens established' },
              { number: '3', label: 'Brick-and-mortar Narú Training Centers' },
              { number: '3,620', label: 'Families attended education sessions' },
              { number: '1,288', label: 'In-home training sessions delivered' },
              { number: '12,807', label: 'Visits to Narú Health & Training Centers' },
              { number: '354', label: 'Perinatal mothers supported' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: 'clamp(36px, 4.5vw, 52px)',
                  fontWeight: 400,
                  color: '#36302A',
                  marginBottom: '10px',
                  lineHeight: 1,
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '14px',
                  lineHeight: 1.5,
                  color: '#574C3F',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NARÚ CIRCLE CTA */}
      <section style={{ background: '#36302A', padding: '100px 40px' }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#574C3F',
            marginBottom: '28px',
          }}>
            For Those Called to Go Deeper
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(26px, 4vw, 46px)',
            fontWeight: 400,
            color: '#F6F3EC',
            lineHeight: 1.25,
            marginBottom: '28px',
          }}>
            This is not just a donation.<br />This is a partnership.
          </h2>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '17px',
            lineHeight: 1.8,
            color: '#F6F3EC',
            opacity: 0.8,
            marginBottom: '48px',
          }}>
            The Narú Circle is a small group of individuals, families, and organizations who ensure this work continues year after year. Choose the program that speaks to you. Name it. Steward it.
          </p>
          <Link
            to="/naru-circle"
            style={{
              display: 'inline-block',
              background: '#ECE4DA',
              color: '#36302A',
              padding: '18px 48px',
              borderRadius: '6px',
              fontFamily: 'Figtree, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Explore the Narú Circle
          </Link>
        </div>
      </section>

      {/* INSTAGRAM GRID */}
      <section style={{ background: '#ECE4DA', padding: '80px 40px' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
            {['image-asset.jpeg','2b445cec-4487-4cc4-a4fd-e909f5034bf8.JPG','004de813-d98a-4270-b750-0dd54f5f4890.JPG','9312a127-6296-49b2-9327-0c23facdc2e0.JPG'].map((photo, i) => (
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
      <section style={{ background: '#574C3F', padding: '80px 40px', color: '#F6F3EC', textAlign: 'center' }}>
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
            Stories, updates, and ways to make a difference — straight to your inbox.
          </p>
          <form
            onSubmit={e => { e.preventDefault(); }}
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
