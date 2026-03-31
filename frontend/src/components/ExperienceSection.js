import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experienceData = [
  {
    role: 'Group Financial Controller',
    company: 'Leading Investment Group — Dubai, UAE',
    period: '2021 — Present',
    points: [
      'Lead IFRS-compliant financial reporting for a multi-entity group across multiple jurisdictions.',
      'Oversee group consolidation, intercompany eliminations, and board-level financial reporting.',
      'Drive process automation, system implementations, and internal controls framework.',
    ],
  },
  {
    role: 'Senior Finance Manager',
    company: 'Multinational FMCG Corporation — Dubai, UAE',
    period: '2018 — 2021',
    points: [
      'Managed end-to-end financial operations including budgeting, forecasting, and variance analysis.',
      'Implemented ERP system upgrades and streamlined month-end close processes.',
      'Supported strategic decision-making with performance dashboards and KPI tracking.',
    ],
  },
  {
    role: 'Audit Senior / Assistant Manager',
    company: 'Deloitte & PwC — India',
    period: '2013 — 2018',
    points: [
      'Conducted statutory and internal audits for listed companies across diverse industries.',
      'Led engagement teams, managed client relationships, and ensured compliance with auditing standards.',
      'Gained deep expertise in IFRS, Indian GAAP, and risk-based audit methodologies.',
    ],
  },
];

const educationData = [
  {
    icon: Award,
    title: 'Chartered Accountant (CA)',
    institution: 'The Institute of Chartered Accountants of India',
  },
  {
    icon: Award,
    title: 'Company Secretary (CS)',
    institution: 'The Institute of Company Secretaries of India',
  },
  {
    icon: GraduationCap,
    title: 'Bachelor of Commerce (B.Com.)',
    institution: 'S. P. B. English Medium College of Commerce',
    extra: 'Graduated with Management Accounting and Auditing',
  },
];

export default function ExperienceSection() {
  const [tab, setTab] = useState('experience');

  return (
    <section
      id="experience"
      data-testid="experience-section"
      style={{
        backgroundColor: '#f5f1ed',
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
          Career
        </p>
        <h2
          data-testid="experience-heading"
          style={{ fontSize: 32, fontWeight: 700, color: '#1a1a1a', marginBottom: 24 }}
        >
          Experience & Education
        </h2>

        <div
          style={{
            display: 'inline-flex',
            backgroundColor: '#e8e4de',
            borderRadius: 8,
            padding: 4,
          }}
        >
          <button
            data-testid="tab-experience"
            onClick={() => setTab('experience')}
            style={{
              padding: '10px 28px',
              borderRadius: 6,
              border: 'none',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: "'Poppins', sans-serif",
              backgroundColor: tab === 'experience' ? '#003554' : 'transparent',
              color: tab === 'experience' ? '#fff' : '#666',
              transition: 'all 0.3s',
            }}
          >
            <Briefcase size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
            Experience
          </button>
          <button
            data-testid="tab-education"
            onClick={() => setTab('education')}
            style={{
              padding: '10px 28px',
              borderRadius: 6,
              border: 'none',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: "'Poppins', sans-serif",
              backgroundColor: tab === 'education' ? '#003554' : 'transparent',
              color: tab === 'education' ? '#fff' : '#666',
              transition: 'all 0.3s',
            }}
          >
            <GraduationCap size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
            Education
          </button>
        </div>
      </div>

      {tab === 'experience' && (
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 28 }}>
          {experienceData.map((exp) => (
            <div
              key={exp.role}
              data-testid={`exp-card-${exp.role.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                backgroundColor: '#fff',
                borderRadius: 12,
                padding: '28px 32px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 12,
                }}
              >
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#003554', marginBottom: 4 }}>
                    {exp.role}
                  </h3>
                  <p style={{ fontSize: 14, color: '#888' }}>{exp.company}</p>
                </div>
                <span
                  style={{
                    fontSize: 13,
                    color: '#d4a843',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {exp.period}
                </span>
              </div>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                {exp.points.map((pt, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: 14,
                      color: '#555',
                      lineHeight: 1.7,
                      marginBottom: 6,
                    }}
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {tab === 'education' && (
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <h3 style={{ fontSize: 24, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
              Qualifications & Certifications
            </h3>
            <p style={{ fontSize: 14, color: '#888', maxWidth: 500, margin: '0 auto' }}>
              Strong academic foundation with professional certifications and continuous learning in
              finance, technology, and leadership.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center' }}>
            {educationData.map((ed) => {
              const Icon = ed.icon;
              return (
                <div
                  key={ed.title}
                  data-testid={`edu-card-${ed.title.toLowerCase().replace(/[^a-z]/g, '-')}`}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 12,
                    padding: '32px 28px',
                    textAlign: 'center',
                    flex: 1,
                    maxWidth: 260,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
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
                      margin: '0 auto 16px',
                    }}
                  >
                    <Icon size={24} color="#d4a843" />
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 600, color: '#1a1a1a', marginBottom: 8 }}>
                    {ed.title}
                  </h4>
                  <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>
                    {ed.institution}
                  </p>
                  {ed.extra && (
                    <p style={{ fontSize: 12, color: '#aaa', marginTop: 6 }}>{ed.extra}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
