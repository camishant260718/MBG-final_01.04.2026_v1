import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 60);
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
        backgroundColor: '#131F33',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle noise / grain overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.07) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.04) 0%, transparent 50%)',
      }} />

      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '8rem 2rem 5rem',
        position: 'relative', zIndex: 1,
        width: '100%', boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: '4rem',
        alignItems: 'center',
      }} className="hero-main-grid">

        {/* ── LEFT: Text ─────────────────────────────────────── */}
        <div>
          {/* Green availability badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            marginBottom: '2rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}>
            <span style={{ position: 'relative', display: 'inline-flex', width: '9px', height: '9px' }}>
              <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', backgroundColor: '#34D399', opacity: 0.5, animation: 'heroPulse 2s ease-in-out infinite' }} />
              <span style={{ position: 'relative', borderRadius: '50%', width: '9px', height: '9px', backgroundColor: '#34D399', display: 'block' }} />
            </span>
            <span style={{ fontSize: '13px', fontWeight: '500', color: '#34D399', letterSpacing: '0.2px' }}>
              Available for global opportunities
            </span>
          </div>

          {/* Main heading */}
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
            fontWeight: '700',
            color: '#FFFFFF',
            lineHeight: '1.12',
            margin: '0 0 1.5rem',
            letterSpacing: '-0.5px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
          }}>
            From Numbers<br />
            <span style={{ color: '#C9A84C', fontWeight: '300', fontStyle: 'italic' }}>to Narratives.</span>
          </h1>

          {/* Subtitle tags */}
          <div style={{
            display: 'flex', gap: '0.5rem', flexWrap: 'wrap',
            marginBottom: '1.5rem',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.2s',
          }}>
            {['Finance', 'IFRS', 'Strategy', 'Dubai UAE'].map((tag) => (
              <span key={tag} style={{
                fontSize: '11px', fontWeight: '600',
                letterSpacing: '1.2px', textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.85)',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: '2px', padding: '4px 12px',
                backgroundColor: 'rgba(201,168,76,0.06)',
              }}>{tag}</span>
            ))}
          </div>

          {/* Body text */}
          <p style={{
            fontSize: '15px', color: 'rgba(255,255,255,0.55)',
            lineHeight: '1.85', maxWidth: '480px',
            marginBottom: '2.5rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
          }}>
            A Chartered Accountant with <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: '600' }}>13+ years</strong> of experience in financial reporting,
            IFRS compliance, and strategic decision support across UAE and India.
          </p>

          {/* CTA buttons */}
          <div style={{
            display: 'flex', gap: '1rem', flexWrap: 'wrap',
            marginBottom: '3rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
          }}>
            <button
              onClick={() => scrollTo('#connect')}
              style={{
                backgroundColor: '#C9A84C', color: '#0F2244',
                border: 'none', padding: '14px 32px',
                borderRadius: '50px', fontSize: '14px',
                fontWeight: '700', cursor: 'pointer',
                fontFamily: "'Poppins', sans-serif",
                display: 'flex', alignItems: 'center', gap: '8px',
                transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
                boxShadow: '0 4px 20px rgba(201,168,76,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B8963E';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(201,168,76,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#C9A84C';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,168,76,0.3)';
              }}
            >
              Work with me <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo('#about-me')}
              style={{
                backgroundColor: 'transparent', color: 'rgba(255,255,255,0.75)',
                border: '1.5px solid rgba(255,255,255,0.2)',
                padding: '13px 32px', borderRadius: '50px',
                fontSize: '14px', fontWeight: '600',
                cursor: 'pointer', fontFamily: "'Poppins', sans-serif",
                transition: 'border-color 0.3s ease, color 0.3s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C9A84C';
                e.currentTarget.style.color = '#C9A84C';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              About Me
            </button>
          </div>

          {/* Social proof row */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.55s',
          }}>
            {/* Stacked initials avatars */}
            <div style={{ display: 'flex' }}>
              {['DW', 'AF', 'EP', 'RC'].map((init, i) => (
                <div key={i} style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  backgroundColor: ['#0891B2','#059669','#DC2626','#7C3AED'][i],
                  border: '2.5px solid #131F33',
                  marginLeft: i === 0 ? 0 : '-10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '10px', fontWeight: '700', color: '#FFFFFF',
                  letterSpacing: '0.3px',
                }}>{init}</div>
              ))}
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: '1.4' }}>
              Contributed to <strong style={{ color: 'rgba(255,255,255,0.8)' }}>6 organizations</strong>
              <br />across UAE & India
            </p>
          </div>
        </div>

        {/* ── RIGHT: Gold circle photo ──────────────────────── */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(0.92)',
          transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
          position: 'relative',
        }}>
          {/* Large gold circle */}
          <div style={{
            width: 'min(420px, 90%)',
            aspectRatio: '1',
            borderRadius: '50%',
            backgroundColor: '#C9A84C',
            position: 'relative',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
            overflow: 'hidden',
          }}>
            {/* Photo placeholder content */}
            <div style={{
              width: '100%', height: '100%',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '0.5rem',
            }}>
              <div style={{
                width: '100px', height: '100px',
                borderRadius: '50%',
                border: '3px solid rgba(255,255,255,0.4)',
                backgroundColor: 'rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '30px', fontWeight: '800',
                color: 'rgba(255,255,255,0.9)', letterSpacing: '1px',
              }}>MG</div>
              <div style={{ textAlign: 'center', padding: '0 2rem' }}>
                <div style={{ fontSize: '20px', fontWeight: '700', color: 'rgba(255,255,255,0.95)', marginBottom: '4px' }}>
                  Mishant Gandhi
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Chartered Accountant · CA
                </div>
              </div>
              <div style={{
                position: 'absolute', bottom: '1.5rem',
                backgroundColor: 'rgba(255,255,255,0.18)',
                border: '1px dashed rgba(255,255,255,0.4)',
                borderRadius: '4px', padding: '5px 14px',
                fontSize: '10px', color: 'rgba(255,255,255,0.7)',
                letterSpacing: '0.5px',
              }}>
                📷 Add Profile Photo
              </div>
            </div>
          </div>

          {/* Floating stats badge */}
          <div style={{
            position: 'absolute', top: '12%', left: '-5%',
            backgroundColor: '#FFFFFF',
            borderRadius: '10px', padding: '0.875rem 1.25rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            minWidth: '130px',
          }}>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#0F2244', lineHeight: '1' }}>13+</div>
            <div style={{ fontSize: '11.5px', color: '#6B7280', marginTop: '2px', fontWeight: '500' }}>Years Experience</div>
          </div>

          <div style={{
            position: 'absolute', bottom: '10%', right: '-5%',
            backgroundColor: '#0F2244',
            borderRadius: '10px', padding: '0.875rem 1.25rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            minWidth: '120px',
          }}>
            <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#C9A84C', lineHeight: '1' }}>6+</div>
            <div style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.6)', marginTop: '2px', fontWeight: '500' }}>Organizations</div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50%       { transform: scale(2.5); opacity: 0; }
        }
        @media (max-width: 900px) {
          .hero-main-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-main-grid > :last-child {
            max-width: 320px; margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
