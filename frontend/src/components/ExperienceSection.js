import React from 'react';
import { Building2, Wrench, Zap, Radio, Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    Icon: Zap,
    color: '#0891B2',
    company: 'Dubai Electricity and Water Authority',
    location: 'Dubai, UAE',
    displayName: 'Dubai Electricity & Water Authority',
    years: '2024 — Present',
    role: 'Sr. Manager — Finance, Accounts & Taxation',
    description:
      "Complete financial reporting and internal & external audit management for DEWA's subsidiary. Stakeholder reporting, corporate governance, and regulatory compliance including VAT returns and refunds.",
  },
  {
    Icon: Wrench,
    color: '#059669',
    company: 'Al Futtaim Engineering and Technologies',
    location: 'Dubai, UAE',
    displayName: 'Al Futtaim Engineering & Technologies',
    years: '2022 — 2024',
    role: 'Revenue Controller',
    description:
      'In-country valuations and reports for UAE and Qatar businesses. Managed internal, half-year, interim, and external audit assignments, plus Contractors Classification certification for Abu Dhabi government opportunities.',
  },
  {
    Icon: Building2,
    color: '#B8860B',
    company: 'Essar Group',
    location: 'Dubai, UAE',
    displayName: 'Essar Group',
    years: '2017 — 2021',
    role: 'Sr. Manager — Financial Reporting',
    description:
      'Financial consolidation and reporting, secretarial compliance and corporate governance across the Essar Group.',
  },
  {
    Icon: Briefcase,
    color: '#DC2626',
    company: 'UAE Investor Family Office',
    location: 'Dubai, UAE',
    displayName: 'UAE Investor Family Office',
    years: '2016 — 2017',
    role: 'Finance Manager',
    description:
      'Supported investment analysis, financial modelling, and feasibility studies for real estate and diversified investment portfolios based in UAE.',
  },
  {
    Icon: Radio,
    color: '#7C3AED',
    company: 'Reliance Communication Ltd.',
    location: 'Mumbai, India',
    displayName: 'Reliance Communication Ltd.',
    years: '2015 — 2016',
    role: 'Assistant Manager — Finance and Accounts',
    description:
      "Handled statutory financial reporting, internal controls, and regulatory compliance in the telecom sector for one of India's largest network operators.",
  },
  {
    Icon: GraduationCap,
    color: '#003554',
    company: 'GOLS Academy',
    location: 'Mumbai, India',
    displayName: 'GOLS Academy',
    years: '2012 — 2014',
    role: 'Accounts Manager',
    description:
      'Managed Government Grant accounting, working capital, MIS, cash flow, budgetary analysis, fixed assets and logistics operations.',
  },
];

const ExpCard = ({ exp }) => {
  const { Icon, color, company, location, displayName, years, role, description } = exp;
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
      {/* Top row: Icon + company + years */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: '44px', height: '44px',
          borderRadius: '10px',
          backgroundColor: `${color}18`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Icon size={22} style={{ color }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: '12.5px', fontWeight: '600', color: '#003554',
            lineHeight: '1.3', whiteSpace: 'nowrap',
            overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {company}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
            <span style={{ fontSize: '11px', color: '#9CA3AF' }}>{years}</span>
            {location && (
              <>
                <span style={{ fontSize: '11px', color: '#D1D5DB' }}>·</span>
                <span style={{ fontSize: '11px', color: '#9CA3AF' }}>{location}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: '#F0EDE6' }} />

      {/* Bottom: Display name + role + desc */}
      <div>
        <div style={{
          fontSize: '1rem', fontWeight: '700', color: '#003554',
          margin: '0 0 0.3rem', lineHeight: '1.35',
        }}>
          {displayName}
        </div>
        <div style={{
          fontSize: '11px', fontWeight: '600',
          color: color, textTransform: 'uppercase',
          letterSpacing: '0.7px', marginBottom: '0.75rem',
          wordBreak: 'break-word', overflowWrap: 'break-word',
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
            fontWeight: '800', color: '#003554',
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
          .exp-card { padding: 1.4rem !important; }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
