import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle warm background panel */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '45%',
          height: '100%',
          background: 'linear-gradient(135deg, #FAFAF7 0%, #F5F2EA 100%)',
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
          zIndex: 0,
        }}
      />

      {/* Gold vertical accent line */}
      <div
        style={{
          position: 'absolute',
          left: '0',
          top: '20%',
          height: '60%',
          width: '3px',
          background: 'linear-gradient(to bottom, transparent, #C9A84C, transparent)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '7rem 2rem 5rem',
          position: 'relative',
          zIndex: 2,
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left: Text content */}
          <div>
            {/* Tags */}
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
                marginBottom: '1.5rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
            >
              {['Chartered Accountant', 'Finance Leader', 'Strategic Thinker'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                    border: '1px solid #C9A84C',
                    borderRadius: '2px',
                    padding: '4px 12px',
                    backgroundColor: 'rgba(201,168,76,0.06)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Main heading */}
            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(2.4rem, 4.5vw, 3.75rem)',
                fontWeight: '700',
                color: '#0F2244',
                lineHeight: '1.15',
                margin: '0 0 0.5rem 0',
                letterSpacing: '-0.5px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
              }}
            >
              From Numbers
              <br />
              <span style={{ color: '#0F2244', fontStyle: 'italic', fontWeight: '300' }}>
                to Narratives.
              </span>
            </h1>

            {/* Gold divider */}
            <div
              style={{
                height: '2px',
                width: visible ? '80px' : '0px',
                backgroundColor: '#C9A84C',
                marginBottom: '2rem',
                transition: 'width 0.6s ease 0.2s',
              }}
            />

            {/* Body text */}
            <p
              style={{
                fontSize: '15px',
                fontWeight: '400',
                color: '#4A5568',
                lineHeight: '1.85',
                maxWidth: '520px',
                marginBottom: '1.25rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s',
              }}
            >
              I'm <strong style={{ color: '#0F2244', fontWeight: '600' }}>Mishant Gandhi</strong>,
              a finance professional with over 13 years of experience in financial
              reporting, IFRS compliance, and strategic financial management.
            </p>
            <p
              style={{
                fontSize: '15px',
                fontWeight: '400',
                color: '#4A5568',
                lineHeight: '1.85',
                maxWidth: '520px',
                marginBottom: '2.5rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s',
              }}
            >
              I believe finance is not just about accuracy — it's about insight.
              Currently serving with a DEWA subsidiary, driving financial
              transparency, automation, and performance excellence.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s',
              }}
            >
              <button
                onClick={() => scrollTo('#connect')}
                style={{
                  backgroundColor: '#0F2244',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '14px 36px',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: "'Poppins', sans-serif",
                  borderRadius: '2px',
                  transition: 'background-color 0.3s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#C9A84C';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0F2244';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Let's Connect
              </button>
              <button
                onClick={() => scrollTo('#experience')}
                style={{
                  backgroundColor: 'transparent',
                  color: '#0F2244',
                  border: '1.5px solid #0F2244',
                  padding: '13px 36px',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: "'Poppins', sans-serif",
                  borderRadius: '2px',
                  transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0F2244';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#0F2244';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                View Experience
              </button>
            </div>
          </div>

          {/* Right: Stats */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
            }}
          >
            {[
              { number: '13+', label: 'Years of Experience', sub: 'Across utilities, infrastructure & diversified industries' },
              { number: '6', label: 'Organizations Contributed', sub: 'From CA firms to DEWA subsidiaries in UAE & India' },
              { number: 'IFRS', label: 'Compliance Expert', sub: 'International Financial Reporting Standards specialist' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E8E4DC',
                  borderLeft: '3px solid #C9A84C',
                  padding: '1.5rem 2rem',
                  borderRadius: '4px',
                  boxShadow: '0 2px 12px rgba(15,34,68,0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(6px)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(15,34,68,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(15,34,68,0.05)';
                }}
              >
                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#0F2244', letterSpacing: '-1px', lineHeight: '1.1', marginBottom: '0.25rem' }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#0F2244', marginBottom: '0.25rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '12.5px', color: '#6B7280', lineHeight: '1.5' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#organizations')}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#0F2244',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          opacity: 0.45,
          transition: 'opacity 0.3s ease',
          zIndex: 2,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.45')}
      >
        <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '500' }}>Scroll</span>
        <ChevronDown size={16} className="scroll-bounce" />
      </button>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        .scroll-bounce { animation: scrollBounce 2s infinite; }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
