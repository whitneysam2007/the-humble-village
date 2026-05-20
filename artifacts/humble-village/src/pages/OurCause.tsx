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
          src={`${BASE}/images/forgotten-valley-hero.webp`}
          alt="Q'eqchi' Mayan community in Alta Verapaz, Guatemala"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 35%',
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
            color: '#C8B59E',
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
            Once home to thriving, self-sustaining communities, now facing<br />
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

      {/* MAP + UNICEF STAT */}
      <section style={{ background: '#F8F3EC', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1035px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: '60px', alignItems: 'center' }} className="map-stat-grid">
          <div>
            <img
              src={`${BASE}/images/unicef-map.png`}
              alt="UNICEF Malnutrition World Map — Alta Verapaz, Guatemala"
              style={{ width: '100%', display: 'block', borderRadius: '4px' }}
            />
          </div>
          <div>
            <p style={{
              fontFamily: 'Figtree, sans-serif',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#574C3F',
              marginBottom: '16px',
            }}>
              Where We Work
            </p>
            <h2 style={{
              fontFamily: 'Libre Baskerville, serif',
              fontSize: 'clamp(22px, 3vw, 36px)',
              fontWeight: 400,
              color: '#36302A',
              marginBottom: '24px',
              lineHeight: 1.2,
            }}>
              Alta Verapaz, Guatemala
            </h2>
            <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', lineHeight: 1.85, color: '#574C3F', marginBottom: '24px' }}>
              According to UNICEF, Alta Verapaz has the highest rates of malnutrition in children ages 0–5 in Central, South, and North America. Many indigenous Q'eqchi' Mayan families living here are marginalized, receiving little or no government support, with extremely limited access to healthcare and justice.
            </p>
            <p style={{
              fontFamily: 'Figtree, sans-serif',
              fontSize: '13px',
              color: '#574C3F',
              opacity: 0.6,
              fontStyle: 'italic',
            }}>
              Source: UNICEF Guatemala
            </p>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .map-stat-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
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
                body: 'Children are assessed monthly by trained nurses using Guatemala\'s official Carné del Niño. Any child meeting WHO 2006 criteria for severe or moderate malnutrition is enrolled immediately, including infants under 6 months at the highest risk.',
              },
              {
                step: '02',
                title: 'Nourish',
                body: 'Each month, a mother receives Incaparina (a nutritional supplement) along with age-appropriate feeding guidance. When a mother has insufficient milk but is still producing some, we provide Maternal Incaparina to support breastfeeding. Formula is reserved only for cases where there is no milk supply at all.',
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

      {/* THE OCHOCH — MERGED SECTION */}
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
            Our Sites
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(26px, 3.5vw, 42px)',
            fontWeight: 400,
            color: '#36302A',
            textAlign: 'center',
            marginBottom: '24px',
          }}>
            The Ochoch: A Sanctuary for Learning
          </h2>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '17px',
            lineHeight: 1.85,
            color: '#574C3F',
            textAlign: 'center',
            maxWidth: '760px',
            margin: '0 auto 80px',
          }}>
            "Ochoch" means "home" in Q'eqchi'. Each of our three centers is a sanctuary, a working model home where families come to see and do. Because most families have less than a second-grade education, learning happens by touching, tasting, and harvesting. Every Ochoch has a model garden, a teaching kitchen, and a medical clinic where nurses weigh babies, track development, and educate mothers. Families leave with seedlings, skills, and the confidence to sustain their own gardens at home.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {[
              {
                name: 'Narú Medical Centers',
                tagline: 'A health and well-being resource for all',
                img: 'ochoch-naru.webp',
                communities: '93 communities',
                annualCost: '$82,000 / year',
                body: 'The heart of our operations. Training sessions take families from seed to table with cooking demonstrations and practical recipes. The Center provides clinical care, nutrition programs, and community education to surrounding communities. We partner with ADP on abuse prevention for teenagers and with CARE International to support young mothers with micro-business skills.',
                flip: false,
              },
              {
                name: 'Ochoch Charmak',
                tagline: 'Training in a tropical climate',
                img: 'ochoch-charmak.webp',
                communities: '25 communities',
                annualCost: '$77,000 / year',
                body: '44 chicken pairs were provided to families, building sustainable protein sources for children. A groundbreaking pilot midwife program launched in partnership with Ministry of Health nurses for maternal and newborn care. After storm damage, a new roof was installed and the wood construction is being transformed into a full clinic to serve the community year-round.',
                flip: true,
              },
              {
                name: 'Ochoch Solly',
                tagline: 'Training in the cold lands',
                img: 'ochoch-solly.png',
                communities: '18 communities',
                annualCost: '$80,000 / year',
                body: 'Our Youth Program launched in January 2025 with Instituto Básico de Tzalamila, equipping 83 young adults with health and nutrition education. 12 neighboring families were connected to potable water in Sepalau, with 90 more served in partnership with Adicay. In a beautiful tradition, 36 elders from Sepalau joined the harvest at Ochoch Solly, building intergenerational community bonds.',
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
                    style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '4px' }}
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
                    marginBottom: '8px',
                  }}>
                    {loc.communities}
                  </p>
                  <h3 style={{
                    fontFamily: 'Libre Baskerville, serif',
                    fontSize: 'clamp(22px, 2.5vw, 34px)',
                    fontWeight: 400,
                    color: '#36302A',
                    marginBottom: '8px',
                    lineHeight: 1.2,
                  }}>
                    {loc.name}
                  </h3>
                  <p style={{
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '14px',
                    fontStyle: 'italic',
                    color: '#574C3F',
                    marginBottom: '20px',
                    opacity: 0.8,
                  }}>
                    {loc.tagline}
                  </p>
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
              Give Now
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
