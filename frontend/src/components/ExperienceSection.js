import React from 'react';
import { Building2, Wrench, HardHat, Radio, TrendingUp, FileText } from 'lucide-react';

const experiences = [
  {
    Icon: Building2,
    color: '#0891B2',
    company: 'DEWA Subsidiary',
    years: '2019 — Present',
    role: 'Finance Manager',
    description:
      'Leading financial reporting, IFRS compliance, and strategic financial planning. Driving automation, Power BI dashboards and performance excellence for a key utility subsidiary.',
  },
  {
    Icon: Wrench,
    color: '#059669',
    company: 'Al-Futtaim Engineering & Technologies',
    years: '2016 — 2019',
    role: 'Senior Finance Manager',
    description:
      "Oversaw group consolidation, FP&A, and ERP rollout across multiple business units within Al-Futtaim's engineering and technology division.",
  },
  {
    Icon: HardHat,
    color: '#C9A84C',
    company: 'Essar Projects Limited',
    years: '2014 — 2016',
    role: 'Finance Manager',
    description:
      'Managed project finance, cost controls, and compliance reporting for large-scale infrastructure and EPC projects across the GCC and Indian markets.',
  },
  {
    Icon: Radio,
    color: '#7C3AED',
    company: 'Reliance Communications',
    years: '2012 — 2014',
    role: 'Finance Executive',
    description:
      'Handled statutory financial reporting, internal controls, and regulatory compliance in the telecom sector for one of India\'s largest network operators.',
  },
  {
    Icon: TrendingUp,
    color: '#DC2626',
    company: 'Golden Desert Investments LLC',
    years: '2011 — 2012',
    role: 'Finance Analyst',
    description:
      'Supported investment analysis, financial modelling, and feasibility studies for real estate and diversified investment portfolios based in UAE.',
  },
  {
    Icon: FileText,
    color: '#0F2244',
    company: 'M.J. Khilawala & Co.',
    years: '2008 — 2011',
    role: 'Article Trainee / CA',
    description:
      "Completed Chartered Accountancy articleship covering statutory audit, direct & indirect tax compliance, and financial advisory across diverse client industries.",
  },
];

const ExpCard = ({ exp }) => {
  const { Icon, color, company, years, role, description } = exp;
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        padding: '2rem',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 16px 40px rgba(15,34,68,0.12)'
          : '0 2px 8px rgba(15,34,68,0.05)',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      {/* Top row: Icon + company name + years */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: '44px', height: '44px',
          borderRadius: '10px',
          backgroundColor: `${color}15`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          transition: 'background-color 0.3s ease',
        }}>
          <Icon size={22} style={{ color }} />
        </div>
        <div>
          <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#0F2244', lineHeight: '1.3' }}>
            {company.length > 26 ? company.substring(0, 26) + '…' : company}
          </div>
          <div style={{ fontSize: '11.5px', color: '#9CA3AF', marginTop: '1px' }}>
            {years}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: '#F0EDE6' }} />

      {/* Bottom: Company name (large) + role + desc */}
      <div>
        <div style={{
          fontSize: '1.1rem', fontWeight: '700', color: '#0F2244',
          margin: '0 0 0.25rem', lineHeight: '1.3',
        }}>
          {company.split(' ').slice(0, 2).join(' ')}
        </div>
        <div style={{
          fontSize: '11.5px', fontWeight: '600',
          color: color, textTransform: 'uppercase',
          letterSpacing: '0.8px', marginBottom: '0.75rem',
        }}>
          {role}
        </div>
        <p style={{
          fontSize: '13px', color: '#6B7280',
          lineHeight: '1.7', margin: 0,
        }}>
          {description}
        </p>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      style={{ backgroundColor: '#ECEAE3', padding: '6rem 2rem' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p style={{
            fontSize: '11px', fontWeight: '700',
            letterSpacing: '2.5px', textTransform: 'uppercase',
            color: '#9CA3AF', margin: '0 0 0.6rem',
          }}>
            [ MY STORY ]
          </p>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(2.2rem, 4vw, 3rem)',
            fontWeight: '800', color: '#0F2244',
            margin: 0, letterSpacing: '-0.5px',
          }}>
            My Experience
          </h2>
        </div>

        {/* 3-column card grid */}
        <div
          className="exp-card-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
        >
          {experiences.map((exp, i) => (
            <ExpCard key={i} exp={exp} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .exp-card-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .exp-card-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
