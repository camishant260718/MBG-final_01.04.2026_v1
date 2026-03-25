import React, { useState } from 'react';

const quadrants = [
  {
    num: '01',
    title: 'Financial Control',
    desc: 'Bringing discipline to financial systems (Establishing strong controls, governance, and reporting frameworks to ensure accuracy, compliance, and reliability).',
  },
  {
    num: '02',
    title: 'Group Consolidation',
    desc: 'Managing complexity with structure (Overseeing multi-entity financials, intercompany reconciliations, and group reporting with clarity and consistency).',
  },
  {
    num: '03',
    title: 'Performance & Planning',
    desc: 'Driving business decisions with insight (Building budgets, forecasts, and performance analysis that enable management to act with confidence).',
  },
  {
    num: '04',
    title: 'Process & Transformation',
    desc: 'Designing finance that scales (Improving systems, automating workflows, and strengthening processes to create efficient and future-ready finance functions).',
  },
];

const QuadrantCard = ({ item, position }) => {
  const [hovered, setHovered] = useState(false);

  const isTop = position < 2;
  const isLeft = position % 2 === 0;

  return (
    <div
      data-testid={`quadrant-${item.num}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '2rem 1.75rem',
        borderBottom: isTop ? '1px solid rgba(27,58,92,0.15)' : 'none',
        borderRight: isLeft ? '1px solid rgba(27,58,92,0.15)' : 'none',
        backgroundColor: hovered ? 'rgba(27,58,92,0.08)' : 'transparent',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        boxShadow: hovered ? '0 8px 30px rgba(27,58,92,0.12)' : 'none',
        transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        position: 'relative',
        zIndex: hovered ? 2 : 1,
      }}
    >
      <span
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          fontSize: '28px',
          fontWeight: '500',
          color: '#1B3A5C',
          display: 'block',
          marginBottom: '0.75rem',
          opacity: 0.7,
        }}
      >
        {item.num}
      </span>
      <h3
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '17px',
          fontWeight: '700',
          color: '#1B3A5C',
          margin: '0 0 1rem',
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '13.5px',
          color: '#4A5568',
          lineHeight: '1.75',
          margin: 0,
        }}
      >
        {item.desc}
      </p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section
      id="about-me"
      data-testid="about-section"
      style={{ backgroundColor: '#DAE6EF', padding: '5rem 2rem' }}
    >
      <div
        className="about-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 0,
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        {/* LEFT: Intro text */}
        <div
          style={{
            padding: '3rem 3rem 3rem 2.5rem',
            borderRight: '1px solid rgba(27,58,92,0.15)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            {/* Section label */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '2rem',
              }}
            >
              <span
                style={{
                  width: '40px',
                  height: '2px',
                  backgroundColor: '#1B3A5C',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                  color: '#1B3A5C',
                }}
              >
                About Mishant
              </span>
            </div>

            {/* Main heading */}
            <h2
              data-testid="about-heading"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                fontWeight: '800',
                color: '#1B3A5C',
                lineHeight: '1.35',
                margin: '0 0 2rem',
                letterSpacing: '-0.3px',
              }}
            >
              I am a finance professional driven by clarity, precision, and impact.
            </h2>

            {/* Body paragraphs */}
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '15px',
                color: '#3A4A5C',
                lineHeight: '1.8',
                margin: '0 0 1.25rem',
              }}
            >
              With over a decade of experience in IFRS, financial consolidation, and
              reporting, I bring structure to complex financial environments.
            </p>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '15px',
                color: '#3A4A5C',
                lineHeight: '1.8',
                margin: '0 0 1.25rem',
              }}
            >
              I translate data into clear, decision-ready insights that support business
              strategy and performance.
            </p>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '15px',
                color: '#3A4A5C',
                lineHeight: '1.8',
                margin: '0 0 2rem',
              }}
            >
              My approach is collaborative, partnering with stakeholders
              to turn numbers into meaningful outcomes.
            </p>
          </div>

          {/* Scroll to explore */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '14px',
                fontWeight: '600',
                color: '#1B3A5C',
                letterSpacing: '0.3px',
              }}
            >
              ······· Scroll to explore
            </span>
          </div>
        </div>

        {/* RIGHT: 2x2 Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
          }}
        >
          {quadrants.map((item, i) => (
            <QuadrantCard key={item.num} item={item} position={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
