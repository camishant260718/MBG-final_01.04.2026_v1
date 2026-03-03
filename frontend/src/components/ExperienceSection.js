import React from 'react';
import {
  BarChart2, TrendingUp, FileCheck, PieChart, LayoutDashboard,
  Database, Users, Search, Shield, Scale, DollarSign, Target,
} from 'lucide-react';

const skills = [
  { icon: BarChart2, title: 'Financial Reporting & IFRS', desc: 'End-to-end IFRS-compliant financial reporting across multiple entities' },
  { icon: TrendingUp, title: 'Budgeting & Forecasting', desc: 'Annual budgets, rolling forecasts & meaningful variance analysis' },
  { icon: FileCheck, title: 'Group Consolidation & Audit', desc: 'Multi-entity consolidations and statutory audit coordination' },
  { icon: PieChart, title: 'Financial Planning & Analysis', desc: 'FP&A delivering strategic & operational insights to leadership' },
  { icon: LayoutDashboard, title: 'Power BI & Dashboarding', desc: 'Real-time business intelligence dashboards for decision-making' },
  { icon: Database, title: 'ERP Implementation (SAP, D365)', desc: 'SAP and Microsoft Dynamics 365 finance module rollouts' },
  { icon: Users, title: 'Business Partnering', desc: 'Trusted strategic finance partner to cross-functional leadership teams' },
  { icon: Search, title: 'Feasibility Studies', desc: 'Investment viability analysis and multi-year financial projections' },
  { icon: Shield, title: 'Internal Controls', desc: 'Robust internal control framework design and implementation' },
  { icon: Scale, title: 'Corporate Compliance', desc: 'Regulatory reporting and corporate governance oversight' },
  { icon: DollarSign, title: 'Cost Optimization', desc: 'Structural cost reduction programs and operational efficiency improvements' },
  { icon: Target, title: 'Strategic Decision Support', desc: 'Data-backed financial insights that drive C-suite decisions' },
];

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        padding: '1.5rem',
        backgroundColor: hovered ? '#0F2244' : '#FFFFFF',
        border: '1px solid',
        borderColor: hovered ? '#0F2244' : '#E8E4DC',
        borderRadius: '6px',
        boxShadow: hovered ? '0 8px 24px rgba(15,34,68,0.15)' : '0 1px 6px rgba(15,34,68,0.04)',
        transition: 'background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, transform 0.25s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        cursor: 'default',
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: '44px',
          height: '44px',
          backgroundColor: hovered ? 'rgba(201,168,76,0.18)' : '#F5F2EA',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.35s ease',
        }}
      >
        <Icon
          size={20}
          style={{
            color: '#C9A84C',
            transition: 'transform 0.3s ease',
            transform: hovered ? 'scale(1.15)' : 'scale(1)',
          }}
        />
      </div>
      <div>
        <h3
          style={{
            fontSize: '13.5px',
            fontWeight: '600',
            color: hovered ? '#FFFFFF' : '#0F2244',
            margin: '0 0 0.3rem',
            transition: 'color 0.35s ease',
            lineHeight: '1.3',
          }}
        >
          {skill.title}
        </h3>
        <p
          style={{
            fontSize: '12px',
            color: hovered ? 'rgba(255,255,255,0.6)' : '#6B7280',
            margin: 0,
            lineHeight: '1.55',
            transition: 'color 0.35s ease',
          }}
        >
          {skill.desc}
        </p>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p
            style={{
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#C9A84C',
              margin: '0 0 0.75rem',
            }}
          >
            Expertise
          </p>
          <div
            className="exp-header-row"
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: '700',
                  color: '#0F2244',
                  margin: '0 0 0.75rem',
                  letterSpacing: '-0.3px',
                }}
              >
                Areas of Expertise
              </h2>
              <div style={{ height: '2px', width: '60px', backgroundColor: '#C9A84C' }} />
            </div>
            <p
              style={{
                fontSize: '13px',
                color: '#6B7280',
                fontStyle: 'italic',
                maxWidth: '360px',
                textAlign: 'right',
                lineHeight: '1.6',
                margin: 0,
              }}
            >
              Bringing analytical precision and leadership insight to every financial decision.
            </p>
          </div>
        </div>

        {/* Skills grid */}
        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
          }}
        >
          {skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          .exp-header-row p { text-align: left !important; }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
