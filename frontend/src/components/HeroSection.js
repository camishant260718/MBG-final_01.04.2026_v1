import React, { useEffect, useState } from 'react';
import { ChevronDown, Camera } from 'lucide-react';

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
      {/* Subtle right-panel background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '33%',
          height: '100%',
          background: 'linear-gradient(160deg, #F7F4EE 0%, #EDE8D8 100%)',
          zIndex: 0,
        }}
      />

      {/* Gold left accent */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '25%',
          height: '50%',
          width: '3px',
          background: 'linear-gradient(to bottom, transparent, #C9A84C, transparent)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '8rem 2rem 5rem',
          position: 'relative',
          zIndex: 2,
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* ── 3-column grid ─────────────────────────────────────────── */}
        <div
          className="hero-3col"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr 1fr',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >

          {/* ── Column 1: Heading & text ──────────────────────────── */}
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
                    fontSize: '10.5px',
                    fontWeight: '600',
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                    border: '1px solid #C9A84C',
                    borderRadius: '2px',
                    padding: '4px 11px',
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
                fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
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
              <span style={{ fontStyle: 'italic', fontWeight: '300', color: '#0F2244' }}>
                to Narratives.
              </span>
            </h1>

            {/* Gold divider */}
            <div
              style={{
                height: '2px',
                width: visible ? '70px' : '0px',
                backgroundColor: '#C9A84C',
                marginBottom: '1.75rem',
                transition: 'width 0.7s ease 0.2s',
              }}
            />

            {/* Body text */}
            <p
              style={{
                fontSize: '14.5px',
                color: '#4A5568',
                lineHeight: '1.85',
                marginBottom: '1rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s',
              }}
            >
              I'm <strong style={{ color: '#0F2244', fontWeight: '600' }}>Mishant Gandhi</strong>,
              a finance professional with over 13 years of experience in financial
              reporting, IFRS compliance, and strategic financial management.
            </p>
            <p
              style={{
                fontSize: '14.5px',
                color: '#4A5568',
                lineHeight: '1.85',
                marginBottom: '2rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
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
                gap: '0.875rem',
                flexWrap: 'wrap',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s',
              }}
            >
              <button
                onClick={() => scrollTo('#connect')}
                style={{
                  backgroundColor: '#0F2244',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '13px 32px',
                  fontSize: '12.5px',
                  fontWeight: '700',
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
                  padding: '12px 32px',
                  fontSize: '12.5px',
                  fontWeight: '700',
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

          {/* ── Column 2: Stats ───────────────────────────────────── */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
            }}
          >
            {[
              {
                number: '13+',
                label: 'Years of Experience',
                sub: 'Utilities, infrastructure & diversified industries',
              },
              {
                number: '6',
                label: 'Organizations',
                sub: 'From CA firms to DEWA subsidiaries in UAE & India',
              },
              {
                number: 'IFRS',
                label: 'Compliance Expert',
                sub: 'International Financial Reporting Standards',
              },
              {
                number: 'CA',
                label: 'Chartered Accountant',
                sub: 'Institute of Chartered Accountants of India',
              },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E8E4DC',
                  borderLeft: '3px solid #C9A84C',
                  padding: '1.1rem 1.4rem',
                  borderRadius: '4px',
                  boxShadow: '0 2px 10px rgba(15,34,68,0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(5px)';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(15,34,68,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(15,34,68,0.05)';
                }}
              >
                <div
                  style={{
                    fontSize: '1.7rem',
                    fontWeight: '700',
                    color: '#0F2244',
                    letterSpacing: '-0.5px',
                    lineHeight: '1.1',
                    marginBottom: '0.2rem',
                  }}
                >
                  {stat.number}
                </div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#0F2244', marginBottom: '0.15rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '11.5px', color: '#6B7280', lineHeight: '1.45' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

          {/* ── Column 3: Photo ───────────────────────────────────── */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(24px)',
              transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
            }}
          >
            {/* Photo frame */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '280px',
              }}
            >
              {/* Gold corner accents */}
              <div style={{ position: 'absolute', top: '-8px', left: '-8px', width: '28px', height: '28px', borderTop: '2.5px solid #C9A84C', borderLeft: '2.5px solid #C9A84C', borderRadius: '1px', zIndex: 3 }} />
              <div style={{ position: 'absolute', top: '-8px', right: '-8px', width: '28px', height: '28px', borderTop: '2.5px solid #C9A84C', borderRight: '2.5px solid #C9A84C', borderRadius: '1px', zIndex: 3 }} />
              <div style={{ position: 'absolute', bottom: '-8px', left: '-8px', width: '28px', height: '28px', borderBottom: '2.5px solid #C9A84C', borderLeft: '2.5px solid #C9A84C', borderRadius: '1px', zIndex: 3 }} />
              <div style={{ position: 'absolute', bottom: '-8px', right: '-8px', width: '28px', height: '28px', borderBottom: '2.5px solid #C9A84C', borderRight: '2.5px solid #C9A84C', borderRadius: '1px', zIndex: 3 }} />

              {/* Main photo area */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  background: 'linear-gradient(155deg, #1B3260 0%, #0F2244 50%, #162D56 100%)',
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(201,168,76,0.15)',
                }}
              >
                {/* Subtle pattern overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(201,168,76,0.06) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(201,168,76,0.04) 0%, transparent 50%)',
                  pointerEvents: 'none',
                }} />

                {/* Large MG monogram */}
                <div
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    border: '2px solid rgba(201,168,76,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#C9A84C',
                    letterSpacing: '1px',
                    backgroundColor: 'rgba(201,168,76,0.08)',
                    marginBottom: '0.25rem',
                  }}
                >
                  MG
                </div>

                <div style={{ textAlign: 'center', padding: '0 1.5rem' }}>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#FFFFFF', letterSpacing: '0.3px', marginBottom: '0.25rem' }}>
                    Mishant Gandhi
                  </div>
                  <div style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.5' }}>
                    Chartered Accountant
                    <br />Dubai, UAE
                  </div>
                </div>

                {/* Photo upload hint */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    backgroundColor: 'rgba(201,168,76,0.12)',
                    border: '1px dashed rgba(201,168,76,0.35)',
                    borderRadius: '4px',
                    padding: '5px 12px',
                  }}
                >
                  <Camera size={12} style={{ color: 'rgba(201,168,76,0.7)' }} />
                  <span style={{ fontSize: '10px', color: 'rgba(201,168,76,0.7)', letterSpacing: '0.5px' }}>
                    Add Profile Photo
                  </span>
                </div>
              </div>
            </div>

            {/* Name below photo */}
            <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#0F2244', letterSpacing: '0.3px' }}>
                Mishant Gandhi
              </div>
              <div style={{ fontSize: '11.5px', color: '#9CA3AF', marginTop: '2px' }}>
                CA · CS · Dubai, UAE
              </div>
            </div>
          </div>

        </div>
        {/* ── End 3-col grid ────────────────────────────────────────── */}
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
          opacity: 0.4,
          transition: 'opacity 0.3s ease',
          zIndex: 2,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.4')}
      >
        <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '500' }}>
          Scroll
        </span>
        <ChevronDown size={15} className="scroll-bounce" />
      </button>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(5px); }
        }
        .scroll-bounce { animation: scrollBounce 2s infinite; }

        @media (max-width: 1024px) {
          .hero-3col {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-3col > :last-child {
            display: none !important;
          }
        }
        @media (max-width: 680px) {
          .hero-3col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
