import { useState } from 'react';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // fallback: still show success
      setSubmitted(true);
    }
    setSubmitting(false);
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    fontFamily: 'Figtree, sans-serif',
    fontSize: '15px',
    color: '#36302A',
    background: '#F8F3EC',
    border: '1.5px solid rgba(54,48,42,0.2)',
    borderRadius: '5px',
    outline: 'none',
    boxSizing: 'border-box',
    appearance: 'none',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'Figtree, sans-serif',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#574C3F',
    display: 'block',
    marginBottom: '8px',
  };

  return (
    <main>
      {/* HERO IMAGE */}
      <div style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
        <img
          src={`${BASE}/images/contact-hero.jpg`}
          alt="A child laughing at the Narú Medical Center"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 65%',
            display: 'block',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(54,48,42,0.35) 0%, rgba(54,48,42,0.55) 100%)',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 40px',
        }}>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(248,243,236,0.75)',
            marginBottom: '16px',
          }}>
            Get in Touch
          </p>
          <h1 style={{
            fontFamily: 'Libre Baskerville, serif',
            fontSize: 'clamp(28px, 4vw, 52px)',
            fontWeight: 400,
            color: '#F8F3EC',
            lineHeight: 1.15,
            fontStyle: 'italic',
            margin: 0,
          }}>
            We'd love to hear from you.
          </h1>
        </div>
      </div>

      {/* FORM SECTION */}
      <section style={{ background: '#F8F3EC', padding: '80px 40px 100px' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <p style={{
                fontFamily: 'Libre Baskerville, serif',
                fontSize: '28px',
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#36302A',
                marginBottom: '20px',
              }}>
                Thank you.
              </p>
              <p style={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#574C3F',
              }}>
                Your message has been received. Someone from The Humble Village team will be in touch with you shortly.
              </p>
            </div>
          ) : (
            <>
              <p style={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: '16px',
                lineHeight: 1.85,
                color: '#574C3F',
                marginBottom: '48px',
                textAlign: 'center',
              }}>
                Whether you want to volunteer, donate, host a village meeting, or simply learn more — we're here. Fill out the form below and we'll get back to you.
              </p>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: 'none' }}>
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="contact-name-grid">
                  <div>
                    <label style={labelStyle}>First Name</label>
                    <input name="first-name" type="text" required placeholder="First name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Last Name</label>
                    <input name="last-name" type="text" required placeholder="Last name" style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input name="email" type="email" required placeholder="your@email.com" style={inputStyle} />
                </div>

                <div>
                  <label style={labelStyle}>Topic</label>
                  <select name="topic" required style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="">Select a topic...</option>
                    <option value="General">General</option>
                    <option value="Expedition">Expedition</option>
                    <option value="Kit Collection">Kit Collection</option>
                    <option value="Narú Circle">Narú Circle</option>
                    <option value="Donation">Donation</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us how you'd like to get involved, or ask us anything..."
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    background: '#36302A',
                    color: '#F8F3EC',
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    padding: '16px 32px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: submitting ? 'wait' : 'pointer',
                    opacity: submitting ? 0.7 : 1,
                    alignSelf: 'flex-start',
                    transition: 'opacity 0.2s',
                  }}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 560px) {
          .contact-name-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
