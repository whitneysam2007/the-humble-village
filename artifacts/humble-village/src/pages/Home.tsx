import { useState } from 'react';
import { Link } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Home() {
  const [email, setEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);

  async function handleNewsletterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNewsletterSubmitting(true);
    const data = new FormData(e.currentTarget);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      });
    } catch {}
    setNewsletterSent(true);
    setNewsletterSubmitting(false);
  }

  return (
    <main>
      {/* HERO */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '140px',
        background: '#36302A',
      }}>
        <img
          src={`${BASE}/images/hv-main-bg.png`}
          alt="The Humble Village"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '65% 20%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(54,48,42,0.55) 0%, rgba(54,48,42,0.20) 55%, rgba(54,48,42,0.05) 100%)' }} />
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
            maxWidth: '440px',
            opacity: 0.9,
            marginBottom: '36px',
            fontFamily: 'Figtree, sans-serif',
          }}>
            Every dollar you give empowers Q'eqchi' Mayan families to overcome extreme poverty, chronic malnutrition, and generational hopelessness through essential nutrition, healthcare, education, and community support.
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
              Partner With Us
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
            color: '#C8B59E',
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
            Narú means "can do" in the Q'eqchi' language. It describes our unique approach to this work.
          </p>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '17px',
            lineHeight: 1.85,
            color: '#F6F3EC',
            opacity: 0.85,
            marginBottom: '20px',
          }}>
            Our goal is not to simply provide food: we offer urgent nutritional support and then teach mothers how to nourish their own children and build a sustainable future.
          </p>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '17px',
            lineHeight: 1.85,
            color: '#F6F3EC',
            opacity: 0.85,
            marginBottom: '20px',
          }}>
            With our help, families learn what they <strong>"can do"</strong> despite their challenging circumstances.
          </p>
        </div>
      </section>

      {/* THE CRISIS */}
      <section style={{ background: '#F8F3EC', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
            marginBottom: '16px',
            maxWidth: '900px',
            margin: '0 auto 16px',
          }}>
            Alta Verapaz, Guatemala has the <em>highest rates of child malnutrition</em> in all of Central, South, and North America.
          </h2>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '14px',
            color: '#574C3F',
            letterSpacing: '0.05em',
            marginTop: '16px',
          }}>
            — UNICEF
          </p>
          </div>

          {/* Two-column: stats left, photo right */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '56px',
            alignItems: 'center',
          }} className="crisis-layout">
            {/* LEFT: stats + body + CTA */}
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginBottom: '36px',
              }} className="crisis-stats-grid">
                {[
                  { pct: '100%', label: 'of infants in our programs have mothers who cannot produce enough breastmilk to feed them' },
                  { pct: '100%', label: 'of families in our program have at least one child suffering from malnutrition. Some have already lost a child to malnutrition.' },
                  { pct: '100%', label: 'of these families live on approximately $1 a day, subsisting on 2–3 corn tortillas' },
                  { pct: '98%',  label: 'of mothers have no access to birth control and have large families they cannot support' },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: '#574C3F',
                    borderRadius: '4px',
                    padding: '24px 20px',
                  }}>
                    <div style={{
                      fontFamily: 'Libre Baskerville, serif',
                      fontSize: 'clamp(26px, 3vw, 38px)',
                      fontWeight: 400,
                      color: '#F8F3EC',
                      lineHeight: 1,
                      marginBottom: '10px',
                    }}>
                      {item.pct}
                    </div>
                    <p style={{
                      fontFamily: 'Figtree, sans-serif',
                      fontSize: '12px',
                      lineHeight: 1.6,
                      color: '#F8F3EC',
                      opacity: 0.85,
                      margin: 0,
                    }}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <p style={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#36302A',
                opacity: 0.8,
                marginBottom: '32px',
              }}>
                With little to no government support, at-risk mothers do not have access to healthcare, clean water, or food for their malnourished children.
              </p>
              <Link to="/ourcause" className="btn-primary">See the Full Picture</Link>
            </div>

            {/* RIGHT: photo */}
            <div style={{ overflow: 'hidden' }}>
              <img
                src={`${BASE}/images/crisis-mother.webp`}
                alt="A mother and her children in Alta Verapaz, Guatemala"
                style={{
                  width: '100%',
                  height: '605px',
                  objectFit: 'cover',
                  objectPosition: 'center 55%',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .crisis-layout { grid-template-columns: 1fr !important; }
            .crisis-stats-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* FILM */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '16px', textAlign: 'center' }}>
            Our Story
          </p>
          <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 400, color: '#36302A', marginBottom: '16px', textAlign: 'center' }}>
            Watch the Film
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', color: '#574C3F', opacity: 0.8, marginBottom: '48px', lineHeight: 1.7, textAlign: 'center', fontStyle: 'italic' }}>
            See our mission in action. Join us for the journey.
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

      {/* ELENA'S STORY */}
      <section style={{ background: '#36302A', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#C8B59E',
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
            gridTemplateColumns: '40% 60%',
            gap: '48px',
            alignItems: 'stretch',
          }} className="elena-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <div style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  color: '#C8B59E',
                  marginBottom: '8px',
                  textAlign: 'center',
                }}>BEFORE</div>
                <img
                  src={`${BASE}/images/elena-before.jpg`}
                  alt="Jeremia and Gerson — Elena would not leave the corner"
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '4px' }}
                />
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', color: '#F8F3EC', opacity: 0.7, marginTop: '6px', textAlign: 'center', fontStyle: 'italic', lineHeight: 1.4 }}>
                  Twins Jeremia & Gerson with their Aunt and Grandmother. Elena, not pictured.
                </p>
              </div>
              <div>
                <div style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  color: '#C8B59E',
                  marginBottom: '8px',
                  textAlign: 'center',
                }}>AFTER</div>
                <img
                  src={`${BASE}/images/elena-after.jpg`}
                  alt="Elena with her boys today"
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '4px' }}
                />
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', color: '#F8F3EC', opacity: 0.7, marginTop: '6px', textAlign: 'center', fontStyle: 'italic', lineHeight: 1.4 }}>
                  7 years later, Elena with her boys today.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                Elena, malnourished herself, could not produce milk. She fed her babies corn water — it only made things worse. With expected burials approaching, she emotionally detached from her boys and resigned herself to hiding in the corner of the room, too ashamed to emerge.
              </p>
              <p style={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: '17px',
                lineHeight: 1.85,
                color: '#F6F3EC',
                opacity: 0.85,
                marginBottom: '20px',
              }}>
                The twins were immediately admitted into our nutrition program. Gerson was diagnosed with a tongue tie, a correctable condition, and received life-saving care. Elena entered the self-reliance program at the Narú Training Center, gaining tools, skills, and support to pull herself and her family out of poverty.
              </p>
              <p style={{
                fontFamily: 'Libre Baskerville, serif',
                fontSize: '20px',
                fontStyle: 'italic',
                color: '#F8F3EC',
                lineHeight: 1.5,
                marginBottom: '40px',
              }}>
                Healthy boys. A thriving home. And Elena—empowered and independent—is now a leader in her community.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/stories" className="btn-primary" style={{ background: '#F8F3EC', color: '#36302A' }}>
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
      <section style={{ background: '#F8F3EC', padding: '100px 40px' }}>
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
              { number: '758', label: 'Children received\nnutrition support' },
              { number: '417', label: 'Children with improved\nnutritional status' },
              { number: '274', label: 'Children achieved healthy weight' },
              { number: '304', label: 'Kitchen gardens established' },
              { number: '3', label: 'Brick-and-mortar\nNarú Training Centers' },
              { number: '3,620', label: 'Families attended\neducation sessions' },
              { number: '1,288', label: 'In-home training sessions\ndelivered' },
              { number: '12,807', label: 'Visits to Narú\nHealth & Training Centers' },
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
                  whiteSpace: 'pre-line',
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
            color: '#C8B59E',
            marginBottom: '28px',
          }}>
            Do More With Your Donation
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(26px, 4vw, 46px)',
            fontWeight: 400,
            color: '#F6F3EC',
            lineHeight: 1.25,
            marginBottom: '28px',
          }}>
            Join the Narú Circle and Transform Generations
          </h2>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '17px',
            lineHeight: 1.8,
            color: '#F6F3EC',
            opacity: 0.85,
            marginBottom: '28px',
          }}>
            One-time donations do wonders for our life-saving work, but committing to an annual donation ensures perpetual security for our families.
          </p>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '17px',
            lineHeight: 1.8,
            color: '#F6F3EC',
            opacity: 0.85,
            marginBottom: '48px',
          }}>
            As part of the Narú Circle, you become a Humble Village partner and program steward. Your annual donation ensures vital nutrition security and self-reliant futures for generations to come.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/naru-circle"
              style={{
                display: 'inline-block',
                background: '#F6F3EC',
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
            <Link
              to="/naru-circle#programs"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#F6F3EC',
                padding: '18px 48px',
                borderRadius: '6px',
                border: '1.5px solid rgba(246,243,236,0.5)',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Programs to Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* INSTAGRAM GRID */}
      <section style={{ background: '#FFFFFF', padding: '80px 40px' }}>
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
          </div>
          {/* Two-column social grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {/* Facebook column */}
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                {['social-kids-playing.webp', 'social-kids-fence.webp'].map((photo, i) => (
                  <a key={i} href="https://www.facebook.com/NaruGuatemala/" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'block', aspectRatio: '1', overflow: 'hidden', borderRadius: '4px' }}>
                    <img src={`${BASE}/images/${photo}`} alt="The Humble Village on Facebook"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')} />
                  </a>
                ))}
              </div>
              <a href="https://www.facebook.com/NaruGuatemala/" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#36302A',
                  fontFamily: 'Figtree, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em',
                  border: '1px solid #C8B59E', borderRadius: '4px', padding: '10px 18px', width: '100%', boxSizing: 'border-box' as const, justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                <span>Facebook &nbsp;·&nbsp; @NaruGuatemala</span>
              </a>
            </div>
            {/* Instagram column */}
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                {[{ file: 'social-baby-huipil.webp', pos: 'center top' }, { file: 'social-man-baby.jpg', pos: 'center center' }].map((photo, i) => (
                  <a key={i} href="https://www.instagram.com/thehumblevillageproject/" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'block', aspectRatio: '1', overflow: 'hidden', borderRadius: '4px' }}>
                    <img src={`${BASE}/images/${photo.file}`} alt="The Humble Village on Instagram"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: photo.pos, transition: 'transform 0.4s ease' }}
                      onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')} />
                  </a>
                ))}
              </div>
              <a href="https://www.instagram.com/thehumblevillageproject/" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#36302A',
                  fontFamily: 'Figtree, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em',
                  border: '1px solid #C8B59E', borderRadius: '4px', padding: '10px 18px', width: '100%', boxSizing: 'border-box' as const, justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                <span>Instagram &nbsp;·&nbsp; @thehumblevillageproject</span>
              </a>
            </div>
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
          {newsletterSent ? (
            <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', color: '#F6F3EC', opacity: 0.9, lineHeight: 1.7 }}>
              Thank you — you're on the list.
            </p>
          ) : (
            <form
              name="newsletter"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleNewsletterSubmit}
              style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <input type="hidden" name="bot-field" style={{ display: 'none' }} />
              <input
                type="email"
                name="email"
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
                disabled={newsletterSubmitting}
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
                  cursor: newsletterSubmitting ? 'wait' : 'pointer',
                  opacity: newsletterSubmitting ? 0.7 : 1,
                }}
              >
                {newsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
