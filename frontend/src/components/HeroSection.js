import React from 'react';
import { Linkedin } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperience = () => {
    const el = document.getElementById('experience');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      style={{
        backgroundColor: '#f5f1ed',
        minHeight: '100vh',
        paddingTop: 64,
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          flex: 1,
          padding: '80px 60px 0',
          maxWidth: 680,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            fontSize: 14,
            color: '#666',
            fontWeight: 400,
            marginBottom: 12,
            fontStyle: 'italic',
          }}
        >
          Welcome to my profile!
        </p>

        <h1
          data-testid="hero-title"
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: '#1a1a1a',
            lineHeight: 1.15,
            marginBottom: 8,
          }}
        >
          Hello, I'm{' '}
          <span
            style={{
              display: 'inline-block',
              borderBottom: '3px solid #d4a843',
              paddingBottom: 2,
            }}
          >
            Mishant.
          </span>
        </h1>

        <div style={{ display: 'flex', gap: 12, margin: '16px 0 24px' }}>
          <span
            style={{
              backgroundColor: '#003554',
              color: '#fff',
              padding: '8px 20px',
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            Chartered Accountant
          </span>
          <span
            style={{
              backgroundColor: '#003554',
              color: '#fff',
              padding: '8px 20px',
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            Company Secretary
          </span>
        </div>

        <p
          style={{
            fontSize: 15,
            color: '#444',
            lineHeight: 1.75,
            marginBottom: 32,
            maxWidth: 540,
          }}
        >
          A Senior Finance Professional with over a decade of experience across IFRS reporting,
          financial consolidation, and strategic analysis. Specializing in building structured
          financial frameworks for multinational organizations. Former auditor at{' '}
          <strong>Deloitte</strong> and <strong>PwC</strong>, now driving financial excellence in
          Dubai, UAE.
        </p>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 40 }}>
          <button
            data-testid="send-message-btn"
            onClick={scrollToContact}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              backgroundColor: '#003554',
              color: '#fff',
              border: 'none',
              padding: '12px 28px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: "'Poppins', sans-serif",
              transition: 'transform 0.2s',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                animation: 'pulse-green 2s infinite',
              }}
            />
            SEND A MESSAGE
          </button>
          <button
            data-testid="explore-work-btn"
            onClick={scrollToExperience}
            style={{
              backgroundColor: 'transparent',
              color: '#003554',
              border: '2px solid #003554',
              padding: '12px 28px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: "'Poppins', sans-serif",
              transition: 'all 0.2s',
            }}
          >
            Explore My Work
          </button>
        </div>

        <div
          data-testid="hero-stats"
          style={{
            display: 'flex',
            gap: 40,
            alignItems: 'center',
            paddingTop: 20,
            borderTop: '1px solid rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Linkedin size={18} color="#0077b5" />
            <div>
              <span style={{ fontWeight: 700, fontSize: 18, color: '#1a1a1a' }}>5,214</span>
              <span style={{ fontSize: 13, color: '#666', marginLeft: 6 }}>Followers</span>
            </div>
          </div>
          <div>
            <span style={{ fontWeight: 700, fontSize: 18, color: '#1a1a1a' }}>5,000+</span>
            <span style={{ fontSize: 13, color: '#666', marginLeft: 6 }}>Connections</span>
          </div>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <img
          data-testid="hero-photo"
          src="/mishant-photo.png"
          alt="Mishant Gandhi"
          style={{
            height: '85vh',
            maxHeight: 650,
            objectFit: 'contain',
            objectPosition: 'bottom',
            filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.15))',
          }}
        />
      </div>

      <style>{`
        @keyframes pulse-green {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}
