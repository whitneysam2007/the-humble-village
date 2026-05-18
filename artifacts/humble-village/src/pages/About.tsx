import { Link } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function About() {
  return (
    <main>
      {/* HERO */}
      <section style={{ paddingTop: '80px', background: '#F8F3EC' }}>
        <div style={{
          maxWidth: '760px',
          margin: '0 auto',
          padding: '80px 40px 60px',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: '#574C3F',
            marginBottom: '24px',
            textTransform: 'uppercase',
          }}>
            About Us
          </p>
          <h1 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(26px, 3.5vw, 48px)',
            fontWeight: 400,
            color: '#36302A',
            marginBottom: '32px',
            lineHeight: 1.2,
          }}>
            The Humble Village: Empowering Mothers, Transforming Communities
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.85, color: '#36302A', opacity: 0.8, marginBottom: '20px' }}>
            We are a nonprofit working hand-in-hand with Q'eqchi' Mayan families in the highlands of Guatemala — where most survive on less than $1 a day and where child malnutrition reaches crisis levels.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.85, color: '#36302A', opacity: 0.8 }}>
            For over two decades, we have believed that when you educate and empower families — starting with women — you bless all of humanity.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }} className="about-photo-grid">
          <img src={`${BASE}/images/5c6da391-1394-4dce-a685-835062b5e382.JPG`} alt="Community" style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }} />
          <img src={`${BASE}/images/solly-kitchen-women.jpg`} alt="Women cooking at Solly kitchen" style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }} />
          <img src={`${BASE}/images/Naru_Team_Pic.jpeg`} alt="Narú team" style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }} />
        </div>
        <style>{`
          @media (max-width: 768px) {
            .about-photo-grid { grid-template-columns: 1fr !important; }
            .about-photo-grid img { height: 300px !important; }
          }
        `}</style>
      </section>

      {/* MISSION STATEMENT */}
      <section style={{ background: '#36302A', padding: '100px 40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#574C3F',
            marginBottom: '32px',
          }}>
            Our Mission
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(22px, 3.5vw, 38px)',
            fontWeight: 400,
            color: '#F6F3EC',
            lineHeight: 1.4,
          }}>
            Our mission is to <em>empower mothers</em> and families in Alta Verapaz, Guatemala to <em>break the cycle of hunger and infant mortality</em> in the Narú "Can Do" way.
          </h2>
          <div style={{ width: '48px', height: '2px', background: '#574C3F', margin: '40px auto' }} />
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '17px',
            lineHeight: 1.85,
            color: '#F6F3EC',
            opacity: 0.8,
          }}>
            We do this by providing nutrition, education, and life-saving tools that build lasting self-reliance.
          </p>
        </div>
      </section>

      {/* HOW WE HELP */}
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
            How We Help
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(26px, 3.5vw, 42px)',
            fontWeight: 400,
            color: '#36302A',
            textAlign: 'center',
            marginBottom: '72px',
          }}>
            A Three-Part Path to Self-Reliance
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }} className="howhelp-grid">
            {[
              {
                step: '01',
                title: 'Emergency Nutrition',
                body: 'We begin by providing emergency nutrition for infants and children suffering from severe acute malnutrition — stabilizing lives and giving families a foundation to build on.',
              },
              {
                step: '02',
                title: 'Essential Skills',
                body: 'We teach gardening, clean water practices, and family nutrition. Families learn to grow their own food, cook healthy meals, and care for their health — tools they keep forever.',
              },
              {
                step: '03',
                title: '18 Months to Self-Reliance',
                body: 'We continue with 18 months of Narú education that empowers women to achieve lasting self-reliance. We walk with each family until they are truly ready to stand on their own.',
              },
            ].map((item, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: '48px',
                  fontWeight: 400,
                  color: '#F8F3EC',
                  WebkitTextStroke: '1px #C4B8AC',
                  marginBottom: '20px',
                  lineHeight: 1,
                }}>
                  {item.step}
                </div>
                <h3 style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: '20px',
                  fontWeight: 400,
                  color: '#36302A',
                  marginBottom: '16px',
                  lineHeight: 1.3,
                }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '15px', lineHeight: 1.75, color: '#574C3F' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 768px) {
              .howhelp-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '120px 40px' }}>
        <img
          src={`${BASE}/images/field-walking.webp`}
          alt="Families walking through the valley"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(54,48,42,0.78)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
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
            What Sets Us Apart
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            fontWeight: 400,
            color: '#F6F3EC',
            textAlign: 'center',
            marginBottom: '56px',
          }}>
            Five reasons donors trust us with their giving
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              'We operate in the epicenter of child malnutrition',
              'Direct funding model: 100% of donations go to field programs',
              'Two decades of sustained presence in Alta Verapaz',
              'Grass-roots, indigenous leadership',
              'Culturally sustainable and data-supported outcomes',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: '18px',
                  color: '#574C3F',
                  lineHeight: 1,
                  flexShrink: 0,
                  marginTop: '2px',
                }}>
                  {i + 1}.
                </div>
                <p style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '17px',
                  color: '#F6F3EC',
                  lineHeight: 1.6,
                  opacity: 0.9,
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '80px 40px', background: '#36302A', textAlign: 'center' }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '48px',
        }} className="about-stats-grid">
          {[
            { number: '13,000', label: 'Projects Funded' },
            { number: '150,000+', label: 'Medical Visits' },
            { number: '20,000+', label: 'Children Helped' },
          ].map((stat, i) => (
            <div key={i}>
              <div style={{
                fontFamily: 'Libre Baskerville, serif',
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 400,
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
                textTransform: 'uppercase',
                color: '#F6F3EC',
                opacity: 0.5,
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
              src={`${BASE}/images/IMG_5278.JPG`}
              alt="How We Work"
              style={{ width: '100%', height: '480px', objectFit: 'cover', borderRadius: '4px' }}
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
            <p style={{ fontSize: '17px', lineHeight: 1.85, color: '#36302A', opacity: 0.85, marginBottom: '20px' }}>
              Our work begins with saving lives and ends with families who no longer need us. Every program is designed with an exit in mind — not dependency, but dignity.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.85, color: '#36302A', opacity: 0.85, marginBottom: '28px' }}>
              100% of funds donated go directly to field programs and the local Guatemalan staff who are on the ground every single day. Our board members are 100% volunteers.
            </p>
            <Link to="/ourcause" className="btn-primary">See Our Cause</Link>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .how-we-work-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* PHOTO CTA */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <img
          src={`${BASE}/images/HV-photo.png`}
          alt="The Humble Village"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(54,48,42,0.6)' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '60px 40px', color: '#F6F3EC' }}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(22px, 3vw, 38px)',
            fontWeight: 400,
            marginBottom: '32px',
            lineHeight: 1.3,
            maxWidth: '600px',
          }}>
            Ready to change generations of lives?
          </h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
                border: '1.5px solid rgba(246,243,236,0.6)',
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

      {/* OUR PARTNERS */}
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
            Our Partners
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(24px, 3vw, 38px)',
            fontWeight: 400,
            color: '#F8F3EC',
            textAlign: 'center',
            marginBottom: '64px',
            lineHeight: 1.2,
          }}>
            Organizations Who Make This Work Possible
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }} className="partners-grid">
            {[
              {
                logo: `${BASE}/images/logo-usana-foundation.png`,
                logoAlt: 'USANA Foundation',
                photo: `${BASE}/images/garden-tower-family.jpg`,
                photoAlt: 'Mother and son with beets from their USANA garden tower',
                name: 'USANA Foundation',
                description: 'USANA Foundation funds our garden tower program, bringing sustainable nutrition and hands-on agricultural training to Q\'eqchi\' families in the highlands. Their support is turning small plots of land into thriving, self-sustaining family gardens.',
              },
              {
                logo: `${BASE}/images/logo-solly-baby.png`,
                logoAlt: 'Solly Baby',
                photo: `${BASE}/images/partner-solly-photo.jpg`,
                photoAlt: 'Mothers at the Solly Ochoch with Solly Baby gifts',
                name: 'Solly Baby',
                description: 'Solly Baby donated infant clothing to the mothers of the Solly Ochoch — the highest, most remote community in the valley. These families have no access to outside resources beyond THV and Narú. For the babies born there, it was the first gift from beyond the ridge.',
              },
              {
                logo: `${BASE}/images/logo-lds-church.png`,
                logoAlt: 'The Church of Jesus Christ of Latter-day Saints',
                photo: `${BASE}/images/partner-lds-photo.jpg`,
                photoAlt: 'Narú team member distributing nutrition packages',
                name: 'The Church of Jesus Christ of Latter-day Saints',
                description: 'The Church sponsors the Narú Nutrition Program, providing incaparina and formula to severely malnourished infants and children ages 0–5. Their partnership means that the most fragile children in the valley have a fighting chance in their most critical years.',
              },
            ].map((partner, i) => (
              <div key={i} style={{
                background: '#F8F3EC',
                borderRadius: '6px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{
                  padding: '28px 24px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '80px',
                  background: '#fff',
                  borderBottom: '1px solid rgba(54,48,42,0.08)',
                }}>
                  <img
                    src={partner.logo}
                    alt={partner.logoAlt}
                    style={{ maxHeight: '52px', maxWidth: '180px', objectFit: 'contain', display: 'block' }}
                  />
                </div>
                <img
                  src={partner.photo}
                  alt={partner.photoAlt}
                  style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: '28px 24px 32px', flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'Libre Baskerville, serif',
                    fontSize: '17px',
                    fontWeight: 400,
                    color: '#36302A',
                    marginBottom: '14px',
                    lineHeight: 1.3,
                  }}>
                    {partner.name}
                  </h3>
                  <p style={{
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '14px',
                    lineHeight: 1.8,
                    color: '#574C3F',
                  }}>
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) {
              .partners-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; }
            }
          `}</style>
        </div>
      </section>

      {/* RESOURCES */}
      <section style={{ background: '#F8F3EC', padding: '80px 40px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#574C3F',
            marginBottom: '20px',
          }}>
            Resources
          </p>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: 400,
            color: '#36302A',
            marginBottom: '40px',
            lineHeight: 1.3,
          }}>
            Learn More About Our Work
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            <a
              href="https://drive.google.com/file/d/1Koku7iP_mieu7J6oSOg6T_nen348FcPC/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#36302A',
                color: '#F8F3EC',
                padding: '15px 36px',
                borderRadius: '6px',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              2025 Impact Report ↗
            </a>
            <a
              href="https://drive.google.com/file/d/1s7aN-36JXkzL2B9cz8qDAYZ_PlzjLngN/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#36302A',
                padding: '15px 36px',
                borderRadius: '6px',
                border: '1.5px solid rgba(54,48,42,0.4)',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              The Narú Circle Overview ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
