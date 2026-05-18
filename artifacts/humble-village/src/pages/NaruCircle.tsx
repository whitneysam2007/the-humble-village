import { useState } from 'react';
import { Link } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

const programs = [
  { name: 'Narú Medical Center', cost: '$77,150', desc: 'Clinical care, outreach clinics, midwifery & pregnancy support across 93 communities' },
  { name: 'Ochoch Charmak', cost: '$72,362', desc: 'Education, clinical care & food production training for 25 communities' },
  { name: 'Ochoch Solly', cost: '$75,038', desc: 'Education, clinical care & food production training for 18 communities' },
  { name: 'Child Nutritional Recuperation', cost: '$61,200', desc: 'Nutritional supplements for 850 children & infant formula for 206 infants' },
  { name: 'Maternal Nutrition Program', cost: '$23,181', desc: 'Supplements & care for 400 at-risk pregnant women' },
  { name: 'Community Midwife Training', cost: '$8,000', desc: 'Training for 60 midwives & birth attendants' },
  { name: 'Youth Health Education', cost: '$4,000', desc: 'Nutrition & pregnancy-prevention education for 200 students' },
];

export default function NaruCircle() {
  const [form, setForm] = useState({ name: '', email: '', program: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Narú Circle Inquiry');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProgram of Interest: ${form.program || 'General'}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:hello@the-humble-village.org?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      {/* HERO */}
      <section style={{ background: '#36302A', padding: '160px 40px 100px', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#574C3F',
            marginBottom: '28px',
          }}>
            Major Giving
          </p>
          <h1 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(30px, 4.5vw, 58px)',
            fontWeight: 400,
            color: '#F6F3EC',
            marginBottom: '28px',
            lineHeight: 1.15,
            fontStyle: 'italic',
          }}>
            The Narú Circle
          </h1>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            letterSpacing: '0.05em',
            color: '#F6F3EC',
            opacity: 0.6,
            marginBottom: '36px',
            fontStyle: 'italic',
          }}>
            Sustaining the Heartbeat of The Humble Village
          </p>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '18px', lineHeight: 1.85, color: '#F6F3EC', opacity: 0.8 }}>
            "Self-reliance is the goal. Sustainability is the path."
          </p>
        </div>
      </section>

      {/* THE TRUTH */}
      <section style={{ background: '#F8F3EC', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="naru-intro-grid">
            <div>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '20px' }}>
                The Truth Most People Miss
              </p>
              <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 400, color: '#36302A', marginBottom: '28px', lineHeight: 1.25 }}>
                Self-Reliance First
              </h2>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '17px', lineHeight: 1.85, color: '#574C3F', marginBottom: '20px' }}>
                We help families become self-reliant — but the system that makes that possible must continue to run every year.
              </p>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '17px', lineHeight: 1.85, color: '#574C3F', marginBottom: '20px' }}>
                Hospitals don't "graduate" from funding. Schools don't "complete" their mission. Our clinics, our Ochoch centers, our nurses, our nutrition programs — all require ongoing support to serve the families who depend on them.
              </p>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '17px', lineHeight: 1.85, color: '#574C3F' }}>
                The Narú Circle exists to solve this problem — sustainably, personally, and with deep partnership.
              </p>
            </div>
            <div style={{ background: '#36302A', borderRadius: '8px', padding: '48px 40px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '20px' }}>
                The Opportunity
              </p>
              <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 400, color: '#F6F3EC', marginBottom: '24px', lineHeight: 1.3 }}>
                A Small Circle of Guardians
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', lineHeight: 1.8, color: '#F6F3EC', opacity: 0.8, marginBottom: '24px' }}>
                The Narú Circle is a small group of individuals, families, and organizations who ensure this work continues year after year.
              </p>
              <div style={{ width: '40px', height: '1px', background: '#574C3F', margin: '0 auto 24px' }} />
              <p style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '18px', fontStyle: 'italic', color: '#F8F3EC', lineHeight: 1.5 }}>
                This is not just a donation.<br />This is a partnership.
              </p>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .naru-intro-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* PROGRAM TABLE */}
      <section style={{ background: '#36302A', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '16px', textAlign: 'center' }}>
            Where You Could Step In
          </p>
          <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 400, color: '#F6F3EC', textAlign: 'center', marginBottom: '16px' }}>
            Choose the part of the work that becomes yours.
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', color: '#F6F3EC', opacity: 0.6, textAlign: 'center', marginBottom: '56px' }}>
            Name it. Steward it. Ensure it runs, every year.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', borderRadius: '6px', overflow: 'hidden' }}>
            {programs.map((prog, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '24px',
                padding: '24px 32px',
                background: i % 2 === 0 ? 'rgba(248,243,236,0.07)' : 'rgba(248,243,236,0.04)',
                alignItems: 'center',
              }} className="prog-row">
                <div>
                  <h4 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '17px', fontWeight: 400, color: '#F6F3EC', marginBottom: '6px' }}>{prog.name}</h4>
                  <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '14px', color: '#F6F3EC', opacity: 0.6, lineHeight: 1.5 }}>{prog.desc}</p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <p style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '18px', color: '#F8F3EC', whiteSpace: 'nowrap' }}>{prog.cost}</p>
                  <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', color: '#F6F3EC', opacity: 0.4, letterSpacing: '0.05em' }}>per year</p>
                </div>
              </div>
            ))}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '24px',
              padding: '24px 32px',
              background: '#574C3F',
              alignItems: 'center',
            }} className="prog-row">
              <h4 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '18px', fontWeight: 700, color: '#F6F3EC' }}>
                Total — Full Operation
              </h4>
              <p style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '22px', color: '#F8F3EC', textAlign: 'right', whiteSpace: 'nowrap' }}>$320,931</p>
            </div>
          </div>
          <style>{`
            @media (max-width: 600px) {
              .prog-row { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section style={{ background: '#F8F3EC', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '48px' }}>
            What $320,931 Sustains
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }} className="circle-stats-grid">
            {[
              { number: '~3,620', label: 'Families Served' },
              { number: '~12,807', label: 'Total Site Visits' },
              { number: '184', label: 'Communities Reached' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, color: '#36302A', marginBottom: '10px', lineHeight: 1 }}>{stat.number}</div>
                <div style={{ fontFamily: 'Figtree, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#574C3F' }}>{stat.label}</div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 600px) {
              .circle-stats-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* BEFORE/AFTER GRID */}
      <section style={{ background: '#36302A', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '16px', textAlign: 'center' }}>
            The Faces Behind the Numbers
          </p>
          <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 400, color: '#F6F3EC', textAlign: 'center', marginBottom: '16px' }}>
            Over 200 graduates.
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', color: '#F6F3EC', opacity: 0.6, textAlign: 'center', marginBottom: '48px', fontStyle: 'italic' }}>
            Each one a testament to what consistent care and community support can achieve.
          </p>
          <img
            src={`${BASE}/images/naru-circle-grid.png`}
            alt="Before and after photos of children who graduated the nutrition program"
            style={{ width: '100%', borderRadius: '6px', display: 'block' }}
          />
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '13px', color: '#F6F3EC', opacity: 0.4, textAlign: 'center', marginTop: '16px', fontStyle: 'italic' }}>
            Individual photos coming soon. Each child pictured has a name, a family, and a story.
          </p>
        </div>
      </section>

      {/* TWO OPTIONS */}
      <section style={{ background: '#F8F3EC', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '16px', textAlign: 'center' }}>
            Your Invitation
          </p>
          <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 400, color: '#36302A', textAlign: 'center', marginBottom: '64px' }}>
            Two paths to partnership
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="options-grid">
            <div style={{ background: '#36302A', borderRadius: '8px', padding: '48px 36px' }}>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '16px' }}>Option 1</p>
              <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 400, color: '#F6F3EC', marginBottom: '20px', lineHeight: 1.2 }}>
                Choose Your Piece
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', lineHeight: 1.8, color: '#F6F3EC', opacity: 0.8 }}>
                Sponsor a specific program and adopt the part of the work that speaks to you. Name it. Steward it. Ensure it runs, every year. Because of you, this life-saving work continues.
              </p>
            </div>
            <div style={{ background: '#36302A', borderRadius: '8px', padding: '48px 36px' }}>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '16px' }}>Option 2</p>
              <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 400, color: '#F6F3EC', marginBottom: '20px', lineHeight: 1.2 }}>
                Multiyear Donation
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', lineHeight: 1.8, color: '#F6F3EC', opacity: 0.8 }}>
                Commit to giving a multiyear donation of any amount toward our general fund. Help grow our programs and fill in any gaps. Consistent support builds lasting independence.
              </p>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .options-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* WHAT THIS MEANS FOR YOU */}
      <section style={{ background: '#36302A', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '16px', textAlign: 'center' }}>
            What This Means For You
          </p>
          <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 400, color: '#F6F3EC', textAlign: 'center', marginBottom: '64px' }}>
            Partnership, not just philanthropy
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="benefits-grid">
            {[
              {
                title: 'Named Legacy',
                body: 'Name your program or center. Your investment carries your name and your family\'s values forward — building a legacy in the communities you serve.',
              },
              {
                title: 'Direct Connection',
                body: 'Partner directly with our team. You\'ll have a personal line to the local Narú team and receive regular updates on the program or center you sponsor.',
              },
              {
                title: 'A Place to Come Back To',
                body: 'A sanctuary in Guatemala you can call home. Come stay and experience the impact firsthand. See the faces. Walk the gardens. Meet the families.',
              },
            ].map((benefit, i) => (
              <div key={i} style={{ padding: '36px 28px', background: 'rgba(248,243,236,0.07)', borderRadius: '6px' }}>
                <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '20px', fontWeight: 400, color: '#F8F3EC', marginBottom: '16px', lineHeight: 1.2 }}>{benefit.title}</h3>
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '15px', lineHeight: 1.8, color: '#F6F3EC', opacity: 0.75 }}>{benefit.body}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '14px', color: '#F6F3EC', opacity: 0.5, textAlign: 'center', marginTop: '40px', letterSpacing: '0.05em' }}>
            Commitment Horizons: 5 Years · 10 Years · Forever
          </p>
          <style>{`
            @media (max-width: 768px) {
              .benefits-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* OTHER WAYS TO GIVE */}
      <section style={{ background: '#F8F3EC', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '16px', textAlign: 'center' }}>
            Beyond a Check
          </p>
          <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 400, color: '#36302A', textAlign: 'center', marginBottom: '16px' }}>
            Other Ways to Give
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', color: '#574C3F', textAlign: 'center', marginBottom: '56px', lineHeight: 1.7 }}>
            Your assets can do more than you might expect.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="otherways-grid">
            {[
              {
                title: 'Appreciated Stock',
                body: 'Donating appreciated securities — stocks, bonds, or mutual funds — lets you avoid capital gains tax entirely while receiving a charitable deduction for the full fair market value. Your advisor can facilitate the transfer directly.',
              },
              {
                title: 'Give From Your IRA',
                body: 'If you are age 70½ or older, a Qualified Charitable Distribution (QCD) allows you to transfer funds directly from your IRA. It satisfies your Required Minimum Distribution and may reduce your taxable income — even if you don\'t itemize.',
              },
              {
                title: 'Leave a Legacy',
                body: 'A bequest through your will or living trust ensures that future generations of families have the opportunity to thrive. Designate a specific amount, a percentage, or an asset. Your plans remain flexible — and your legacy does not.',
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '20px', fontWeight: 400, color: '#36302A', marginBottom: '16px', lineHeight: 1.2 }}>{item.title}</h3>
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '15px', lineHeight: 1.8, color: '#574C3F' }}>{item.body}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '15px', color: '#574C3F', textAlign: 'center', marginTop: '48px', lineHeight: 1.7, fontStyle: 'italic' }}>
            We would be honored to work with you and your advisors to find the giving option that aligns with your goals.
          </p>
          <style>{`
            @media (max-width: 768px) {
              .otherways-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* DOCUMENTARY */}
      <section style={{ background: '#36302A', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '16px' }}>
            Learn More
          </p>
          <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 400, color: '#F6F3EC', marginBottom: '16px' }}>
            Watch the Full-Length Documentary
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', color: '#F6F3EC', opacity: 0.6, marginBottom: '48px', lineHeight: 1.7 }}>
            Go deep into the mission, the communities, and the people behind The Humble Village.
          </p>
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '8px',
          }}>
            <iframe
              src="https://www.youtube.com/embed/bh0TpBF26uQ"
              title="The Humble Village Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section style={{ background: '#F8F3EC', padding: '100px 40px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '16px', textAlign: 'center' }}>
            Get in Touch
          </p>
          <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 400, color: '#36302A', marginBottom: '16px', textAlign: 'center' }}>
            Ready to explore a partnership?
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', color: '#574C3F', textAlign: 'center', marginBottom: '48px', lineHeight: 1.7 }}>
            We would be honored to speak with you and find the right path forward together.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
              <div>
                <label style={{ fontFamily: 'Figtree, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#36302A', display: 'block', marginBottom: '8px' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '6px', border: '1.5px solid rgba(54,48,42,0.2)', background: '#F6F3EC', fontFamily: 'Figtree, sans-serif', fontSize: '15px', color: '#36302A', outline: 'none' }}
                />
              </div>
              <div>
                <label style={{ fontFamily: 'Figtree, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#36302A', display: 'block', marginBottom: '8px' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '6px', border: '1.5px solid rgba(54,48,42,0.2)', background: '#F6F3EC', fontFamily: 'Figtree, sans-serif', fontSize: '15px', color: '#36302A', outline: 'none' }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontFamily: 'Figtree, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#36302A', display: 'block', marginBottom: '8px' }}>
                Program of Interest (optional)
              </label>
              <select
                value={form.program}
                onChange={e => setForm({ ...form, program: e.target.value })}
                style={{ width: '100%', padding: '14px 16px', borderRadius: '6px', border: '1.5px solid rgba(54,48,42,0.2)', background: '#F6F3EC', fontFamily: 'Figtree, sans-serif', fontSize: '15px', color: '#36302A', outline: 'none', appearance: 'none' }}
              >
                <option value="">Select a program...</option>
                {programs.map((p, i) => <option key={i} value={p.name}>{p.name} — {p.cost}/yr</option>)}
                <option value="General Fund">General Fund / Multiyear Donation</option>
              </select>
            </div>

            <div>
              <label style={{ fontFamily: 'Figtree, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#36302A', display: 'block', marginBottom: '8px' }}>
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us a bit about yourself and what draws you to this work..."
                style={{ width: '100%', padding: '14px 16px', borderRadius: '6px', border: '1.5px solid rgba(54,48,42,0.2)', background: '#F6F3EC', fontFamily: 'Figtree, sans-serif', fontSize: '15px', color: '#36302A', outline: 'none', resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: '18px 40px',
                borderRadius: '6px',
                border: 'none',
                background: '#36302A',
                color: '#F6F3EC',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Send Message
            </button>
            <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '13px', color: '#574C3F', opacity: 0.7, textAlign: 'center', lineHeight: 1.5 }}>
              This will open your email client with your message pre-filled, addressed to hello@the-humble-village.org
            </p>
          </form>
        </div>
        <style>{`
          @media (max-width: 600px) {
            .form-row { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ENDOWMENT FUND */}
      <section style={{ background: '#F8F3EC', padding: '60px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#574C3F',
            marginBottom: '16px',
          }}>
            Long-Term Sustainability
          </p>
          <h3 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            fontWeight: 400,
            color: '#36302A',
            marginBottom: '20px',
            lineHeight: 1.3,
          }}>
            The Humble Village Endowment Fund
          </h3>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '16px',
            color: '#574C3F',
            lineHeight: 1.8,
            marginBottom: '28px',
          }}>
            A gift to our Endowment Fund ensures that the work of The Humble Village continues for generations — independent of annual fundraising cycles. Our goal is a $3.5M endowment that permanently sustains our programs in Alta Verapaz.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#36302A',
              color: '#F8F3EC',
              padding: '14px 36px',
              borderRadius: '6px',
              fontFamily: 'Figtree, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Inquire About the Endowment Fund
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: '#36302A', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(18px, 2.5vw, 26px)', fontStyle: 'italic', color: '#F6F3EC', lineHeight: 1.5, marginBottom: '32px' }}>
            "Thank you for considering a role in this work."
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/stories" style={{ display: 'inline-block', background: '#F8F3EC', color: '#36302A', padding: '14px 32px', borderRadius: '6px', fontFamily: 'Figtree, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Read Impact Stories
            </Link>
            <Link to="/about" style={{ display: 'inline-block', background: 'transparent', color: '#F6F3EC', padding: '13px 28px', borderRadius: '6px', border: '1.5px solid rgba(246,243,236,0.4)', fontFamily: 'Figtree, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
