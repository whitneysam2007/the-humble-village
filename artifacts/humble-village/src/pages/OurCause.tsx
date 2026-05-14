const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

const causes = [
  {
    title: 'Nutrition and Health',
    img: 'IMG_5484-1024x683.jpg',
    goal: 'HUMBLE VILLAGE GOAL',
    goalText: 'Living on a diet consisting of almost exclusively corn tortillas can produce potentially fatal protein malnutrition, blindness, stunting, and a myriad of health problems. Through our programs, we provide nutritional support, healthcare access, and clean water solutions.',
    costs: 'COSTS',
    costsText: '$28/month: feed a malnourished child three meals a day\n$50/year: provide a family with clean water',
    projectTitle: 'HUMBLE VILLAGE PROJECT: THE HEALTH AND NUTRITION CENTER',
    projectText: 'In 2017, we established the Health and Nutrition Center in Senahu — regional hub village in Alta Verapaz. This Center was built to handle the overflow of children in acute malnourishment that the health workers were discovering in remote villages. Families come from hours away to receive life-saving care at this center.',
    extraImg: 'IMG_8702-e1559671913983-768x1024.jpg',
  },
  {
    title: 'Education and Comprehensive Trainings',
    img: 'Literacy-woman-writing-1024x768.jpg',
    goal: 'HUMBLE VILLAGE GOAL',
    goalText: 'We are providing women and families the education and training they need to help pull themselves out of extreme poverty. When women are educated, entire communities thrive.',
    costs: 'COSTS',
    costsText: '$20/month: sponsor a woman with educational trainings\n$250/year: sponsor an entire family with a multitude of tools',
    projectTitle: 'HUMBLE VILLAGE PROJECT: THE OCHOCH TRAINING CENTERS',
    projectText: 'In Q\'eqchi\', the indigenous language spoken by the families we serve, "OCHOCH" means "home". The Training Center or "Ochoch" is a hub for multiple types of training for adults and children, including literacy for women, agricultural techniques, sewing, breadmaking, and other vocational skills.',
    extraImg: 'DSC_0062-1024x681.jpg',
  },
  {
    title: 'Self Reliance Through Economic Development',
    img: 'e6939af0-9657-4e0f-8cb0-a0a67f9f44c4.JPG',
    goal: 'HUMBLE VILLAGE GOAL',
    goalText: 'One of the most effective resources we have found to help families create economic growth is training and providing them with small animals, tools, and agricultural knowledge so they can produce their own food and income.',
    costs: 'COSTS',
    costsText: '$12/month: provide a chicken coop for a woman to help feed her family and start a small business\n$12/month: provide seeds for a family garden',
    projectTitle: 'HUMBLE VILLAGE PROJECT: ECONOMIC DEVELOPMENT PROGRAMS',
    projectText: 'We begin by focusing on providing necessary, short-term nutrition support, then we educate and train for farming beyond corn so that nutrition is improved, and we teach methods to acquire clean water. We then help them start small businesses to create income and economic development.',
    extraImg: 'IMG_6094-1024x969.jpg',
  },
];

export default function OurCause() {
  return (
    <main>
      {/* INTRO */}
      <section style={{
        paddingTop: '80px',
        background: '#ECE4DA',
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '80px 40px 60px',
          textAlign: 'center',
        }}>
          <h1 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 400,
            color: '#36302A',
            marginBottom: '32px',
          }}>
            Our Causes
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#36302A', opacity: 0.85, marginBottom: '20px' }}>
            We believe in a tiered, progressive method of helping. We begin by focusing on providing necessary, short-term nutrition support.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#36302A', opacity: 0.85 }}>
            Next, we educate and train for farming beyond corn (so that nutrition is improved), and we teach methods to acquire clean water. We then help them start small businesses to create income and economic development.
          </p>
        </div>
      </section>

      {/* CAUSES */}
      {causes.map((cause, i) => (
        <section
          key={i}
          style={{
            padding: '80px 40px',
            background: i % 2 === 0 ? '#EDE5DB' : '#ECE4DA',
          }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              gap: '60px',
              alignItems: 'start',
            }} className={`cause-grid-${i}`}>
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <img
                  src={`${BASE}/images/${cause.img}`}
                  alt={cause.title}
                  style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '4px', marginBottom: '20px' }}
                />
                {cause.extraImg && (
                  <img
                    src={`${BASE}/images/${cause.extraImg}`}
                    alt=""
                    style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '4px' }}
                  />
                )}
              </div>
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <h2 style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  fontWeight: 400,
                  color: '#36302A',
                  marginBottom: '32px',
                  lineHeight: 1.2,
                }}>
                  {cause.title}
                </h2>

                <div style={{ marginBottom: '28px' }}>
                  <h4 style={{
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: '#36302A',
                    opacity: 0.5,
                    marginBottom: '10px',
                  }}>
                    {cause.goal}
                  </h4>
                  <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#36302A', opacity: 0.85 }}>
                    {cause.goalText}
                  </p>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <h4 style={{
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: '#36302A',
                    opacity: 0.5,
                    marginBottom: '10px',
                  }}>
                    {cause.costs}
                  </h4>
                  {cause.costsText.split('\n').map((line, j) => (
                    <p key={j} style={{ fontSize: '15px', lineHeight: 1.7, color: '#36302A', opacity: 0.8 }}>
                      {line}
                    </p>
                  ))}
                </div>

                <div>
                  <h4 style={{
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: '#36302A',
                    opacity: 0.5,
                    marginBottom: '10px',
                  }}>
                    {cause.projectTitle}
                  </h4>
                  <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#36302A', opacity: 0.85 }}>
                    {cause.projectText}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .cause-grid-${i} { grid-template-columns: 1fr !important; }
              .cause-grid-${i} > div { order: unset !important; }
            }
          `}</style>
        </section>
      ))}

      {/* CONTACT */}
      <section style={{
        padding: '80px 40px',
        background: '#36302A',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', color: '#F6F3EC' }}>
          <h2 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(22px, 3vw, 34px)',
            fontWeight: 400,
            marginBottom: '20px',
          }}>
            Contact us
          </h2>
          <p style={{ fontSize: '16px', opacity: 0.8, marginBottom: '28px', lineHeight: 1.6 }}>
            Have questions or want to learn more about how you can help?
          </p>
          <a
            href="mailto:hello@the-humble-village.org"
            style={{
              display: 'inline-block',
              color: '#F6F3EC',
              fontSize: '18px',
              textDecoration: 'underline',
              opacity: 0.9,
              fontFamily: 'Figtree, sans-serif',
            }}
          >
            hello@the-humble-village.org
          </a>
        </div>
      </section>
    </main>
  );
}
