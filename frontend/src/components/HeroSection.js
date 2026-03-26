import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      style={{
        minHeight: '100vh',
        backgroundColor: '#f5f1ed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: '60px',
      }}
    >
      <div
        className="hero-main-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem 2rem',
          width: '100%',
          boxSizing: 'border-box',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3rem',
          alignItems: 'center',
          flex: 1,
        }}
      >
        {/* LEFT: Text content */}
        <div>
          {/* Welcome text */}
          <p
            data-testid="hero-welcome"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontStyle: 'italic',
              fontSize: '16px',
              color: '#003554',
              margin: '0 0 1.5rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            Turning financial complexity into boardroom clarity.
          </p>

          {/* Main heading */}
          <h1
            data-testid="hero-heading"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
              fontWeight: '700',
              color: '#003554',
              lineHeight: '1.1',
              margin: '0 0 0.5rem',
              letterSpacing: '-0.5px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
            }}
          >
            Hello, I'm Mishant.
          </h1>

          {/* Yellow underline accent */}
          <div
            style={{
              width: '200px',
              height: '4px',
              backgroundColor: '#B8860B',
              borderRadius: '2px',
              marginBottom: '2rem',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.5s ease 0.2s',
            }}
          />

          {/* Body paragraphs */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s',
            }}
          >
            <p
              style={{
                fontSize: '15px',
                color: '#3A3A3A',
                lineHeight: '1.8',
                margin: '0 0 1rem',
                maxWidth: '500px',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              I am a <strong style={{ color: '#003554', fontWeight: '700' }}>Chartered Accountant</strong> and <strong style={{ color: '#003554', fontWeight: '700' }}>Company Secretary</strong> with 13+ years of experience
              across multinational corporations — driving financial consolidation, IFRS reporting,
              and tax governance across 9 countries and 4 sectors.
            </p>

            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'italic',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                color: '#003554',
                lineHeight: '1.7',
                margin: '0 0 1rem',
                maxWidth: '500px',
                borderLeft: '3px solid #B8860B',
                paddingLeft: '16px',
              }}
            >
              I believe numbers should not just report the past — they should illuminate the <strong style={{ fontWeight: '700' }}>path forward</strong>.
            </p>

            <p
              style={{
                fontSize: '15px',
                color: '#3A3A3A',
                lineHeight: '1.8',
                margin: '0 0 2rem',
                maxWidth: '500px',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              I have worked with organisations including{' '}
              <strong style={{ color: '#003554', fontWeight: '700' }}>Al Futtaim Engineering, Essar Group, Reliance Communications</strong>,
              and <strong style={{ color: '#003554', fontWeight: '700' }}>UAE Investor Family Office</strong>.
              Currently serving as Senior Manager — Finance & Audit at <strong style={{ color: '#003554', fontWeight: '700' }}>Dubai Electricity and Water Authority (DEWA)</strong>.
            </p>
          </div>

          {/* CTA buttons */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginBottom: '2rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s',
            }}
          >
            <button
              data-testid="hero-send-message-btn"
              onClick={() => scrollTo('#connect')}
              style={{
                backgroundColor: '#003554',
                color: '#FFFFFF',
                border: 'none',
                padding: '10px 22px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#003554';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#003554';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#4ADE80',
                  display: 'inline-block',
                }}
              />
              Let's Collaborate
            </button>
            <a
              href="/Mishant_Gandhi_CV.pdf"
              download
              data-testid="hero-download-cv-btn"
              style={{
                backgroundColor: 'transparent',
                color: '#003554',
                border: '2px solid #003554',
                padding: '9px 22px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#003554';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#003554';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Download CV
            </a>
          </div>

          {/* LinkedIn stats */}
          <div
            data-testid="hero-linkedin-stats"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.55s',
            }}
          >
            <a
              href="https://www.linkedin.com/in/camishant-0525076563"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#003554',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              3,214 followers
            </a>
            <span style={{ color: '#8A8577', fontSize: '14px' }}>·</span>
            <a
              href="https://www.linkedin.com/in/camishant-0525076563"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#003554',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              500+ connections
            </a>
            <span
              style={{
                fontSize: '13px',
                color: '#8A8577',
                marginLeft: '4px',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              on LinkedIn
            </span>
          </div>
        </div>

        {/* RIGHT: Photo placeholder */}
        <div
          className="hero-photo-area"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.95)',
            transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
          }}
        >
          <div
            data-testid="hero-photo-placeholder"
            style={{
              width: '100%',
              maxWidth: '380px',
              aspectRatio: '3/4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '12px',
            }}
          >
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'italic',
                fontSize: '18px',
                color: '#7A7A7A',
                textAlign: 'center',
              }}
            >
              Photo in .PNG format.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-main-grid {
            grid-template-columns: 1fr !important;
            padding-top: 2rem !important;
          }
          .hero-photo-area {
            order: -1;
            max-width: 280px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
