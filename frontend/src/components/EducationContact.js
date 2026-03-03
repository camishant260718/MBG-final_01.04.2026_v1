import React from 'react';
import { GraduationCap, MapPin, Phone, Mail, Linkedin } from 'lucide-react';

/* ─── Education Section ─────────────────────────────────────────────────── */

const credentials = [
  {
    logo: 'https://logo.clearbit.com/icai.org',
    name: 'The Institute of Chartered Accountants of India',
    short: 'ICAI',
    credential: 'Chartered Accountant (CA)',
    type: 'Professional Qualification',
  },
  {
    logo: 'https://logo.clearbit.com/icsi.edu',
    name: 'The Institute of Company Secretaries of India',
    short: 'ICSI',
    credential: 'Company Secretary (CS)',
    type: 'Professional Qualification',
  },
  {
    logo: 'https://logo.clearbit.com/coursera.org',
    name: 'Coursera & LinkedIn Learning',
    short: 'C/LL',
    credential: 'Forensic Accounting · Financial Modelling · Leadership · IFRS',
    type: 'Online Certifications',
  },
];

const CredentialCard = ({ cred }) => {
  const [imgError, setImgError] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid',
        borderColor: hovered ? '#C9A84C' : '#E8E4DC',
        borderRadius: '8px',
        padding: '2.25rem 1.75rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: hovered ? '0 10px 30px rgba(15,34,68,0.1)' : '0 2px 10px rgba(15,34,68,0.05)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
      }}
    >
      {/* Logo circle */}
      <div
        style={{
          width: '76px',
          height: '76px',
          borderRadius: '50%',
          backgroundColor: '#F5F2EA',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          overflow: 'hidden',
          border: '2px solid #E8E4DC',
        }}
      >
        {cred.logo && !imgError ? (
          <img
            src={cred.logo}
            alt={cred.name}
            style={{ width: '50px', height: '50px', objectFit: 'contain' }}
            onError={() => setImgError(true)}
          />
        ) : (
          <GraduationCap size={28} style={{ color: '#C9A84C' }} />
        )}
      </div>

      {/* Type badge */}
      <span
        style={{
          fontSize: '10px',
          fontWeight: '600',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: '#C9A84C',
          backgroundColor: 'rgba(201,168,76,0.08)',
          border: '1px solid rgba(201,168,76,0.3)',
          borderRadius: '2px',
          padding: '3px 10px',
          marginBottom: '0.875rem',
          display: 'inline-block',
        }}
      >
        {cred.type}
      </span>

      <h3
        style={{
          fontSize: '14.5px',
          fontWeight: '700',
          color: '#0F2244',
          margin: '0 0 0.5rem',
          lineHeight: '1.35',
        }}
      >
        {cred.name}
      </h3>
      <p
        style={{
          fontSize: '12.5px',
          color: '#6B7280',
          margin: 0,
          lineHeight: '1.7',
        }}
      >
        {cred.credential}
      </p>
    </div>
  );
};

export const EducationSection = () => {
  return (
    <section
      id="education"
      style={{ backgroundColor: '#FAFAF7', padding: '6rem 2rem' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p
            style={{
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#C9A84C',
              margin: '0 0 0.75rem',
            }}
          >
            Credentials
          </p>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: '700',
              color: '#0F2244',
              margin: '0 0 1rem',
            }}
          >
            Education & Professional Credentials
          </h2>
          <div style={{ height: '2px', width: '60px', backgroundColor: '#C9A84C', margin: '0 auto' }} />
        </div>

        <div
          className="cred-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
        >
          {credentials.map((cred, i) => (
            <CredentialCard key={i} cred={cred} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cred-grid { grid-template-columns: 1fr !important; max-width: 420px; margin: 0 auto; }
        }
        @media (max-width: 900px) {
          .cred-grid { max-width: 100%; }
        }
      `}</style>
    </section>
  );
};

/* ─── Contact Section ────────────────────────────────────────────────────── */

export const ContactSection = () => {
  const contactItems = [
    { icon: MapPin, label: 'Location', value: 'Dubai, United Arab Emirates', href: null },
    { icon: Phone, label: 'Phone', value: '+971 52 507 6563', href: 'tel:+971525076563' },
    { icon: Mail, label: 'Email', value: 'mishant.gandhi@gmail.com', href: 'mailto:mishant.gandhi@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/camishant-0525076563', href: 'https://www.linkedin.com/in/camishant-0525076563' },
  ];

  return (
    <section
      id="connect"
      style={{
        backgroundColor: '#0F2244',
        padding: '7rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative rings */}
      <div style={{ position: 'absolute', top: '-40%', right: '-8%', width: '520px', height: '520px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.08)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-25%', left: '-6%', width: '380px', height: '380px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.06)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', margin: '0 0 0.75rem' }}>
          Get In Touch
        </p>
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
            fontWeight: '700',
            color: '#FFFFFF',
            margin: '0 0 1rem',
          }}
        >
          Let's Connect
        </h2>
        <div style={{ height: '2px', width: '60px', backgroundColor: '#C9A84C', margin: '0 auto 2.5rem' }} />
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '3rem' }}>
          Whether you're looking for a strategic finance leader, a collaborative partner, or simply want to exchange ideas — I'd be glad to connect.
        </p>

        {/* Contact cards grid */}
        <div
          className="contact-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}
        >
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            const Tag = item.href ? 'a' : 'div';
            return (
              <Tag
                key={i}
                href={item.href || undefined}
                target={item.href && item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href && item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease, border-color 0.3s ease, transform 0.25s ease',
                  cursor: item.href ? 'pointer' : 'default',
                }}
                onMouseEnter={(e) => {
                  if (item.href) {
                    e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.1)';
                    e.currentTarget.style.borderColor = '#C9A84C';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    backgroundColor: 'rgba(201,168,76,0.12)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} style={{ color: '#C9A84C' }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.4', wordBreak: 'break-word' }}>
                    {item.value}
                  </div>
                </div>
              </Tag>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
