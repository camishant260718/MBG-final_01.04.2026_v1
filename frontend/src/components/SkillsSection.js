import React from 'react';
import { BarChart3, FileText, Building2, Calculator, Shield, TrendingUp, FileCheck, Receipt } from 'lucide-react';

const skills = [
  { icon: BarChart3, name: 'Financial Reporting', pct: 95 },
  { icon: FileText, name: 'IFRS Standards', pct: 92 },
  { icon: Building2, name: 'Group Consolidation', pct: 90 },
  { icon: Shield, name: 'Audit & Assurance', pct: 93 },
  { icon: Calculator, name: 'Tax Advisory', pct: 88 },
  { icon: TrendingUp, name: 'Financial Analysis', pct: 90 },
  { icon: FileCheck, name: 'ICV Audit', pct: 85 },
  { icon: Receipt, name: 'VAT Tax', pct: 87 },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      style={{
        backgroundColor: '#fff',
        padding: '80px 60px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 2,
            color: '#888',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}
        >
          My Expertise
        </p>
        <h2
          data-testid="skills-heading"
          style={{ fontSize: 32, fontWeight: 700, color: '#1a1a1a' }}
        >
          Skills & Competencies
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }}
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              data-testid={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                backgroundColor: '#f9f8f6',
                borderRadius: 12,
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,53,84,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  backgroundColor: '#003554',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon size={24} color="#d4a843" />
              </div>
              <span style={{ fontSize: 15, fontWeight: 600, color: '#1a1a1a', textAlign: 'center' }}>
                {skill.name}
              </span>
              <div style={{ width: '100%', marginTop: 'auto' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 6,
                  }}
                >
                  <span style={{ fontSize: 11, color: '#999' }}>Proficiency</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#003554' }}>
                    {skill.pct}%
                  </span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: 6,
                    backgroundColor: '#e5e5e5',
                    borderRadius: 3,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${skill.pct}%`,
                      height: '100%',
                      backgroundColor: '#003554',
                      borderRadius: 3,
                      transition: 'width 1s ease-out',
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
