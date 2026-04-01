import React from 'react';
import {
  BarChart2, FileCheck, PieChart, LayoutDashboard,
  Database, Users, Shield, Scale,
} from 'lucide-react';

const SKILL_LEVELS = {
  FINANCIAL_REPORTING: 95,
  GROUP_CONSOLIDATION: 92,
  FINANCIAL_PLANNING: 90,
  ERP_IMPLEMENTATION: 87,
  POWER_BI: 85,
  BUSINESS_PARTNERING: 90,
  ICV_AUDIT: 88,
  VAT_TAX: 86,
};

const skills = [
  { icon: BarChart2,     title: 'Financial Reporting & IFRS',      desc: 'End-to-end IFRS-compliant financial reporting across multiple entities', pct: SKILL_LEVELS.FINANCIAL_REPORTING },
  { icon: FileCheck,     title: 'Group Consolidation & Audit',      desc: 'Multi-entity consolidations and statutory audit coordination', pct: SKILL_LEVELS.GROUP_CONSOLIDATION },
  { icon: PieChart,      title: 'Financial Planning & Analysis',    desc: 'Budgets, forecasts, variance analysis & strategic insights to leadership', pct: SKILL_LEVELS.FINANCIAL_PLANNING },
  { icon: Database,      title: 'ERP Implementation (SAP, D365)',   desc: 'SAP and Microsoft Dynamics 365 finance module rollouts', pct: SKILL_LEVELS.ERP_IMPLEMENTATION },
  { icon: LayoutDashboard, title: 'Power BI & Dashboarding',        desc: 'Real-time business intelligence dashboards for decision-making', pct: SKILL_LEVELS.POWER_BI },
  { icon: Users,         title: 'Business Partnering',              desc: 'Trusted strategic finance partner to cross-functional leadership teams', pct: SKILL_LEVELS.BUSINESS_PARTNERING },
  { icon: Shield,        title: 'ICV Audit — UAE & Qatar',          desc: 'In-Country Value economic contribution audits and compliance certification', pct: SKILL_LEVELS.ICV_AUDIT },
  { icon: Scale,         title: 'VAT & Tax Compliance',             desc: 'UAE VAT returns, refunds, and multi-jurisdiction tax governance', pct: SKILL_LEVELS.VAT_TAX },
];

const getCardStyle = (hovered) => ({
  display: 'flex', flexDirection: 'column',
  backgroundColor: hovered ? '#003554' : '#FFFFFF',
  border: '1px solid', borderColor: hovered ? '#003554' : '#E5E7EB',
  borderRadius: '6px',
  boxShadow: hovered ? '0 8px 24px rgba(66,86,100,0.15)' : '0 1px 4px rgba(66,86,100,0.04)',
  transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.25s ease',
  transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
  cursor: 'default', overflow: 'hidden',
});

const SkillCardIcon = ({ Icon, hovered }) => (
  <div style={{
    flexShrink: 0, width: '42px', height: '42px',
    backgroundColor: hovered ? 'rgba(201,168,76,0.15)' : '#F5F2EA',
    borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'background-color 0.3s ease',
  }}>
    <Icon size={19} style={{ color: '#B8860B', transition: 'transform 0.3s ease', transform: hovered ? 'scale(1.15)' : 'scale(1)' }} />
  </div>
);

const SkillCardBar = ({ pct, hovered }) => (
  <div style={{ height: '3px', backgroundColor: hovered ? 'rgba(255,255,255,0.1)' : '#F0EDE6', marginTop: 'auto', transition: 'background-color 0.3s ease' }}>
    <div style={{ height: '100%', width: `${pct}%`, backgroundColor: hovered ? '#B8860B' : '#1B3A5C', borderRadius: '0 2px 2px 0', transition: 'background-color 0.3s ease' }} />
  </div>
);

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={getCardStyle(hovered)}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.4rem 1.5rem' }}>
        <SkillCardIcon Icon={Icon} hovered={hovered} />
        <div>
          <h3 style={{
            fontSize: '13.5px', fontWeight: '600',
            color: hovered ? '#FFFFFF' : '#003554',
            margin: '0 0 0.3rem', lineHeight: '1.3',
            transition: 'color 0.3s ease',
          }}>
            {skill.title}
          </h3>
          <p style={{
            fontSize: '12px',
            color: hovered ? 'rgba(255,255,255,0.58)' : '#6B7280',
            margin: 0, lineHeight: '1.55',
            transition: 'color 0.3s ease',
          }}>
            {skill.desc}
          </p>
        </div>
      </div>
      <SkillCardBar pct={skill.pct} hovered={hovered} />
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      style={{ backgroundColor: '#FFFFFF', padding: '6rem 2rem' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header row */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p style={{
            fontSize: '11px', fontWeight: '700',
            letterSpacing: '2.5px', textTransform: 'uppercase',
            color: '#9CA3AF', margin: '0 0 0.6rem',
          }}>
            Expertise
          </p>
          <div
            className="skills-header-row"
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: '800', color: '#003554',
                margin: '0 0 0.75rem',
                letterSpacing: '-0.4px',
              }}>
                Areas of Expertise
              </h2>
              <div style={{ height: '2px', width: '60px', backgroundColor: '#B8860B' }} />
            </div>
            <p style={{
              fontSize: '13px', color: '#9CA3AF',
              fontStyle: 'italic', maxWidth: '340px',
              textAlign: 'right', lineHeight: '1.65', margin: 0,
            }}>
              Bringing analytical precision and leadership insight to every financial decision.
            </p>
          </div>
        </div>

        {/* 2-column skills grid */}
        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
          }}
        >
          {skills.map((skill, i) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          .skills-header-row p { text-align: left !important; }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
