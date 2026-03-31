import React from 'react';

const areas = [
  {
    num: '01',
    title: 'Financial Control',
    desc: 'Bringing discipline to financial systems — establishing strong controls, governance, and reporting frameworks to ensure accuracy, compliance, and reliability.',
  },
  {
    num: '02',
    title: 'Group Consolidation',
    desc: 'Managing complexity with structure — overseeing multi-entity financials, intercompany reconciliations, and group reporting with clarity and consistency.',
  },
  {
    num: '03',
    title: 'Performance & Planning',
    desc: 'Driving business decisions with insight — building budgets, forecasts, and performance analysis that enable management to act with confidence.',
  },
  {
    num: '04',
    title: 'Process & Transformation',
    desc: 'Designing finance that scales — improving systems, automating workflows, and strengthening processes to create efficient and future-ready finance functions.',
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      data-testid="about-section"
      style={{
        backgroundColor: '#efece6',
        padding: '80px 60px',
        display: 'flex',
        gap: 60,
      }}
    >
      <div style={{ flex: 1, maxWidth: 480 }}>
        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 2,
            color: '#888',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          About Mishant
        </p>
        <h2
          data-testid="about-heading"
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: '#1a1a1a',
            lineHeight: 1.3,
            marginBottom: 24,
          }}
        >
          I am a finance professional driven by clarity, precision, and impact.
        </h2>
        <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 16 }}>
          With over a decade of experience in IFRS, financial consolidation, and reporting, I bring
          structure to complex financial environments.
        </p>
        <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 16 }}>
          I translate data into clear, decision-ready insights that support business strategy and
          performance.
        </p>
        <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 32 }}>
          My approach is collaborative — partnering with stakeholders to turn numbers into meaningful
          outcomes.
        </p>
        <p style={{ fontSize: 13, color: '#aaa', borderTop: '1px solid #ccc', paddingTop: 16 }}>
          Scroll to explore
        </p>
      </div>

      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 1,
          backgroundColor: '#ddd',
        }}
      >
        {areas.map((area) => (
          <div
            key={area.num}
            data-testid={`about-area-${area.num}`}
            style={{
              backgroundColor: '#efece6',
              padding: 32,
            }}
          >
            <span
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#d4a843',
                display: 'block',
                marginBottom: 12,
              }}
            >
              {area.num}
            </span>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: '#1a1a1a',
                marginBottom: 10,
              }}
            >
              {area.title}
            </h3>
            <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{area.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
