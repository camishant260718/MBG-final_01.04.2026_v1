import React from 'react';

const companies = [
  { name: 'Dubai Electricity & Water Authority', short: 'DEWA', logo: 'https://logo.clearbit.com/dewa.gov.ae', country: 'Dubai, UAE' },
  { name: 'Al-Futtaim Engineering & Technologies', short: 'AFE', logo: 'https://logo.clearbit.com/alfuttaim.com', country: 'Dubai, UAE' },
  { name: 'Essar Projects Limited', short: 'EPL', logo: 'https://logo.clearbit.com/essar.com', country: 'India' },
  { name: 'Reliance Communications', short: 'RCL', logo: 'https://logo.clearbit.com/rcom.co.in', country: 'India' },
  { name: 'Golden Desert Investments LLC', short: 'GDI', logo: null, country: 'UAE' },
  { name: 'M.J. Khilawala & Co.', short: 'MJK', logo: null, country: 'Chartered Accountants' },
];

const LogoItem = ({ company }) => {
  const [imgError, setImgError] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.875rem',
        padding: '1rem 2rem',
        backgroundColor: '#FFFFFF',
        border: '1px solid',
        borderColor: hovered ? '#C9A84C' : '#E8E4DC',
        borderRadius: '8px',
        boxShadow: hovered ? '0 6px 20px rgba(15,34,68,0.1)' : '0 1px 6px rgba(15,34,68,0.05)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.25s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        flexShrink: 0,
        cursor: 'default',
        minWidth: '220px',
        whiteSpace: 'nowrap',
      }}
    >
      {/* Logo or Monogram */}
      {company.logo && !imgError ? (
        <img
          src={company.logo}
          alt={company.name}
          style={{
            height: '36px',
            width: '36px',
            objectFit: 'contain',
            filter: hovered ? 'grayscale(0%) opacity(1)' : 'grayscale(100%) opacity(0.6)',
            transition: 'filter 0.35s ease',
            flexShrink: 0,
          }}
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          style={{
            width: '36px',
            height: '36px',
            backgroundColor: hovered ? '#C9A84C' : '#0F2244',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '700',
            fontSize: '10px',
            color: hovered ? '#0F2244' : '#C9A84C',
            letterSpacing: '0.3px',
            flexShrink: 0,
            transition: 'background-color 0.3s ease, color 0.3s ease',
          }}
        >
          {company.short}
        </div>
      )}

      {/* Text */}
      <div>
        <div style={{ fontSize: '13px', fontWeight: '600', color: '#0F2244', lineHeight: '1.3' }}>
          {company.name}
        </div>
        <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '1px' }}>
          {company.country}
        </div>
      </div>
    </div>
  );
};

const WorkedWithSection = () => {
  // Duplicate items 3× for seamless infinite scroll
  const track = [...companies, ...companies, ...companies];

  return (
    <section
      id="organizations"
      style={{ backgroundColor: '#FAFAF7', padding: '5rem 0' }}
    >
      {/* Section header — has horizontal padding */}
      <div style={{ textAlign: 'center', marginBottom: '3rem', padding: '0 2rem' }}>
        <p style={{
          fontSize: '11px', fontWeight: '600', letterSpacing: '3px',
          textTransform: 'uppercase', color: '#C9A84C', margin: '0 0 0.75rem',
        }}>
          Trusted By
        </p>
        <h2 style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
          fontWeight: '700', color: '#0F2244',
          margin: '0 0 1rem', letterSpacing: '-0.3px',
        }}>
          Organizations I've Contributed To
        </h2>
        <div style={{ height: '2px', width: '60px', backgroundColor: '#C9A84C', margin: '0 auto' }} />
      </div>

      {/* Marquee wrapper — full width, no side padding, clipped */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        {/* Left fade edge */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
          background: 'linear-gradient(to right, #FAFAF7 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
        {/* Right fade edge */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
          background: 'linear-gradient(to left, #FAFAF7 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        {/* Scrolling track */}
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            gap: '1.25rem',
            padding: '0.5rem 0 1rem',
            width: 'max-content',
            animation: 'marqueeScroll 28s linear infinite',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {track.map((company, i) => (
            <LogoItem key={`${company.short}-${i}`} company={company} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .marquee-track:hover { animation-play-state: paused !important; }
      `}</style>
    </section>
  );
};

export default WorkedWithSection;
