import { useState } from 'react';
import { Link } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

const programs = [
  { name: 'Narú Medical Centers', cost: '$82,000', desc: 'Clinical care, outreach clinics, midwifery & pregnancy support across 93 communities' },
  { name: 'Ochoch Charmak', cost: '$77,000', desc: 'Education, clinical care & food production training for 25 communities' },
  { name: 'Ochoch Solly', cost: '$80,000', desc: 'Education, clinical care & food production training for 18 remote communities' },
  { name: 'Child Nutritional Recuperation', cost: '$66,000', desc: 'Nutritional support for 850 children & formula for 206 infants' },
  { name: 'Maternal Nutrition Program', cost: '$28,000', desc: 'Nutritional support and medical care for 400 at-risk pregnant women' },
  { name: 'Community Midwife Training', cost: '$13,000', desc: 'Training for 60 midwives & birth attendants' },
  { name: 'Youth Health Education', cost: '$9,000', desc: 'Nutrition & pregnancy-prevention education for 200 students' },
];

function StockDonationForm() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      });
    } catch {}
    setSent(true);
    setSubmitting(false);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 14px', borderRadius: '6px',
    border: '1px solid rgba(54,48,42,0.25)', background: '#fff',
    fontFamily: 'Figtree, sans-serif', fontSize: '14px', color: '#36302A',
    boxSizing: 'border-box', outline: 'none',
  };

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <button
          onClick={() => setOpen(true)}
          style={{ display: 'inline-block', background: '#36302A', color: '#F8F3EC', padding: '14px 36px', borderRadius: '6px', fontFamily: 'Figtree, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: 'pointer' }}
        >
          Let's Talk About Your Gift
        </button>
        <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '13px', color: '#574C3F', marginTop: '16px', lineHeight: 1.6, fontStyle: 'italic' }}>
          We would be honored to work with you and your advisors to find the giving option that aligns with your goals.
        </p>
      </div>
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(54,48,42,0.7)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ background: '#F8F3EC', borderRadius: '12px', padding: '48px', maxWidth: '480px', width: '100%', position: 'relative' }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{ position: 'absolute', top: '16px', right: '20px', background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer', color: '#574C3F', lineHeight: 1 }}
              aria-label="Close"
            >&times;</button>
            <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '8px' }}>Smarter Giving</p>
            <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '24px', fontWeight: 400, color: '#36302A', marginBottom: '8px' }}>Let's Talk About Your Gift</h3>
            {sent ? (
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '15px', color: '#574C3F', lineHeight: 1.7, marginTop: '24px' }}>
                Thank you — we'll be in touch shortly with everything you need to complete your gift.
              </p>
            ) : (
              <>
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '14px', color: '#574C3F', lineHeight: 1.7, marginBottom: '28px' }}>
                  We'd love to help you find the giving option that works best for you — whether that's stock, an IRA distribution, a QCD, a bequest, or another asset. Let us know you're interested and we'll be in touch.
                </p>
                <form
                  name="asset-giving"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                >
                  <input type="hidden" name="form-name" value="asset-giving" />
                  <input type="hidden" name="bot-field" style={{ display: 'none' }} />
                  <div>
                    <label style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#574C3F', display: 'block', marginBottom: '6px' }}>Name *</label>
                    <input name="name" required style={inputStyle} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Your full name" />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#574C3F', display: 'block', marginBottom: '6px' }}>Email *</label>
                    <input name="email" required type="email" style={inputStyle} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="your@email.com" />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#574C3F', display: 'block', marginBottom: '6px' }}>Message (optional)</label>
                    <textarea name="message" rows={3} style={{ ...inputStyle, resize: 'vertical' }} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Anything you'd like us to know" />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    style={{ background: '#36302A', color: '#F8F3EC', padding: '14px 36px', borderRadius: '6px', fontFamily: 'Figtree, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: submitting ? 'wait' : 'pointer', marginTop: '8px', opacity: submitting ? 0.7 : 1 }}
                  >
                    {submitting ? 'Sending...' : 'Send My Interest'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default function NaruCircle() {
  const [form, setForm] = useState({ name: '', email: '', program: '', message: '' });
  const [naruSent, setNaruSent] = useState(false);
  const [naruSubmitting, setNaruSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNaruSubmitting(true);
    const data = new FormData(e.currentTarget);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      });
    } catch {}
    setNaruSent(true);
    setNaruSubmitting(false);
  };

  return (
    <main>
      {/* HERO */}
      <section style={{
        position: 'relative',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '80px',
        background: '#36302A',
      }}>
        <img
          src={`${BASE}/images/naru-circle-hero.webp`}
          alt="Want to partner with us? Join the Narú Circle"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(54,48,42,0.55)' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '60px 40px', maxWidth: '760px' }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#C8B59E',
            marginBottom: '24px',
          }}>
            PARTNER WITH US
          </p>
          <h1 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(28px, 4vw, 54px)',
            fontWeight: 400,
            color: '#F6F3EC',
            marginBottom: '20px',
            lineHeight: 1.2,
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
            opacity: 0.75,
            fontStyle: 'italic',
          }}>
            Sustaining the Heartbeat of The Humble Village
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
                Hospitals don't "graduate" from funding. Schools don't "complete" their mission. Our clinics, our Ochoch training centers, our nurses, our nutrition programs — all require ongoing support to serve the families who depend on them.
              </p>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '17px', lineHeight: 1.85, color: '#574C3F' }}>
                The Narú Circle exists to solve this problem through a personal, meaningful partnership.
              </p>
            </div>
            <div style={{ background: '#36302A', borderRadius: '8px', padding: '48px 40px', textAlign: 'center' }}>
              <p style={{               fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8B59E', marginBottom: '20px' }}>
                The Opportunity
              </p>
              <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 400, color: '#F6F3EC', marginBottom: '24px', lineHeight: 1.3 }}>
                A Committed Circle of Guardians
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', lineHeight: 1.8, color: '#F6F3EC', opacity: 0.8, marginBottom: '24px' }}>
                The Narú Circle is a committed group of individuals, families, and organizations who ensure this work continues year after year.
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
      <section id="programs" style={{ background: '#36302A', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 400, color: '#F6F3EC', textAlign: 'center', marginBottom: '16px' }}>
            Choose the part of the work that becomes yours.
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', color: '#F6F3EC', opacity: 0.6, textAlign: 'center', marginBottom: '56px' }}>
            Steward it. Ensure it runs, every year. Major partners are recognized on The Narú Circle Wall at the Narú Medical Center.
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

          </div>
          <style>{`
            @media (max-width: 600px) {
              .prog-row { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section style={{ background: '#F8F3EC', padding: '120px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '48px' }}>
            What $355,000 Sustains
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
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8B59E', marginBottom: '16px', textAlign: 'center' }}>
            Little Ones Blessed
          </p>
          <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 400, color: '#F6F3EC', textAlign: 'center', marginBottom: '16px' }}>
            More than 200 infants saved in 2025
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', color: '#F6F3EC', opacity: 0.6, textAlign: 'center', marginBottom: '56px', fontStyle: 'italic' }}>
            Each one a living example of what early intervention and watchful care can achieve
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="faces-grid">
            {[
              { name: 'Dylan',    before: 'faces-dylan-before.jpeg',    after: 'faces-dylan-after.png',    weight: '6.4 lbs at 2 months → 20.5 lbs' },
              { name: 'Santos',   before: 'faces-santos-before.jpeg',   after: 'faces-santos-after.jpeg',   weight: '15.0 lbs at 18 months → 22.2 lbs', afterPos: 'center top' },
              { name: 'Yasmin',   before: 'faces-yasmin-before.jpeg',   after: 'faces-yasmin-after.jpeg',   weight: '13.2 lbs at 21.5 months → 25.3 lbs' },
              { name: 'Crisbell', before: 'faces-crisbell-before.jpeg', after: 'faces-crisbell-after.png',  weight: '5.5 lbs at 1 month → 16.9 lbs', beforePos: 'left top' },
              { name: 'Pedro',    before: 'faces-pedro-before.jpeg',    after: 'faces-pedro-after.jpeg',    weight: '7.5 lbs at 2.5 months → 23.1 lbs', afterPos: 'center top' },
              { name: 'Keila',    before: 'faces-keila-before.jpeg',    after: 'faces-keila-after.jpeg',    weight: '15.8 lbs at 23 months → 22.0 lbs' },
              { name: 'Cuz',      before: 'faces-cuz-before.png',      after: 'faces-cuz-after.jpeg',      weight: '5.9 lbs at 2 weeks → 17.4 lbs' },
              { name: 'Claudia',  before: 'faces-claudia-before.jpeg',  after: 'faces-claudia-after.jpeg',  weight: '7.9 lbs at 3 months → 20.0 lbs' },
              { name: 'Katerin',  before: 'faces-katerin-before.jpeg',  after: 'faces-katerin-after.jpeg',  weight: '5.5 lbs at 11 days → 18.7 lbs', afterPos: 'center top' },
              { name: 'Luis',     before: 'faces-luis-before.jpeg',     after: 'faces-luis-after.jpeg',     weight: '18.0 lbs at 22 months → 21.3 lbs', afterPos: 'center top' },
              { name: 'Choc',     before: 'faces-choc-before.jpeg',     after: 'faces-choc-after.jpeg',     weight: '7.0 lbs at 2 months → 19.4 lbs' },
              { name: 'Coc',      before: 'faces-coc-before.jpeg',      after: 'faces-coc-after.jpeg',      weight: '6.2 lbs at 8 days → 18.3 lbs', afterPos: 'center top' },
            ].map((child, i) => (
              <div key={i} style={{ background: 'rgba(248,243,236,0.05)', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <img
                      src={`${BASE}/images/faces/${child.before}`}
                      alt={`${child.name} before`}
                      style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', objectPosition: (child as any).beforePos || 'center center', display: 'block' }}
                    />
                    <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F6F3EC', opacity: 0.6, textAlign: 'center', marginTop: '5px' }}>Before</p>
                  </div>
                  <div>
                    <img
                      src={`${BASE}/images/faces/${child.after}`}
                      alt={`${child.name} after`}
                      style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', objectPosition: (child as any).afterPos || 'center center', display: 'block' }}
                    />
                    <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F6F3EC', opacity: 0.6, textAlign: 'center', marginTop: '5px' }}>After</p>
                  </div>
                </div>
                <div style={{ padding: '12px 14px 14px' }}>
                  <p style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '15px', fontWeight: 400, color: '#F6F3EC', marginBottom: '4px' }}>{child.name}</p>
                  <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '12px', color: '#F6F3EC', opacity: 0.55, lineHeight: 1.4 }}>{child.weight}</p>
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) { .faces-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 500px) { .faces-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* THREE OPTIONS */}
      <section id="heartbeat-endowment" style={{ background: '#F8F3EC', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '16px', textAlign: 'center' }}>
            Our Invitation
          </p>
          <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 400, color: '#36302A', textAlign: 'center', marginBottom: '64px' }}>
            Three Paths to Partnership
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="options-grid">
            <div style={{ background: '#36302A', borderRadius: '8px', padding: '48px 36px' }}>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8B59E', marginBottom: '16px' }}>Option 1</p>
              <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 400, color: '#F6F3EC', marginBottom: '20px', lineHeight: 1.2 }}>
                Choose Your Piece
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', lineHeight: 1.8, color: '#F6F3EC', opacity: 0.8 }}>
                Sponsor a specific program and adopt the part of the work that speaks to you. Steward it. Ensure it runs, every year. Major partners are recognized on The Narú Circle Wall at the Narú Medical Center. Because of you, this life-saving work continues.
              </p>
            </div>
            <div style={{ background: '#36302A', borderRadius: '8px', padding: '48px 36px' }}>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8B59E', marginBottom: '16px' }}>Option 2</p>
              <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 400, color: '#F6F3EC', marginBottom: '20px', lineHeight: 1.2 }}>
                Multiyear Donation
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', lineHeight: 1.8, color: '#F6F3EC', opacity: 0.8 }}>
                Commit to giving a multiyear donation of any amount toward our general fund. Help grow our programs and fill in any gaps. Consistent support builds lasting sustainability.
              </p>
            </div>
            <div style={{ background: '#36302A', borderRadius: '8px', padding: '48px 36px', display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8B59E', marginBottom: '16px' }}>Option 3</p>
              <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 400, color: '#F6F3EC', marginBottom: '20px', lineHeight: 1.2 }}>
                The Heartbeat Endowment
              </h3>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', lineHeight: 1.8, color: '#F6F3EC', opacity: 0.8 }}>
                Every life we serve begins the same way: a heartbeat inside the womb, a mother waiting, a world of possibility. The Heartbeat Endowment ensures that world remains possible. It is the permanent foundation beneath everything we do, the steady pulse that keeps the mission alive long after any single gift is given.
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a
              href="#contact-form"
              onClick={e => { e.preventDefault(); document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{ display: 'inline-block', background: '#36302A', color: '#F8F3EC', padding: '14px 40px', borderRadius: '6px', fontFamily: 'Figtree, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', cursor: 'pointer' }}
            >Contact us to learn more</a>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .options-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* WHAT THIS MEANS FOR YOU */}
      <section style={{ background: '#36302A', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '45% 55%', gap: '60px', alignItems: 'center' }} className="benefits-layout">
          {/* Photo column */}
          <div style={{ borderRadius: '8px', overflow: 'hidden', height: '600px' }}>
            <img
              src={`${BASE}/images/naru-circle-laughing-baby.webp`}
              alt="A laughing child at The Humble Village"
              style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
          {/* Text column */}
          <div>
            <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8B59E', marginBottom: '16px' }}>
              What This Means For You
            </p>
            <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 400, color: '#F6F3EC', marginBottom: '48px', lineHeight: 1.25 }}>
              Partnership, not just philanthropy
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
              {[
                {
                  title: 'Your Name on The Narú Circle Wall',
                  body: 'Steward your program or center. Your investment carries your family\'s values forward — and your name will be on The Narú Circle Wall at the Narú Medical Center, a permanent record in the communities you serve.',
                },
                {
                  title: 'Direct Connection',
                  body: 'As a Narú Circle partner, you become part of The Humble Village family. You\'ll receive exclusive stories, videos, and impact reports that bring you inside the work so that you can see, feel, and share the difference your commitment is making.',
                },
                {
                  title: 'A Place to Come Back To',
                  body: 'A sanctuary in Guatemala you can call home. Come stay and experience the impact firsthand. Meet the families. Walk the gardens. Roll up your sleeves and get to work.',
                },
              ].map((benefit, i) => (
                <div key={i}>
                  <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '20px', fontWeight: 400, color: '#F8F3EC', marginBottom: '10px', lineHeight: 1.2 }}>{benefit.title}</h3>
                  <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '15px', lineHeight: 1.8, color: '#F6F3EC', opacity: 0.75 }}>{benefit.body}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '13px', color: '#F6F3EC', opacity: 0.45, marginTop: '36px', letterSpacing: '0.05em' }}>
              Commitment Horizons: 5 Years · 10 Years · Forever
            </p>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .benefits-layout { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* OTHER WAYS TO GIVE */}
      <section style={{ background: '#F8F3EC', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '16px', textAlign: 'center' }}>
            Smarter Giving
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
                body: 'We can receive donations of appreciated stock, bonds, or mutual funds — and your financial advisor can facilitate the transfer directly. Reach out to us first so we can make sure your gift is received and properly acknowledged.',
              },
              {
                title: 'Give From Your IRA',
                body: 'If you are age 70½ or older, a Qualified Charitable Distribution (QCD) allows you to transfer funds directly from your IRA. It satisfies your Required Minimum Distribution and may reduce your taxable income — even if you don\'t itemize.',
              },
              {
                title: 'Leave a Legacy',
                body: 'A bequest through your will, living trust, or naming The Humble Village as a beneficiary of your IRA ensures that future generations of families have the opportunity to thrive. Designate a specific amount, a percentage, or an asset. Your plans remain flexible — and your legacy does not.',
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '20px', fontWeight: 400, color: '#36302A', marginBottom: '16px', lineHeight: 1.2 }}>{item.title}</h3>
                <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '15px', lineHeight: 1.8, color: '#574C3F' }}>{item.body}</p>
              </div>
            ))}
          </div>
          <StockDonationForm />
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
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8B59E', marginBottom: '16px' }}>
            Learn More
          </p>
          <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 400, color: '#F6F3EC', marginBottom: '16px' }}>
            Watch the Full-Length Documentary
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', color: '#F6F3EC', opacity: 0.6, marginBottom: '48px', lineHeight: 1.7 }}>
            See the mission you'll be sustaining.
          </p>
          {/* Vimeo teaser — 16:9 responsive inline player */}
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '10px' }}>
            <iframe
              src="https://player.vimeo.com/video/1218557000?h=c078bed242&autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0"
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
              style={{ display: 'inline-block', background: '#F6F3EC', color: '#36302A', padding: '14px 32px', borderRadius: '6.4px', fontFamily: 'Figtree, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', transition: 'opacity 0.2s ease' }}
            >
              Watch the Full Film
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" style={{ background: '#F8F3EC', padding: '100px 40px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#574C3F', marginBottom: '16px', textAlign: 'center' }}>
            Philanthropic Partnership
          </p>
          <h2 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 400, color: '#36302A', marginBottom: '16px', textAlign: 'center' }}>
            Eager to explore philanthropic partnership options?
          </h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', color: '#574C3F', textAlign: 'center', marginBottom: '48px', lineHeight: 1.7 }}>
            We would love to connect with you and find the right path forward together.
          </p>

          {naruSent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <p style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '24px', fontWeight: 400, fontStyle: 'italic', color: '#36302A', marginBottom: '16px' }}>Thank you.</p>
              <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: '16px', color: '#574C3F', lineHeight: 1.7 }}>Your message has been received. Someone from The Humble Village team will be in touch with you shortly.</p>
            </div>
          ) : (
          <form
            name="naru-circle"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <input type="hidden" name="form-name" value="naru-circle" />
            <input type="hidden" name="bot-field" style={{ display: 'none' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
              <div>
                <label style={{ fontFamily: 'Figtree, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#36302A', display: 'block', marginBottom: '8px' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                name="name"
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
                name="email"
                value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '6px', border: '1.5px solid rgba(54,48,42,0.2)', background: '#F6F3EC', fontFamily: 'Figtree, sans-serif', fontSize: '15px', color: '#36302A', outline: 'none' }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontFamily: 'Figtree, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#36302A', display: 'block', marginBottom: '8px' }}>
                Area of Interest (optional)
              </label>
              <select
                name="program"
                value={form.program}
                onChange={e => setForm({ ...form, program: e.target.value })}
                style={{ width: '100%', padding: '14px 16px', borderRadius: '6px', border: '1.5px solid rgba(54,48,42,0.2)', background: '#F6F3EC', fontFamily: 'Figtree, sans-serif', fontSize: '15px', color: '#36302A', outline: 'none', appearance: 'none' }}
              >
                <option value="">Select an option...</option>
                <option value="Adopt an Ochoch">Adopt an Ochoch</option>
                <option value="Multiyear Donation">Multiyear Donation</option>
                <option value="The Heartbeat Endowment">The Heartbeat Endowment</option>
                <option value="General Fund">General Fund</option>
                <option value="Questions About Giving">Questions About Giving</option>
              </select>
            </div>

            <div>
              <label style={{ fontFamily: 'Figtree, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#36302A', display: 'block', marginBottom: '8px' }}>
                Message
              </label>
              <textarea
                required
                rows={5}
                name="message"
                value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us a bit about yourself and what draws you to this work..."
                style={{ width: '100%', padding: '14px 16px', borderRadius: '6px', border: '1.5px solid rgba(54,48,42,0.2)', background: '#F6F3EC', fontFamily: 'Figtree, sans-serif', fontSize: '15px', color: '#36302A', outline: 'none', resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              disabled={naruSubmitting}
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
                cursor: naruSubmitting ? 'wait' : 'pointer',
                opacity: naruSubmitting ? 0.7 : 1,
              }}
            >
              {naruSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          )}
        </div>
        <style>{`
          @media (max-width: 600px) {
            .form-row { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>


      {/* FINAL CTA */}
      <section style={{
        position: 'relative',
        padding: '80px 40px',
        textAlign: 'center',
        backgroundImage: `url(${BASE}/images/naru-circle-girls-event.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(54,48,42,0.72)' }} />
        <div style={{ maxWidth: '500px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
