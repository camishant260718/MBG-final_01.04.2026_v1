import React from 'react';
import { CheckCircle, ArrowRight, Camera } from 'lucide-react';

const highlights = [
  '13+ years of experience in financial leadership',
  'Served across 6 global organizations in UAE & India',
  'IFRS specialist with SAP & Microsoft D365 expertise',
];

const AboutSection = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about-me"
      style={{ backgroundColor: '#ECEAE3', padding: '7rem 2rem' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section label + heading */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{
            fontSize: '11px', fontWeight: '700',
            letterSpacing: '2.5px', textTransform: 'uppercase',
            color: '#9CA3AF', margin: '0 0 0.6rem',
          }}>
            [ MEET MISHANT ]
          </p>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(2.2rem, 4vw, 3rem)',
            fontWeight: '800', color: '#0F2244',
            margin: 0, letterSpacing: '-0.5px',
          }}>
            About Me
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.85fr 1.15fr',
            gap: '5rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Photo */}
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '100%',
              aspectRatio: '4/5',
              backgroundColor: '#D8D4CB',
              borderRadius: '8px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '8px 8px 0 #C9A84C',
            }}>
              {/* Placeholder */}
              <div style={{
                width: '100%', height: '100%',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: '1rem',
                background: 'linear-gradient(160deg, #1C2B42 0%, #0F2244 100%)',
              }}>
                <div style={{
                  width: '90px', height: '90px',
                  borderRadius: '50%',
                  border: '2px solid rgba(201,168,76,0.5)',
                  backgroundColor: 'rgba(201,168,76,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '26px', fontWeight: '700', color: '#C9A84C',
                }}>MG</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '15px', fontWeight: '600', color: '#FFFFFF' }}>Mishant Gandhi</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>Dubai, UAE</div>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  backgroundColor: 'rgba(201,168,76,0.1)',
                  border: '1px dashed rgba(201,168,76,0.35)',
                  borderRadius: '4px', padding: '6px 14px',
                  marginTop: '0.5rem',
                }}>
                  <Camera size={12} style={{ color: 'rgba(201,168,76,0.7)' }} />
                  <span style={{ fontSize: '10px', color: 'rgba(201,168,76,0.7)', letterSpacing: '0.5px' }}>
                    Add Profile Photo
                  </span>
                </div>
              </div>
            </div>

            {/* Gold accent stripe */}
            <div style={{
              position: 'absolute', bottom: '-16px', left: '16px',
              right: '-8px', height: '3px',
              background: 'linear-gradient(to right, #C9A84C, transparent)',
              borderRadius: '2px',
            }} />
          </div>

          {/* Right: Content */}
          <div>
            {/* Big quote */}
            <h3 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
              fontWeight: '700', color: '#0F2244',
              lineHeight: '1.45',
              margin: '0 0 1.5rem',
              letterSpacing: '-0.2px',
            }}>
              My goal is to transform financial data into strategic insights that drive sharper leadership decisions.
            </h3>

            {/* Body text */}
            <p style={{
              fontSize: '15px', color: '#4A5568',
              lineHeight: '1.9', margin: '0 0 2.5rem',
            }}>
              I'm <strong style={{ color: '#0F2244' }}>Mishant Gandhi</strong>, a finance professional with over 13 years
              of experience spanning utilities, infrastructure, telecom, and investment sectors across
              UAE and India. I believe finance is not just about accuracy — it's about <em>insight</em>.
              I transform finance functions into strategic partners that help leadership teams make
              sharper, data-backed decisions.
            </p>

            {/* Checkpoints */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2.5rem' }}>
              {highlights.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle
                    size={18}
                    style={{ color: '#C9A84C', flexShrink: 0, marginTop: '1px' }}
                  />
                  <span style={{ fontSize: '14.5px', color: '#374151', lineHeight: '1.5' }}>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollTo('#connect')}
              style={{
                backgroundColor: '#C9A84C', color: '#0F2244',
                border: 'none', padding: '14px 36px',
                borderRadius: '50px', fontSize: '14px',
                fontWeight: '700', cursor: 'pointer',
                fontFamily: "'Poppins', sans-serif",
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
                boxShadow: '0 4px 16px rgba(201,168,76,0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B8963E';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(201,168,76,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#C9A84C';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(201,168,76,0.25)';
              }}
            >
              Let's Collaborate <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
