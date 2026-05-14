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
      }}>
        <div style={{
          maxWidth: '660px',
          margin: '0 auto',
          padding: '80px 40px 60px',
          textAlign: 'center',
        }}>
          <h1 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 400,
            color: '#36302A',
            marginBottom: '32px',
            lineHeight: 1.15,
          }}>
            Our Work
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#36302A', opacity: 0.8, marginBottom: '20px' }}>
            Our work takes us to the highest rates of malnutrition in <a href="https://data.unicef.org/topic/nutrition/malnutrition/" target="_blank" rel="noopener noreferrer" style={{ color: '#36302A' }}>children</a> ages 0-5 in Central, South, &amp; North America. Many indigenous Mayans living in rural areas are marginalized, and receive little or no help from their government. Few speak Spanish and they have extremely limited access to justice and health services.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#36302A', opacity: 0.8 }}>
            Our Village Healthcare Outreach workers travel to remote areas with difficult-to-access communities with high rates of acute and fatal malnutrition. They work with families and teach them the skill sets they need to improve their family's nutrition and health, provide small business development trainings, and teach other vital lessons using methods that have been developed specifically for the indigenous Q'eqchi' people.
          </p>
        </div>

        {/* Map image centred */}
        <div style={{
          maxWidth: '500px',
          margin: '0 auto',
          padding: '0 40px 80px',
        }}>
          <img
            src={`${BASE}/images/Untitled_design.jpg`}
            alt="Where We Serve — Alta Verapaz, Guatemala"
            style={{ width: '100%', display: 'block', borderRadius: '4px' }}
          />
        </div>
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
