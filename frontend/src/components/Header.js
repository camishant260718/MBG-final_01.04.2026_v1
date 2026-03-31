import React, { useState, useEffect } from 'react';

const navLinks = ['Home', 'About', 'Skills', 'Experience', "Let's Collaborate"];

export default function Header() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (section) => {
    setActive(section);
    const map = {
      Home: 'hero',
      About: 'about',
      Skills: 'skills',
      Experience: 'experience',
      "Let's Collaborate": 'contact',
    };
    const el = document.getElementById(map[section]);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      data-testid="header-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#003554',
        padding: '0 48px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'box-shadow 0.3s',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: '#22c55e',
            animation: 'pulse-green 2s infinite',
            display: 'inline-block',
          }}
        />
        <span
          data-testid="header-name"
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 600,
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: 0.5,
          }}
        >
          Mishant Gandhi
        </span>
      </div>

      <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {navLinks.map((link) => (
          <button
            key={link}
            data-testid={`nav-${link.toLowerCase().replace(/[^a-z]/g, '-')}`}
            onClick={() => scrollTo(link)}
            style={{
              background: 'none',
              border: 'none',
              color: active === link ? '#fff' : 'rgba(255,255,255,0.7)',
              fontSize: 14,
              fontWeight: active === link ? 600 : 400,
              cursor: 'pointer',
              fontFamily: "'Poppins', sans-serif",
              padding: '4px 0',
              borderBottom: active === link ? '2px solid #d4a843' : '2px solid transparent',
              transition: 'all 0.3s',
            }}
          >
            {link}
          </button>
        ))}
      </nav>

      <style>{`
        @keyframes pulse-green {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
      `}</style>
    </header>
  );
}
