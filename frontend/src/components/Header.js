import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about-me' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
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
          backgroundColor: '#1B3A5C',
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
          {/* Left: Green dot + Name */}
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
              }}
            />
            <span
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: '22px',
                fontWeight: '700',
                color: '#FFFFFF',
                letterSpacing: '0.5px',
              }}
            >
              Mishant Gandhi
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                data-testid={`nav-${link.label.toLowerCase()}`}
                style={{
                  textDecoration: 'none',
                  color: 'rgba(255,255,255,0.85)',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '14px',
                  fontWeight: '400',
                  letterSpacing: '0.3px',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#connect"
              onClick={(e) => scrollTo(e, '#connect')}
              data-testid="nav-lets-collaborate"
              style={{
                textDecoration: 'none',
                color: '#FFFFFF',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '0.3px',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F0C94B')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
            >
              Let's collaborate
            </a>
          </nav>

          {/* Mobile toggle */}
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

      {/* Mobile full-screen overlay nav */}
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
            backgroundColor: '#1B3A5C',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            animation: 'fadeInNav 0.3s ease',
          }}
        >
          {/* Close button at top right */}
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
                color: '#FFFFFF',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '24px',
                fontWeight: '500',
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
              color: '#F0C94B',
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
