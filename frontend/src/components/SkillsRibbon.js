import React from 'react';

const skills = [
  'Financial Reporting & IFRS',
  'Group Consolidation & Audit',
  'Financial Planning & Analysis',
  'ERP Implementation (SAP, D365)',
  'Power BI & Dashboarding',
  'Business Partnering',
  'ICV Audit — UAE & Qatar',
  'VAT & Tax Compliance',
];

const SkillsRibbon = () => {
  const ribbonContent = [...skills, ...skills].map((skill, i) => (
    <span key={`${skill}-${i}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '2.5rem' }}>
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontStyle: 'italic',
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: '#B8860B',
          whiteSpace: 'nowrap',
          letterSpacing: '0.5px',
        }}
      >
        {skill}
      </span>
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          display: 'inline-block',
          flexShrink: 0,
        }}
      />
    </span>
  ));

  return (
    <section
      data-testid="skills-ribbon"
      style={{
        backgroundColor: '#003554',
        padding: '1.75rem 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem',
          animation: 'skillsScroll 40s linear infinite',
          width: 'max-content',
        }}
      >
        {ribbonContent}
      </div>

      <style>{`
        @keyframes skillsScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default SkillsRibbon;
