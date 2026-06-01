export default function GiveNowBanner() {
  return (
    <section style={{
      background: '#574C3F',
      padding: '72px 40px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p style={{
          fontFamily: 'Figtree, sans-serif',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#C8B59E',
          marginBottom: '20px',
        }}>
          Make a Difference Today
        </p>
        <h2 style={{
          fontFamily: 'Libre Baskerville, serif',
          fontSize: 'clamp(24px, 3.5vw, 38px)',
          fontWeight: 400,
          color: '#F8F3EC',
          marginBottom: '28px',
          lineHeight: 1.25,
        }}>
          Every dollar reaches a family in need.
        </h2>
        <a
          href="https://www.zeffy.com/en-US/donation-form/donate-to-the-humble-village"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#F8F3EC',
            color: '#36302A',
            padding: '16px 48px',
            borderRadius: '6px',
            fontFamily: 'Figtree, sans-serif',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            marginBottom: '16px',
          }}
        >
          Give Now
        </a>
        <p style={{
          fontFamily: 'Figtree, sans-serif',
          fontSize: '13px',
          color: '#F8F3EC',
          opacity: 0.65,
          lineHeight: 1.6,
        }}>
          100% of public donations go directly to our Humble Village projects.
        </p>
      </div>
    </section>
  );
}
