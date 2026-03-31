import React from 'react';

const skills = [
  'Financial Reporting',
  'IFRS Standards',
  'Group Consolidation',
  'Audit & Assurance',
  'Tax Advisory',
  'Financial Analysis',
  'ICV Audit',
  'VAT Compliance',
];

export default function SkillsRibbon() {
  const repeated = [...skills, ...skills, ...skills];

  return (
    <div
      data-testid="skills-ribbon"
      style={{
        backgroundColor: '#003554',
        padding: '14px 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          animation: 'marquee 30s linear infinite',
        }}
      >
        {repeated.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            style={{
              color: '#d4a843',
              fontSize: 15,
              fontWeight: 500,
              fontStyle: 'italic',
              fontFamily: "'Georgia', serif",
              marginRight: 40,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 40,
            }}
          >
            {skill}
            <span style={{ color: '#d4a843', opacity: 0.5 }}>&#9679;</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}
