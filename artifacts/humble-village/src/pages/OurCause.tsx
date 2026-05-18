import { Link } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function OurCause() {
  return (
    <main>
      {/* HERO — THE FORGOTTEN VALLEY */}
      <section style={{
        position: 'relative',
        paddingTop: '80px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        <img
          src={`${BASE}/images/the-forgotten-valley.jpg`}
          alt="Q'eqchi' Mayan community"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(36,30,24,0.72) 0%, rgba(36,30,24,0.82) 100%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '760px', margin: '0 auto', padding: '160px 40px 120px' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#574C3F',
            marginBottom: '28px',
          }}>
            Our Cause
          </p>
          <h1 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(28px, 4vw, 52px)',
            fontWeight: 400,
            color: '#F8F3EC',
            marginBottom: '48px',
            lineHeight: 1.15,
            fontStyle: 'italic',
          }}>
            The Forgotten Valley
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 2, color: '#F8F3EC', opacity: 0.88, marginBottom: '32px' }}>
            Once home to thriving, self-sustaining communities—now facing<br />
            relentless scarcity and instability.
          </p>
          <p style={{ fontSize: '18px', lineHeight: 2, color: '#F8F3EC', opacity: 0.88, marginBottom: '32px' }}>
            These resilient villages are shaped by<br />
            forces beyond their control:
          </p>
          <p style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(17px, 2vw, 22px)',
            fontStyle: 'italic',
            color: '#F8F3EC',
            lineHeight: 2,
            marginBottom: '32px',
          }}>
            36 years of civil war and mass genocide,<br />
            economic collapse in the 2000s,<br />
            and ongoing marginalization.
          </p>
          <p style={{ fontSize: '18px', lineHeight: 2, color: '#F8F3EC', opacity: 0.88, marginBottom: '56px' }}>
            Isolated from resources and opportunity,<br />
            these indigenous communities have been left<br />
            desolate, unseen, and forgotten.
          </p>
          <p style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(26px, 3.5vw, 44px)',
            fontStyle: 'italic',
            color: '#F8F3EC',
            lineHeight: 1.2,
          }}>
            Until now.
          </p>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section style={{ background: '#F8F3EC', padding: '100px 40px' }}>
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
            2025 Results
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(24px, 3.5vw, 40px)',
            fontWeight: 400,
            color: '#36302A',
            textAlign: 'center',
            marginBottom: '72px',
          }}>
            What one year of Narú "Can Do" looks like
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }} className="cause-stats-grid">
            {[
              { number: '274', label: 'Children reached a healthy weight' },
              { number: '346', label: 'At-risk pregnant women received prenatal care' },
              { number: '304', label: 'Kitchen gardens established' },
              { number: '184', label: 'Communities benefited' },
              { number: '12,807', label: 'Total visits to our health and training centers' },
              { number: '3,620', label: 'Training attendances by families' },
              { number: '354', label: 'Midwives attended training sessions' },
              { number: '1,288', label: 'Home visits to families' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '32px 16px', background: '#36302A', borderRadius: '4px' }}>
                <div style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  fontWeight: 400,
                  color: '#F8F3EC',
                  marginBottom: '12px',
                  lineHeight: 1,
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '13px',
                  lineHeight: 1.5,
                  color: '#F8F3EC',
                  opacity: 0.7,
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) {
              .cause-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 480px) {
              .cause-stats-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* HOW THE PROGRAM WORKS */}
      <section style={{ background: '#F8F3EC', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
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
            The Narú Nutrition Program
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(24px, 3.5vw, 40px)',
            fontWeight: 400,
            color: '#36302A',
            textAlign: 'center',
            marginBottom: '48px',
            lineHeight: 1.25,
          }}>
            How the Program Works
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="program-how-grid">
            {[
              {
                step: '01',
                title: 'Enroll',
                body: 'Children are assessed monthly by trained nurses using Guatemala\'s official Carné del Niño. Any child meeting WHO 2006 criteria for severe or moderate malnutrition is enrolled immediately — including infants under 6 months at the highest risk.',
              },
              {
                step: '02',
                title: 'Nourish',
                body: 'Each month, a mother receives Incaparina — a nutritional supplement — along with age-appropriate feeding guidance. When a mother has insufficient milk but is still producing some, we provide Maternal Incaparina to support breastfeeding. Formula is reserved only for cases where there is no milk supply at all.',
              },
              {
                step: '03',
                title: 'Educate',
                body: 'Alongside nutrition support, families receive 18 months of Narú education: gardening, clean water practices, family nutrition, and food production. The goal is not dependency — it is self-reliance. Mothers learn what they CAN DO.',
              },
              {
                step: '04',
                title: 'Graduate',
                body: 'When a child reaches a healthy weight and the family has the tools to sustain it, they graduate. Over 274 children reached a healthy weight in 2025 alone. Each graduation is a family transformed — and a cycle of hunger interrupted.',
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: '36px',
                  fontWeight: 400,
                  color: '#574C3F',
                  opacity: 0.4,
                  lineHeight: 1,
                  flexShrink: 0,
                  width: '48px',
                }}>
                  {item.step}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'Libre Baskerville, serif',
                    fontSize: '20px',
                    fontWeight: 400,
                    color: '#36302A',
                    marginBottom: '10px',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '15px', lineHeight: 1.8, color: '#36302A', opacity: 0.8 }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 768px) {
              .program-how-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* THE OCHOCH MODEL */}
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
            Our Model
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(26px, 3.5vw, 42px)',
            fontWeight: 400,
            color: '#F6F3EC',
            textAlign: 'center',
            marginBottom: '20px',
          }}>
            The Ochoch
          </h2>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '16px',
            color: '#F6F3EC',
            opacity: 0.7,
            textAlign: 'center',
            marginBottom: '72px',
            fontStyle: 'italic',
          }}>
            "Ochoch" means "home" in Q'eqchi' — the indigenous language of the families we serve.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px' }} className="ochoch-grid">
            {[
              {
                step: 'Grow',
                img: 'e6939af0-9657-4e0f-8cb0-a0a67f9f44c4.JPG',
                body: 'Every Ochoch has a model garden where families learn to grow over 22 varieties of fruits and vegetables. We use chemical-free practices rooted in ancient Maya traditions — from seed to table, families gain food sovereignty.',
              },
              {
                step: 'Cook',
                img: 'solly-kitchen-women.jpg',
                body: 'The model kitchen is where nutrition becomes a daily practice. Women learn to transform what they grow into nourishing meals for their families. Cooking demonstrations, recipe guides, and ongoing support ensure the knowledge sticks.',
              },
              {
                step: 'Track',
                img: 'IMG_5484-1024x683.jpg',
                body: 'Each child is monitored through regular clinic visits and home visits by Narú nurses. We track weight, development, and health — and intervene immediately when a child falls behind. No one slips through the cracks.',
              },
              {
                step: 'Take Home',
                img: 'IMG_5278.JPG',
                body: 'When families graduate, they take home seedlings, tools, and the skills to sustain their own garden indefinitely. The Ochoch model is not a temporary program — it is a permanent transformation.',
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
                  <img
                    src={`${BASE}/images/${item.img}`}
                    alt={item.step}
                    style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: '#36302A',
                    color: '#F8F3EC',
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    padding: '6px 14px',
                    borderRadius: '3px',
                  }}>
                    {item.step}
                  </div>
                </div>
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '15px', lineHeight: 1.75, color: '#F6F3EC', opacity: 0.8 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 768px) {
              .ochoch-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* THREE LOCATIONS */}
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
            Where We Work
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(26px, 3.5vw, 42px)',
            fontWeight: 400,
            color: '#36302A',
            textAlign: 'center',
            marginBottom: '72px',
          }}>
            Three Sites. 184 Communities.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {[
              {
                name: 'Narú Medical Center',
                img: 'HV-photo.png',
                communities: '93 communities',
                annualCost: '$77,150 / year',
                body: 'The heart of our operations. The Narú Medical Center provides clinical care, outreach clinics, midwifery support, and pregnancy care across 93 communities. Families travel for hours to receive life-saving care here. The Center also runs model gardens, nutrition programs, and community education.',
                flip: false,
              },
              {
                name: 'Ochoch Charmak',
                img: '5c6da391-1394-4dce-a685-835062b5e382.JPG',
                communities: '25 communities',
                annualCost: '$72,362 / year',
                body: 'Set in a tropical climate, Ochoch Charmak serves 25 communities with education, clinical care, and food production training. A groundbreaking midwife pilot program launched here in 2025 in partnership with Ministry of Health nurses. A new clinic is under construction to serve the community year-round.',
                flip: true,
              },
              {
                name: 'Ochoch Solly',
                img: '9312a127-6296-49b2-9327-0c23facdc2e0.JPG',
                communities: '18 communities',
                annualCost: '$75,038 / year',
                body: 'Nestled in the cold highlands of Sepalau, Ochoch Solly serves 18 communities. In 2025, 12 neighboring families were connected to potable water — with 90 more served in partnership with Adicay. Our Youth Health Program launched here with 83 young adults receiving education on health and nutrition.',
                flip: false,
              },
            ].map((loc, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '60px',
                alignItems: 'center',
              }} className={`location-grid-${i}`}>
                <div style={{ order: loc.flip ? 1 : 0 }}>
                  <img
                    src={`${BASE}/images/${loc.img}`}
                    alt={loc.name}
                    style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '4px' }}
                  />
                </div>
                <div style={{ order: loc.flip ? 0 : 1 }}>
                  <p style={{
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#574C3F',
                    marginBottom: '12px',
                  }}>
                    {loc.communities}
                  </p>
                  <h3 style={{
                    fontFamily: 'Libre Baskerville, serif',
                    fontSize: 'clamp(22px, 2.5vw, 32px)',
                    fontWeight: 400,
                    color: '#36302A',
                    marginBottom: '20px',
                    lineHeight: 1.2,
                  }}>
                    {loc.name}
                  </h3>
                  <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', lineHeight: 1.8, color: '#574C3F', marginBottom: '24px' }}>
                    {loc.body}
                  </p>
                  <p style={{
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#36302A',
                    letterSpacing: '0.05em',
                  }}>
                    {loc.annualCost} sustains this site
                  </p>
                </div>
                <style>{`
                  @media (max-width: 768px) {
                    .location-grid-${i} { grid-template-columns: 1fr !important; }
                    .location-grid-${i} > div { order: unset !important; }
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#36302A', padding: '100px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', color: '#F6F3EC' }}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(24px, 3.5vw, 40px)',
            fontWeight: 400,
            marginBottom: '20px',
            lineHeight: 1.3,
          }}>
            You can sustain this work.
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '17px', opacity: 0.8, marginBottom: '40px', lineHeight: 1.7 }}>
            $320,931 per year sustains the entire operation — all three sites, every program, every family.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://www.zeffy.com/en-US/donation-form/donate-to-the-humble-village"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#F8F3EC',
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
              Donate Now
            </a>
            <Link
              to="/naru-circle"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#F6F3EC',
                padding: '15px 36px',
                borderRadius: '6px',
                border: '1.5px solid rgba(246,243,236,0.5)',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Narú Circle
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
