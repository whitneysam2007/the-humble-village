import { Link } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

const teamMembers = [
  {
    name: 'Lauren Foulger',
    title: 'Founder & Director',
    img: 'lauren-baby.png',
    bio: 'Lauren holds a Master\'s in Public Health and a Bachelor\'s in Sociology and International Development from Brigham Young University. With over 18 years of experience working in international health and development in Central America and Southeast Asia, she founded The Humble Village in 2009 with a vision to provide comprehensive health and development solutions to some of the world\'s most vulnerable communities.',
  },
  {
    name: 'Yvonne Sinclair',
    title: 'In-Country Director',
    img: 'yvonne-solo.webp',
    bio: 'Yvonne came to Guatemala and never left. She began weighing babies and distributing nutritional supplements from the back of a borrowed truck, doing the quiet, essential work before there was an organization to do it through. When she connected with Lauren, they recognized what they could build together. That recognition became The Humble Village.\n\nMore than two decades later, Yvonne leads Narú, the on-the-ground partner organization in Alta Verapaz. Her work is practical, sustainable, and holistic: clean water, community health, maternal care, and education. Grounded, steady, and quietly unstoppable, she has given her life to the families she serves, one small step at a time.',
    podcastUrl: 'https://youtu.be/RKH7ua9oYho',
    podcastLabel: 'Nurturing Outside of the Box: A Life Dedicated to Service — Down the Well with Elle Rowley',
  },
];

export default function OurTeam() {
  return (
    <main>
      {/* INTRO */}
      <section style={{ paddingTop: '80px', background: '#F8F3EC' }}>
        <div style={{
          maxWidth: '780px',
          margin: '0 auto',
          padding: '80px 40px 60px',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#574C3F',
            marginBottom: '24px',
          }}>
            Our Team
          </p>
          <h1 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 400,
            color: '#36302A',
            marginBottom: '32px',
            lineHeight: 1.2,
          }}>
            The People Behind the Mission
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.85, color: '#36302A', opacity: 0.8, marginBottom: '20px' }}>
            Our field team is made up of employees from Alta Verapaz who speak Q'eqchi', know the culture, and have earned the trust of the families they serve. They are nurses, educators, agriculturists, and community leaders. They are the reason this works.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.85, color: '#36302A', opacity: 0.8 }}>
            Our board members and U.S.-based supporters serve as volunteers. Because no overhead comes out of donations, every dollar goes directly to the field.
          </p>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section style={{ padding: '100px 40px', background: '#36302A' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontWeight: 400,
            color: '#F6F3EC',
            textAlign: 'center',
            marginBottom: '72px',
          }}>
            Leadership
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }} className="leadership-grid">
            {teamMembers.map((member, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <img
                  src={`${BASE}/images/${member.img}`}
                  alt={member.name}
                  style={{ width: '100%', height: '420px', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
                />
                <div>
                  <h3 style={{
                    fontFamily: 'Libre Baskerville, serif',
                    fontSize: '24px',
                    fontWeight: 400,
                    color: '#F6F3EC',
                    marginBottom: '4px',
                  }}>
                    {member.name}
                  </h3>
                  <p style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#BFA07A',
                    marginBottom: '16px',
                  }}>
                    {member.title}
                  </p>
                  {member.bio.split('\n\n').map((para, j) => (
                    <p key={j} style={{ fontSize: '15px', lineHeight: 1.8, color: '#F6F3EC', opacity: 0.75, marginBottom: j < member.bio.split('\n\n').length - 1 ? '16px' : '0' }}>
                      {para}
                    </p>
                  ))}
                  {member.podcastUrl && (
                    <a
                      href={member.podcastUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        marginTop: '20px',
                        fontFamily: 'Figtree, sans-serif',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#BFA07A',
                        textDecoration: 'none',
                        letterSpacing: '0.02em',
                      }}
                    >
                      🎧 {member.podcastLabel} ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 768px) {
              .leadership-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* GUATEMALAN STAFF */}
      <section style={{ padding: '100px 40px', background: '#F8F3EC' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }} className="guatemalan-grid">
          <div>
            <img
              src={`${BASE}/images/Naru_Team_Pic.jpeg`}
              alt="Our Guatemalan Staff"
              style={{ width: '100%', height: '440px', objectFit: 'cover', borderRadius: '4px' }}
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
              On the Ground
            </p>
            <h2 style={{
              fontFamily: 'Libre Baskerville, serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 400,
              color: '#36302A',
              marginBottom: '24px',
              lineHeight: 1.2,
            }}>
              Our Guatemalan Staff
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.85, color: '#36302A', opacity: 0.85, marginBottom: '28px' }}>
              Ten dedicated local staff members manage our programs on a daily basis, year-round. Hailing from the communities we serve, they bring irreplaceable knowledge, cultural understanding, and deep personal commitment to this work.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
              {[
                { name: 'Thelma Caal', role: 'Auxiliary Nurse' },
                { name: 'Roberto Mendoza', role: 'Field Manager' },
                { name: 'Rudy Caal', role: 'Agro Trainer' },
                { name: 'Esteban Chaman', role: 'Professional Nurse' },
                { name: 'Luis Xar', role: 'Admin Coordinator' },
                { name: 'Edgar Coc', role: 'Auxiliary Nurse' },
                { name: 'Brígida Coc', role: 'Professional Nurse' },
                { name: 'Benjamin Chub', role: 'Food Production Trainer' },
                { name: 'Abelino Caal', role: 'Food Production Supervisor' },
              ].map((s, i) => (
                <div key={i}>
                  <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '14px', fontWeight: 700, color: '#36302A', marginBottom: '2px' }}>{s.name}</p>
                  <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '12px', color: '#574C3F', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>{s.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .guatemalan-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* BOARD */}
      <section style={{ padding: '100px 40px', background: '#36302A' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }} className="board-grid">
          <div>
            <p style={{
              fontFamily: 'Figtree, sans-serif',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#BFA07A',
              marginBottom: '20px',
            }}>
              100% Volunteers
            </p>
            <h2 style={{
              fontFamily: 'Libre Baskerville, serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 400,
              color: '#F6F3EC',
              marginBottom: '24px',
              lineHeight: 1.2,
            }}>
              Our Board of Volunteers
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.85, color: '#F6F3EC', opacity: 0.8, marginBottom: '20px' }}>
              Our dedicated Board of Volunteers in the United States plays a vital role in supporting the mission. Made up of professionals from healthcare, finance, education, and nonprofit management, the board provides strategic oversight and fundraising support.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.85, color: '#F6F3EC', opacity: 0.8 }}>
              Because all board members serve as volunteers, 100% of public donations go directly to programs serving families in Guatemala.
            </p>
          </div>
          <div>
            <img
              src={`${BASE}/images/R6B_8738.jpg`}
              alt="Board of Volunteers"
              style={{ width: '100%', height: '440px', objectFit: 'cover', borderRadius: '4px' }}
            />
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .board-grid { grid-template-columns: 1fr !important; }
            .board-grid > div:first-child { order: 2; }
            .board-grid > div:last-child { order: 1; }
          }
        `}</style>
      </section>

      {/* NARÚ CIRCLE CTA */}
      <section style={{ background: '#F8F3EC', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(22px, 3vw, 34px)',
            fontWeight: 400,
            color: '#36302A',
            marginBottom: '20px',
            lineHeight: 1.3,
          }}>
            Want to partner with our team directly?
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', color: '#574C3F', marginBottom: '32px', lineHeight: 1.7 }}>
            Narú Circle members get a direct line to our local team and regular updates on the program they sponsor.
          </p>
          <Link to="/naru-circle" className="btn-primary">Learn About the Narú Circle</Link>
        </div>
      </section>
    </main>
  );
}
