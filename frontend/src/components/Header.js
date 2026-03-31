import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['connect', 'experience', 'skills', 'about-me', 'hero'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrolled, setActiveSection]);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about-me', id: 'about-me' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linkStyle = (id) => ({
    textDecoration: 'none',
    color: activeSection === id ? '#FFFFFF' : 'rgba(255,255,255,0.7)',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '14px',
    fontWeight: activeSection === id ? '600' : '400',
    letterSpacing: '0.3px',
    paddingBottom: '4px',
    borderBottom: activeSection === id ? '2px solid #B8860B' : '2px solid transparent',
    transition: 'color 0.3s ease, border-color 0.3s ease',
  });

  return (
    <>
      <header
        data-testid="main-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: '#003554',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.25)' : 'none',
          transition: 'box-shadow 0.4s ease',
          padding: '0 2rem',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '60px',
          }}
        >
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, '#hero')}
            data-testid="header-logo"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#4ADE80',
                display: 'inline-block',
                flexShrink: 0,
                animation: 'greenPulse 2s ease-in-out infinite',
              }}
            />
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '20px',
                fontWeight: '700',
                color: '#FFFFFF',
                letterSpacing: '0.5px',
              }}
            >
              Mishant Gandhi
            </span>
          </a>

          <nav className="desktop-nav" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                data-testid={`nav-${link.label.toLowerCase()}`}
                style={linkStyle(link.id)}
                onMouseEnter={(e) => {
                  if (activeSection !== link.id) e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.id) e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#connect"
              onClick={(e) => scrollTo(e, '#connect')}
              data-testid="nav-lets-collaborate"
              style={{
                ...linkStyle('connect'),
                fontWeight: activeSection === 'connect' ? '600' : '500',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#B8860B'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = activeSection === 'connect' ? '#FFFFFF' : '#FFFFFF'; }}
            >
              Let's collaborate
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            data-testid="mobile-menu-toggle"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#FFFFFF',
              padding: '4px',
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          data-testid="mobile-nav-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
            backgroundColor: '#003554',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            animation: 'fadeInNav 0.3s ease',
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            data-testid="mobile-menu-close"
            style={{
              position: 'absolute',
              top: '18px',
              right: '2rem',
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            <X size={28} />
          </button>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              style={{
                textDecoration: 'none',
                color: activeSection === link.id ? '#B8860B' : '#FFFFFF',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '24px',
                fontWeight: activeSection === link.id ? '700' : '500',
                letterSpacing: '0.5px',
                transition: 'color 0.3s ease',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#connect"
            onClick={(e) => scrollTo(e, '#connect')}
            style={{
              textDecoration: 'none',
              color: '#B8860B',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '24px',
              fontWeight: '600',
              letterSpacing: '0.5px',
            }}
          >
            Let's collaborate
          </a>
        </div>
      )}

      <style>{`
        @keyframes greenPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.6); }
          50% { box-shadow: 0 0 0 6px rgba(74,222,128,0); }
        }
        @keyframes fadeInNav {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Header;
