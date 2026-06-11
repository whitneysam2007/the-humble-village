import { Link } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function About() {
  return (
    <main>
      {/* HERO */}
      <section style={{ paddingTop: '80px', background: '#F8F3EC' }}>
        <div style={{
          maxWidth: '960px',
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
            A Volunteer Nonprofit Organization: Empowering Women and Transforming Communities
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.85, color: '#36302A', opacity: 0.8, marginBottom: '20px' }}>
            At The Humble Village, we have a saying: if you give a man a fish, he will eat for a day; if you teach a man to fish, he will eat for life; if you teach a woman to fish, she will feed her entire family and community forever. We work hand-in-hand with Q'eqchi' Mayan families living in the highlands of Guatemala, where most survive on less than $1 a day.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.85, color: '#36302A', opacity: 0.8 }}>
            Our mission is to empower mothers and families in Alta Verapaz, Guatemala to break the cycle of hunger and infant mortality. We do this by providing nutrition, education, and life-saving tools that build lasting self-reliance.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }} className="about-photo-grid">
          <img src={`${BASE}/images/about-mother-learning.jpg`} alt="Mother learning with baby" style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }} />
          <img src={`${BASE}/images/about-cooking.jpg`} alt="Women cooking at Solly kitchen" style={{ width: '100%', height: '480px', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />
          <img src={`${BASE}/images/about-twins.jpg`} alt="Mother holding twin babies at Narú Medical Center" style={{ width: '100%', height: '480px', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }} />
        </div>
        <style>{`
          @media (max-width: 768px) {
            .about-photo-grid { grid-template-columns: 1fr !important; }
            .about-photo-grid img { height: 300px !important; }
          }
        `}</style>
      </section>

      {/* TOGETHER SECTION */}
      <section style={{ background: '#36302A', padding: '100px 40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(22px, 3.5vw, 38px)',
            fontWeight: 400,
            color: '#F6F3EC',
            lineHeight: 1.4,
            marginBottom: '40px',
          }}>
            It's a Village-to-Village Relationship
          </h2>
          <div style={{ width: '48px', height: '2px', background: '#C8B59E', margin: '0 auto 40px' }} />
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '17px', lineHeight: 1.85, color: '#F6F3EC', opacity: 0.8, marginBottom: '24px' }}>
            Since 2009, we've been working tirelessly towards ending malnutrition and high maternal and infant mortality rates in the highlands of Guatemala. It's an ambitious goal. Yet, we see the progress every day thanks to our Guatemala team and generous supporters like you.
          </p>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '17px', lineHeight: 1.85, color: '#F6F3EC', opacity: 0.8 }}>
            None of this would be possible without you! There is more work to be done. Thank you for your continued donations, concern, and prayers for The Humble Village programs and families.
          </p>
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '120px 40px' }}>
        <img
          src={`${BASE}/images/what-sets-us-apart.webp`}
          alt="Community gathering in Alta Verapaz, Guatemala"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(54,48,42,0.60)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#F6F3EC',
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
            Five Reasons Donors Trust Us
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
                  color: '#F6F3EC',
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
      <section style={{ padding: '80px 40px', background: '#F8F3EC', textAlign: 'center' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '80px',
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
                color: '#36302A',
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
                color: '#36302A',
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

      {/* PHOTO CTA */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <img
          src={`${BASE}/images/about-cta.jpg`}
          alt="The Humble Village"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(36,28,20,0.25)' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '120px 40px 0', color: '#F6F3EC' }}>
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
      <section style={{ background: '#36302A', padding: '100px 60px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#C8B59E',
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
            Organizations That Help Make This Work Possible
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
                logoHref: 'https://usanafoundation.org',
                photo: `${BASE}/images/R6B_8036.webp`,
                photoAlt: "A Q'eqchi' Maya family with their USANA garden tower",
                name: 'USANA Foundation',
                description: 'USANA Foundation funds our garden tower program, bringing sustainable nutrition and hands-on agricultural training to Q\'eqchi\' Maya families. Their support is turning small plots of land into thriving, self-sustaining family gardens — with the potential to sell excess crops, creating entrepreneurial opportunities and a path toward greater economic independence.',
              },
              {
                logo: `${BASE}/images/logo-solly-baby.png`,
                logoAlt: 'Solly Baby',
                logoHref: 'https://www.sollybaby.com',
                photo: `${BASE}/images/partner-solly-photo.jpg`,
                photoAlt: 'Mothers at the Solly Ochoch with Solly Baby gifts',
                name: 'Solly Baby',
                description: 'Solly Baby built our beloved Solly Ochoch — the highest, most remote community in the valley. These families have no access to outside resources beyond the Narú team. Every year they send our Village-to-Village Expedition groups with silky soft baby clothes and blankets for the little ones born there.',
              },

              {
                logo: `${BASE}/images/logo-sabin-foundation.png`,
                logoAlt: 'Sabin Children\'s Foundation',
                logoHref: 'https://sabinchildrensfoundation.org',
                photo: `${BASE}/images/partner-sabin-photo.jpg`,
                photoAlt: 'Gary Sabin holding a baby in Alta Verapaz, Guatemala',
                name: 'Sabin Children\'s Foundation',
                photoPosition: 'top',
                description: 'For ten years, the Sabin Children\'s Foundation has been the quiet force behind some of our most significant work. Their generosity built the Narú Medical Center — giving our nurses, midwives, and community health workers a permanent base from which to serve.',
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
                  height: '160px',
                  background: '#fff',
                  borderBottom: '1px solid rgba(54,48,42,0.08)',
                }}>
                  {(partner as any).logoHref ? (
                    <a href={(partner as any).logoHref} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                      <img
                        src={partner.logo}
                        alt={partner.logoAlt}
                        style={{ maxHeight: '115px', maxWidth: '299px', objectFit: 'contain', display: 'block' }}
                      />
                    </a>
                  ) : (
                    <img
                      src={partner.logo}
                      alt={partner.logoAlt}
                      style={{ maxHeight: '115px', maxWidth: '299px', objectFit: 'contain', display: 'block' }}
                    />
                  )}
                </div>
                <img
                  src={partner.photo}
                  alt={partner.photoAlt}
                  style={{ width: '100%', height: '360px', objectFit: 'cover', objectPosition: (partner as any).photoPosition || 'center', display: 'block' }}
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
                    lineHeight: 1.3,
                  }}>
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 600px) {
              .partners-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; }
            }
          `}</style>
        </div>
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
            Join us inside the communities we serve.
          </p>
          {/* Vimeo teaser — 16:9 responsive inline player */}
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '10px' }}>
            <iframe
              src="https://player.vimeo.com/video/1173109400?h=25551d23b7&autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0"
              title="The Humble Village — Teaser"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <a
              href="https://www.youtube.com/watch?v=bh0TpBF26uQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Watch the Full Film
            </a>
          </div>
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
