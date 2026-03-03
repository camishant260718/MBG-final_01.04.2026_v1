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
    { label: 'About', href: '#about-me' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#FFFFFF',
        boxShadow: scrolled ? '0 2px 20px rgba(15,34,68,0.1)' : '0 1px 0 rgba(15,34,68,0.08)',
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
          height: '72px',
        }}
      >
        {/* Left: MG Logo only */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="#about" onClick={(e) => scrollTo(e, '#about')} style={{ textDecoration: 'none' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                border: '2px solid #0F2244',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: '700',
                fontSize: '16px',
                color: '#0F2244',
                letterSpacing: '0.5px',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0F2244';
                e.currentTarget.style.color = '#C9A84C';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#0F2244';
              }}
            >
              MG
            </div>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              style={{
                textDecoration: 'none',
                color: '#4A5568',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '12.5px',
                fontWeight: '500',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0F2244')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4A5568')}
            >
              {link.label}
            </a>
          ))}

          {/* Let's Connect CTA */}
          <a
            href="#connect"
            onClick={(e) => scrollTo(e, '#connect')}
            style={{
              textDecoration: 'none',
              backgroundColor: '#0F2244',
              color: '#FFFFFF',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '12.5px',
              fontWeight: '700',
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              padding: '9px 22px',
              borderRadius: '3px',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#C9A84C';
              e.currentTarget.style.color = '#0F2244';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0F2244';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Let's Connect
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#0F2244',
            padding: '4px',
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #E8E4DC',
            padding: '1rem 2rem 1.5rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                textDecoration: 'none',
                color: '#0F2244',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '14px',
                fontWeight: '500',
                borderBottom: '1px solid #F0EDE6',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#connect"
            onClick={(e) => scrollTo(e, '#connect')}
            style={{
              display: 'block',
              marginTop: '1rem',
              padding: '0.75rem',
              textDecoration: 'none',
              backgroundColor: '#0F2244',
              color: '#FFFFFF',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '14px',
              fontWeight: '700',
              textAlign: 'center',
              borderRadius: '3px',
            }}
          >
            Let's Connect
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
