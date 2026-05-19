import { Link } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Give() {
  return (
    <main>
      {/* HERO */}
      <section style={{
        paddingTop: '80px',
        position: 'relative',
        padding: '160px 40px 100px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        <img
          src={`${BASE}/images/watermelon.webp`}
          alt="A mother feeding her child watermelon"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 15%',
            display: 'block',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(36,30,24,0.72) 0%, rgba(36,30,24,0.82) 100%)',
        }} />
        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#BFA07A',
            marginBottom: '28px',
          }}>
            Give
          </p>
          <h1 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(28px, 4vw, 50px)',
            fontWeight: 400,
            color: '#F6F3EC',
            marginBottom: '28px',
            lineHeight: 1.2,
            fontStyle: 'italic',
          }}>
            Your Gift Changes Generations
          </h1>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '18px', lineHeight: 1.85, color: '#F6F3EC', opacity: 0.8 }}>
            100% of every donation goes directly to field programs and the local Guatemalan staff who are on the ground every day. Our board is 100% volunteer. Every dollar you give reaches a family.
          </p>
        </div>
      </section>

      {/* WHAT YOUR CONTRIBUTION MAKES POSSIBLE */}
      <section style={{ background: '#F8F3EC', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
            What Your Contribution Makes Possible
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginBottom: '32px' }} className="give-tiers-grid">
            {[
              { amount: '$1', desc: '1 month of supplements for a nursing mother' },
              { amount: '$8', desc: '1 month of nutrition for a child' },
              { amount: '$40', desc: 'Health education for a year' },
              { amount: '$1,000', desc: 'Seeds and materials for 50 gardens' },
              { amount: '$75,000', desc: 'Build the next Narú Center' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '24px 14px',
                background: '#36302A',
                borderRadius: '4px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: 'clamp(22px, 2.5vw, 32px)',
                  fontWeight: 400,
                  color: '#F8F3EC',
                  lineHeight: 1,
                  marginBottom: '10px',
                }}>
                  {item.amount}
                </div>
                <p style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#F8F3EC',
                  opacity: 0.75,
                  lineHeight: 1.55,
                  margin: 0,
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '13px',
            textAlign: 'center',
            color: '#574C3F',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            Join us in making The Humble Village sustainable through a donation to our{' '}
            <a href="mailto:hello@the-humble-village.org" style={{ color: '#36302A', textDecoration: 'underline' }}>Endowment Fund</a>
          </p>
          <style>{`
            @media (max-width: 768px) {
              .give-tiers-grid { grid-template-columns: repeat(3, 1fr) !important; }
            }
            @media (max-width: 480px) {
              .give-tiers-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
          `}</style>
        </div>
      </section>

      {/* TWO PATHS */}
      <section style={{ background: '#F8F3EC', padding: '0 40px 100px' }}>
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
            Two Ways to Give
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            fontWeight: 400,
            color: '#36302A',
            textAlign: 'center',
            marginBottom: '64px',
          }}>
            Choose the role that's right for you
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="give-paths-grid">
            {/* PATH A */}
            <div style={{
              background: '#36302A',
              borderRadius: '8px',
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
              <p style={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#574C3F',
              }}>
                Option 1
              </p>
              <h3 style={{
                fontFamily: 'Libre Baskerville, serif',
                fontSize: 'clamp(22px, 2.5vw, 30px)',
                fontWeight: 400,
                color: '#F6F3EC',
                lineHeight: 1.2,
              }}>
                Monthly or One-Time Gift
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', lineHeight: 1.8, color: '#F6F3EC', opacity: 0.8, flex: 1 }}>
                Give what you can, when you can. Monthly giving is especially powerful — it allows us to plan programs, hire staff, and sustain families through the full 18-month journey.
              </p>
              <div style={{ background: 'rgba(248,243,236,0.07)', borderRadius: '6px', padding: '28px 24px' }}>
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '14px', color: '#F6F3EC', opacity: 0.75, marginBottom: '20px', lineHeight: 1.6 }}>
                  Click below to make a one-time or recurring donation through our secure platform.
                </p>
                <a
                  href="https://www.zeffy.com/en-US/donation-form/donate-to-the-humble-village"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    background: '#F8F3EC',
                    color: '#36302A',
                    padding: '16px 24px',
                    borderRadius: '6px',
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    textAlign: 'center',
                  }}
                >
                  Give via Zeffy
                </a>
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '12px', color: '#F6F3EC', opacity: 0.5, marginTop: '12px', lineHeight: 1.5 }}>
                  Zeffy may ask you to "Help Keep Zeffy Free" by adding a percentage. <strong>It is optional.</strong> The Humble Village will not be charged for your transaction.
                </p>
              </div>
            </div>

            {/* PATH B */}
            <div style={{
              background: '#574C3F',
              borderRadius: '8px',
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(248,243,236,0.15)',
                borderRadius: '20px',
                padding: '4px 14px',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#F8F3EC',
              }}>
                High Impact
              </div>
              <p style={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(248,243,236,0.6)',
              }}>
                Option 2
              </p>
              <h3 style={{
                fontFamily: 'Libre Baskerville, serif',
                fontSize: 'clamp(22px, 2.5vw, 30px)',
                fontWeight: 400,
                color: '#F6F3EC',
                lineHeight: 1.2,
              }}>
                The Narú Circle
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', lineHeight: 1.8, color: '#F6F3EC', opacity: 0.85, flex: 1 }}>
                This is not just a donation. This is a partnership. Narú Circle members sponsor a specific program: the Medical Center, an Ochoch, or the nutrition fund. They adopt that piece of the work as their own.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Named legacy: your program, your name',
                  'Direct connection to local team',
                  'A place to come back to in Guatemala',
                  'Commitment horizons: 5, 10, or forever',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#F8F3EC', opacity: 0.5, marginTop: '2px', flexShrink: 0 }}>→</span>
                    <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '14px', color: '#F6F3EC', opacity: 0.8, lineHeight: 1.5 }}>{item}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/naru-circle"
                style={{
                  display: 'block',
                  background: '#F6F3EC',
                  color: '#36302A',
                  padding: '16px 24px',
                  borderRadius: '6px',
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  textAlign: 'center',
                }}
              >
                Explore the Narú Circle
              </Link>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .give-paths-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* GIVE YOUR TIME */}
      <section style={{ background: '#36302A', padding: '100px 40px' }}>
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
            Give Your Time
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(26px, 3.5vw, 42px)',
            fontWeight: 400,
            color: '#F8F3EC',
            textAlign: 'center',
            marginBottom: '20px',
            lineHeight: 1.25,
            fontStyle: 'italic',
          }}>
            There Are More Ways to Give Than Money
          </h2>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '17px',
            color: '#F8F3EC',
            opacity: 0.7,
            textAlign: 'center',
            maxWidth: '620px',
            margin: '0 auto 64px',
            lineHeight: 1.8,
          }}>
            Some of the most powerful things our supporters do happen far from a donation form. Here are three ways to get involved with your time.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }} className="give-time-grid">

            {/* CARD 1 — HOST A VILLAGE MEETING */}
            <div style={{
              background: '#2C2721',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <img
                src={`${BASE}/images/involve-village-meeting.jpg`}
                alt="A Village Meeting presentation in a home"
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                <p style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#574C3F',
                }}>
                  Host a Village Meeting
                </p>
                <h3 style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: '22px',
                  fontWeight: 400,
                  color: '#F8F3EC',
                  lineHeight: 1.3,
                  margin: 0,
                }}>
                  Open Your Home
                </h3>
                <p style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '15px',
                  color: '#F8F3EC',
                  opacity: 0.75,
                  lineHeight: 1.75,
                  flex: 1,
                  margin: 0,
                }}>
                  We come to you — your living room, your congregation, your neighborhood. One evening. One presentation. The people in that room leave knowing what's happening in the valley and exactly how they can help. Village meetings raise awareness, collect donations, and organize kit drives.
                </p>
                <a
                  href="/contact"
                  style={{
                    display: 'block',
                    background: '#F8F3EC',
                    color: '#36302A',
                    padding: '14px 20px',
                    borderRadius: '6px',
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    textAlign: 'center',
                    marginTop: 'auto',
                  }}
                >
                  Contact Us to Get Involved
                </a>
              </div>
            </div>

            {/* CARD 2 — COLLECT KITS */}
            <div style={{
              background: '#2C2721',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <img
                src={`${BASE}/images/involve-collect-kits.jpg`}
                alt="Midwives receiving kits in Alta Verapaz"
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                <p style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#574C3F',
                }}>
                  Collect Kits
                </p>
                <h3 style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: '22px',
                  fontWeight: 400,
                  color: '#F8F3EC',
                  lineHeight: 1.3,
                  margin: 0,
                }}>
                  Build a Kit from Home
                </h3>
                <p style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '15px',
                  color: '#F8F3EC',
                  opacity: 0.75,
                  lineHeight: 1.75,
                  flex: 1,
                  margin: 0,
                }}>
                  Looking for a meaningful family project, a community service activity, or a hands-on way for your church group to get involved? Collecting kits is one of the most tangible things you can do from home. We assemble midwife kits for traditional birth attendants and newborn kits for the babies they deliver — and we bring every donated kit down on our bi-annual expeditions to Alta Verapaz.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto' }}>
                  <a
                    href="https://www.justserve.org/TheHumbleVillage"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      background: '#F8F3EC',
                      color: '#36302A',
                      padding: '13px 20px',
                      borderRadius: '6px',
                      fontFamily: 'Figtree, sans-serif',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      textAlign: 'center',
                    }}
                  >
                    JustServe Opportunity
                  </a>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1sf9YdcwXmECM9f3uA4vzhOX0OZjn6kAXyTb_nDuOI5E/edit?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      background: 'transparent',
                      color: '#F8F3EC',
                      padding: '12px 20px',
                      borderRadius: '6px',
                      border: '1.5px solid rgba(248,243,236,0.35)',
                      fontFamily: 'Figtree, sans-serif',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      textAlign: 'center',
                    }}
                  >
                    View Kit Collection Instructions
                  </a>

                </div>
              </div>
            </div>

            {/* CARD 3 — VILLAGE TO VILLAGE EXPEDITION */}
            <div style={{
              background: '#2C2721',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <img
                src={`${BASE}/images/involve-expedition.jpg`}
                alt="Expedition group with families in Alta Verapaz"
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                <p style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#574C3F',
                }}>
                  Village to Village Expedition
                </p>
                <h3 style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: '22px',
                  fontWeight: 400,
                  color: '#F8F3EC',
                  lineHeight: 1.3,
                  margin: 0,
                }}>
                  Come to Guatemala
                </h3>
                <p style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '15px',
                  color: '#F8F3EC',
                  opacity: 0.75,
                  lineHeight: 1.75,
                  flex: 1,
                  margin: 0,
                }}>
                  Twice a year, in March and November, we take a small group to Alta Verapaz, Guatemala. Families are welcome. You walk the ridge paths. You meet the mothers. You see the programs firsthand. Cost: $500 donation + ~$500 in-country + flight. There is nothing else quite like it.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto' }}>
                  <a
                    href="/contact"
                    style={{
                      display: 'block',
                      background: '#F8F3EC',
                      color: '#36302A',
                      padding: '13px 20px',
                      borderRadius: '6px',
                      fontFamily: 'Figtree, sans-serif',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      textAlign: 'center',
                    }}
                  >
                    Contact Us to Get Involved
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* QUESTIONS LINK BELOW CARDS */}
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <a
              href="/contact"
              style={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: '13px',
                color: '#F8F3EC',
                opacity: 0.65,
                textDecoration: 'underline',
                letterSpacing: '0.05em',
              }}
            >
              Questions? Contact our team
            </a>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .give-time-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* PARTNERSHIP LINE */}
      <section style={{ background: '#F8F3EC', padding: '48px 40px', textAlign: 'center' }}>
        <p style={{
          fontFamily: 'Figtree, sans-serif',
          fontSize: '16px',
          color: '#574C3F',
          lineHeight: 1.7,
        }}>
          Are you a business, family foundation, or influencer?{' '}
          <a
            href="/contact"
            style={{ color: '#36302A', fontWeight: 700, textDecoration: 'underline' }}
          >
            We'd love to partner with you.
          </a>
        </p>
      </section>

      {/* FILM */}
      <section style={{ background: '#36302A', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#BFA07A', marginBottom: '16px', textAlign: 'center' }}>
            Before You Give
          </p>
          <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 400, color: '#F6F3EC', marginBottom: '16px', textAlign: 'center' }}>
            Watch the Film
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', color: '#F6F3EC', opacity: 0.6, marginBottom: '48px', lineHeight: 1.7, textAlign: 'center', fontStyle: 'italic' }}>
            This is why we do what we do — and why your gift matters.
          </p>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
            <iframe
              src="https://www.youtube.com/embed/bh0TpBF26uQ"
              title="The Humble Village Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        </div>
      </section>

      {/* PHOTO WITH STORIES LINK */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <img
          src={`${BASE}/images/give-children-community.png`}
          alt="Children at a community gathering in Alta Verapaz, Guatemala"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(54,48,42,0.7)' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '60px 40px', color: '#F6F3EC', maxWidth: '600px' }}>
          <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 400, marginBottom: '20px', lineHeight: 1.3, fontStyle: 'italic' }}>
            See where your gift goes.
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', opacity: 0.8, marginBottom: '32px', lineHeight: 1.7 }}>
            Read the stories of children and families whose lives have been transformed.
          </p>
          <Link
            to="/stories"
            style={{
              display: 'inline-block',
              background: '#F6F3EC',
              color: '#36302A',
              padding: '14px 36px',
              borderRadius: '6px',
              fontFamily: 'Figtree, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Read Impact Stories
          </Link>
        </div>
      </section>
    </main>
  );
}
