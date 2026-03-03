import React from 'react';

const companies = [
  {
    name: 'Dubai Electricity & Water Authority',
    short: 'DEWA',
    logo: 'https://logo.clearbit.com/dewa.gov.ae',
    country: 'Dubai, UAE',
  },
  {
    name: 'Al-Futtaim Engineering & Technologies',
    short: 'AFE',
    logo: 'https://logo.clearbit.com/alfuttaim.com',
    country: 'Dubai, UAE',
  },
  {
    name: 'Essar Projects Limited',
    short: 'EPL',
    logo: 'https://logo.clearbit.com/essar.com',
    country: 'India',
  },
  {
    name: 'Reliance Communications',
    short: 'RCL',
    logo: 'https://logo.clearbit.com/rcom.co.in',
    country: 'India',
  },
  {
    name: 'Golden Desert Investments LLC',
    short: 'GDI',
    logo: null,
    country: 'UAE',
  },
  {
    name: 'M.J. Khilawala & Co.',
    short: 'MJK',
    logo: null,
    country: 'Chartered Accountants',
  },
];

const LogoCard = ({ company }) => {
  const [imgError, setImgError] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        backgroundColor: '#FFFFFF',
        border: '1px solid',
        borderColor: hovered ? '#C9A84C' : '#E8E4DC',
        borderRadius: '6px',
        minHeight: '140px',
        boxShadow: hovered ? '0 8px 24px rgba(15,34,68,0.1)' : '0 1px 8px rgba(15,34,68,0.04)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'default',
        textAlign: 'center',
      }}
    >
      {company.logo && !imgError ? (
        <img
          src={company.logo}
          alt={company.name}
          style={{
            maxHeight: '50px',
            maxWidth: '130px',
            objectFit: 'contain',
            filter: hovered ? 'grayscale(0%) opacity(1)' : 'grayscale(100%) opacity(0.65)',
            transition: 'filter 0.4s ease',
            marginBottom: '0.875rem',
          }}
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          style={{
            width: '58px',
            height: '58px',
            backgroundColor: hovered ? '#C9A84C' : '#0F2244',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '700',
            fontSize: '13px',
            color: hovered ? '#0F2244' : '#C9A84C',
            letterSpacing: '0.5px',
            marginBottom: '0.875rem',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          }}
        >
          {company.short}
        </div>
      )}
      <div
        style={{
          fontSize: '12.5px',
          fontWeight: '600',
          color: '#0F2244',
          lineHeight: '1.4',
          textAlign: 'center',
          marginBottom: '0.3rem',
        }}
      >
        {company.name}
      </div>
      <div style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: '400' }}>
        {company.country}
      </div>
    </div>
  );
};

const WorkedWithSection = () => {
  return (
    <section
      id="organizations"
      style={{
        backgroundColor: '#FAFAF7',
        padding: '6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p
            style={{
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '0.75rem',
              margin: '0 0 0.75rem',
            }}
          >
            Trusted By
          </p>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: '700',
              color: '#0F2244',
              margin: '0 0 1rem',
              letterSpacing: '-0.3px',
            }}
          >
            Organizations I've Contributed To
          </h2>
          <div
            style={{
              height: '2px',
              width: '60px',
              backgroundColor: '#C9A84C',
              margin: '0 auto',
            }}
          />
        </div>

        {/* Logo grid */}
        <div
          className="logo-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }}
        >
          {companies.map((company) => (
            <LogoCard key={company.short} company={company} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .logo-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .logo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default WorkedWithSection;
