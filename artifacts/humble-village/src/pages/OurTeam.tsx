const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

const teamMembers = [
  {
    name: 'Lauren Foulger',
    title: 'FOUNDER AND DIRECTOR',
    img: 'IMG_8069.png',
    bio: 'Lauren holds a Master\'s in Public Health and a Bachelor\'s in Sociology and International Development from Brigham Young University. With over 18 years of experience working in international health and development in Central America and Southeast Asia, she founded The Humble Village in 2009 with a vision to provide comprehensive health and development solutions to some of the world\'s most vulnerable communities.',
  },
  {
    name: 'Yvonne Sinclair',
    title: 'IN-COUNTRY DIRECTOR',
    img: 'R6B_8709.jpg',
    bio: 'Yvonne left a successful career in publishing and writing in the U.K. to visit Guatemala, where she quickly fell in love with the country and its people. She has been working with The Humble Village for over a decade, managing day-to-day operations and building deep relationships with the communities we serve.',
  },
];

export default function OurTeam() {
  return (
    <main>
      {/* INTRO / HEADER */}
      <section style={{
        paddingTop: '80px',
        background: '#ECE4DA',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }} className="team-hero-grid">
          <div>
            <h1 style={{
              fontFamily: 'Libre Baskerville, serif',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 400,
              color: '#36302A',
              marginBottom: '28px',
              lineHeight: 1.15,
            }}>
              Our Work
            </h1>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#36302A', opacity: 0.85, marginBottom: '20px' }}>
              Our Village Healthcare Outreach workers travel to remote areas with difficult-to-access communities with high rates of acute and fatal malnutrition. These dedicated workers are the lifeline for thousands of families.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#36302A', opacity: 0.85 }}>
              Our work takes us to the highest rates of malnutrition in children ages 0-5 in Central, South, &amp; North America. Many indigenous families in these mountain communities live on less than $1 per day.
            </p>
          </div>
          <div>
            <img
              src={`${BASE}/images/Untitled_design.jpg`}
              alt="Our Work"
              style={{ width: '100%', height: '480px', objectFit: 'cover', borderRadius: '4px' }}
            />
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .team-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding: 60px 24px !important; }
          }
        `}</style>
      </section>

      {/* LEADERSHIP TEAM */}
      <section style={{ padding: '100px 40px', background: '#EDE5DB' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontWeight: 400,
            color: '#36302A',
            textAlign: 'center',
            marginBottom: '64px',
          }}>
            Our Team
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
          }} className="leadership-grid">
            {teamMembers.map((member, i) => (
              <div key={i} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}>
                <img
                  src={`${BASE}/images/${member.img}`}
                  alt={member.name}
                  style={{ width: '100%', height: '380px', objectFit: 'cover', objectPosition: 'top', borderRadius: '4px' }}
                />
                <div>
                  <h3 style={{
                    fontFamily: 'Libre Baskerville, serif',
                    fontSize: '22px',
                    fontWeight: 400,
                    color: '#36302A',
                    marginBottom: '4px',
                  }}>
                    {member.name}
                  </h3>
                  <p style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: '#36302A',
                    opacity: 0.5,
                    marginBottom: '14px',
                  }}>
                    {member.title}
                  </p>
                  <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#36302A', opacity: 0.8 }}>
                    {member.bio}
                  </p>
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
      <section style={{ padding: '100px 40px', background: '#ECE4DA' }}>
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
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#36302A', opacity: 0.85, marginBottom: '20px' }}>
              We currently employ ten dedicated local staff members who manage the projects on a daily basis, year round. Hailing from the communities we serve, these individuals bring irreplaceable knowledge, dedication, and cultural understanding to our work.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#36302A', opacity: 0.85 }}>
              Their deep roots in the community and their firsthand understanding of the challenges facing Q'eqchi' Mayan families make them the true backbone of The Humble Village's mission.
            </p>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .guatemalan-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* BOARD OF VOLUNTEERS */}
      <section style={{ padding: '100px 40px', background: '#EDE5DB' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }} className="board-grid">
          <div>
            <h2 style={{
              fontFamily: 'Libre Baskerville, serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 400,
              color: '#36302A',
              marginBottom: '24px',
              lineHeight: 1.2,
            }}>
              Our Board of Volunteers
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#36302A', opacity: 0.85, marginBottom: '20px' }}>
              Our dedicated Board of Volunteers in the United States plays a vital role in supporting the mission of Humble Village. Made up of professionals from diverse fields including healthcare, finance, education, and nonprofit management, the board provides strategic oversight and fundraising support.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#36302A', opacity: 0.85 }}>
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
    </main>
  );
}
