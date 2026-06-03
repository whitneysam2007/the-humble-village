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
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '650px', margin: '0 auto', padding: '160px 40px 120px' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#C8B59E',
            marginBottom: '28px',
          }}>
            Our Programs
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
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#F8F3EC', opacity: 0.88, marginBottom: '32px' }}>
            Once home to thriving, self-sustaining communities, now facing relentless scarcity and instability.
          </p>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#F8F3EC', opacity: 0.88, marginBottom: '32px' }}>
            These resilient villages are shaped by forces beyond their control:
          </p>
          <p style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(17px, 2vw, 22px)',
            fontStyle: 'italic',
            color: '#F8F3EC',
            lineHeight: 1.7,
            marginBottom: '32px',
          }}>
            36 years of civil war, mass genocide, and ongoing marginalization.
          </p>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#F8F3EC', opacity: 0.88, marginBottom: '56px' }}>
            Isolated from resources and opportunity, these indigenous communities have been left desolate, unseen, and forgotten.
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

      {/* HOW WE WORK */}
      <section style={{ padding: '100px 40px', background: '#F8F3EC' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }} className="how-we-work-grid">
          <div>
            <img
              src={`${BASE}/images/how-we-work.jpg`}
              alt="A mother holding her baby in Alta Verapaz, Guatemala"
              style={{ width: '100%', height: '480px', objectFit: 'cover', objectPosition: 'center 30%', borderRadius: '4px' }}
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
              marginBottom: '20px',
            }}>
              Our Model
            </p>
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
            <p style={{ fontSize: '17px', lineHeight: 1.85, color: '#36302A', opacity: 0.85, marginBottom: '28px' }}>
              100% of funds donated go directly to these projects and local Guatemalan staff who are on the ground working day to day. The Humble Village takes no overhead or administrative costs, thanks to a generous team who volunteers their time and resources to ensure the donations make the greatest impact possible.
            </p>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .how-we-work-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* IMPACT STATS — REMOVED */}
      {false &&
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
      </section>}

      {/* HOW THE PROGRAM WORKS */}
      <section style={{ background: '#36302A', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(24px, 3.5vw, 40px)',
            fontWeight: 400,
            color: '#F8F3EC',
            textAlign: 'center',
            marginBottom: '48px',
            lineHeight: 1.25,
          }}>
            The Narú Nutrition Program
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="program-how-grid">
            {[
              {
                step: '01',
                title: 'Enroll',
                body: 'Children are assessed monthly by trained nurses using Guatemala\'s official Carné del Niño. Any child meeting World Health Organization 2006 criteria for severe or moderate malnutrition is enrolled immediately, including infants under 6 months at the highest risk.',
              },
              {
                step: '02',
                title: 'Nourish',
                body: 'Each month, a mother receives Incaparina (a nutritional supplement) along with age-appropriate feeding guidance. When a mother has insufficient milk but is still producing some, we provide Maternal Incaparina to support breastfeeding. Formula is reserved only for cases where there is no milk supply at all.',
              },
              {
                step: '03',
                title: 'Educate',
                body: 'Alongside nutrition support, families receive 18 months of Narú education: gardening, clean-water practices, and family nutrition. The goal is not dependency — it is self-reliance. Mothers learn what they CAN DO.',
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
                  color: '#C8B59E',
                  opacity: 0.5,
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
                    color: '#F8F3EC',
                    marginBottom: '10px',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '15px', lineHeight: 1.8, color: '#F8F3EC', opacity: 0.75 }}>
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
            "Ochoch" means "home" in Q'eqchi'. Each of our three centers is a sanctuary, a working model home where families come to see and do. Because most mothers whose children are in our nutrition program have less than a second-grade education, learning happens by touching, tasting, and harvesting. Every Ochoch has a model garden, a teaching kitchen, and a medical clinic where nurses weigh babies, track development, and educate mothers. Families leave with seedlings, skills, and the confidence to sustain their own gardens at home.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>

            {/* NARÚ MEDICAL CENTERS */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="location-grid-0">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <img src={`${BASE}/images/naru-measuring.jpg`} alt="Nurse measuring baby at Narú Medical Center" style={{ width: '100%', height: '210px', objectFit: 'cover', objectPosition: 'center top', borderRadius: '4px' }} />
                <img src={`${BASE}/images/naru-education-class.jpg`} alt="Education class at Narú Medical Center" style={{ width: '100%', height: '210px', objectFit: 'cover', objectPosition: 'center top', borderRadius: '4px' }} />
                <img src={`${BASE}/images/naru-cooking.jpg`} alt="Cooking class at Narú Medical Center" style={{ width: '100%', height: '210px', objectFit: 'cover', objectPosition: 'center top', borderRadius: '4px', gridColumn: '1 / 3' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 400, color: '#36302A', marginBottom: '8px', lineHeight: 1.2 }}>Narú Medical Center</h3>
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '16px' }}>Serving 93 communities</p>
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', lineHeight: 1.8, color: '#574C3F', marginBottom: '24px' }}>Located in the heart of Senahu — a town reached by a winding, six-hour mountain drive from Guatemala City — our center serves as a critical hub for mothers traveling up to three hours to reach us. It offers both clinical care and education, staffed by nurses, outreach workers, and medical educators. We provide training sessions to families on home hygiene and healthcare, food production and cooking demonstrations using fresh vegetables from the in-house garden — which also provides plant starts for families to grow at home. Our nurses monitor the monthly progress of malnourished babies on the nutrition program. Prenatal care received in our medical clinic is especially important to expectant mothers and has life-changing implications for both them and their babies. The center partners with ADP for teen abuse prevention and CARE International for micro-business skills for young mothers.</p>
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '13px', fontWeight: 700, color: '#36302A', letterSpacing: '0.05em' }}>$82,000 / year sustains this site</p>
              </div>
              <style>{`@media (max-width: 768px) { .location-grid-0 { grid-template-columns: 1fr !important; } }`}</style>
            </div>

            {/* OCHOCH CHARMAK */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="location-grid-1">
              <div style={{ order: 0 }}>
                <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 400, color: '#36302A', marginBottom: '8px', lineHeight: 1.2 }}>Ochoch Charmak</h3>
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '16px' }}>Serving 25 communities</p>
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', lineHeight: 1.8, color: '#574C3F', marginBottom: '24px' }}>Here at this training location, families find a sanctuary to learn and receive support. Especially prominent is the unique agricultural site where crops and farming practices are tested to provide the best methods for families to engage in food production at home. Charmak hosts expansive gardens and a fish pond where families learn to harvest and cook in beautiful teaching kitchens. Ochoch Charmak serves as a central hub for elected village midwives, who receive ongoing training and support from our nurses. The site also runs an ongoing chicken program, where families complete a care course to take home chickens — providing critical protein, eggs, and income for pregnant mothers and young children.</p>
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '13px', fontWeight: 700, color: '#36302A', letterSpacing: '0.05em' }}>$77,000 / year sustains this site</p>
              </div>
              <div style={{ order: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '8px' }}>
                <img src={`${BASE}/images/charmak-midwives.jpg`} alt="Midwife training at Charmak" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', gridColumn: '1 / 2' }} />
                <img src={`${BASE}/images/charmak-garden.jpg`} alt="Garden harvesting at Charmak" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', gridColumn: '2 / 3' }} />
                <img src={`${BASE}/images/charmak-cooking.webp`} alt="Cooking class at Charmak" style={{ width: '100%', height: '200px', objectFit: 'cover', objectPosition: 'center top', borderRadius: '4px', gridColumn: '1 / 3' }} />
              </div>
              <style>{`@media (max-width: 768px) { .location-grid-1 { grid-template-columns: 1fr !important; } .location-grid-1 > div { order: unset !important; } }`}</style>
            </div>

            {/* OCHOCH SOLLY */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="location-grid-2">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <img src={`${BASE}/images/solly-chickens.webp`} alt="Chicken program at Ochoch Solly" style={{ width: '100%', height: '200px', objectFit: 'cover', objectPosition: 'center top', borderRadius: '4px' }} />
                <img src={`${BASE}/images/ochoch-solly-beans.jpg`} alt="Red beans discovered at Ochoch Solly" style={{ width: '100%', height: '200px', objectFit: 'cover', objectPosition: 'center top', borderRadius: '4px' }} />
                <img src={`${BASE}/images/ochoch-solly-garden.png`} alt="Garden at Ochoch Solly" style={{ width: '100%', height: '200px', objectFit: 'cover', objectPosition: 'center', borderRadius: '4px', gridColumn: '1 / 3' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 400, color: '#36302A', marginBottom: '8px', lineHeight: 1.2 }}>Ochoch Solly</h3>
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '16px' }}>Serving 18 communities</p>
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', lineHeight: 1.8, color: '#574C3F', marginBottom: '24px' }}>This remote training center in the mountaintop village of Sepalau, hours from our health clinic in the town of Senahu, serves as a critical site for the surrounding communities often cut off from medical care by impassable roads during extreme weather. Families and village leaders come together at Solly, working to lift their community through training, education, and medical support. Narú's programs and projects are creating a lasting impact. In these "cold lands" where normal crops struggle, our agriculture team discovered a resilient red bean previously unknown to the community. Today, that bean grows abundantly, providing vital nutrition and even serving as a local currency traded for goods and services.</p>
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '13px', fontWeight: 700, color: '#36302A', letterSpacing: '0.05em' }}>$80,000 / year sustains this site</p>
              </div>
              <style>{`@media (max-width: 768px) { .location-grid-2 { grid-template-columns: 1fr !important; } }`}</style>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#574C3F', padding: '100px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', color: '#F6F3EC' }}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(24px, 3.5vw, 40px)',
            fontWeight: 400,
            marginBottom: '36px',
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
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
