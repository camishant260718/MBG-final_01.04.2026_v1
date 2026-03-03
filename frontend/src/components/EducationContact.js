import React, { useState } from 'react';
import { GraduationCap, MapPin, Phone, Mail, Linkedin, BookOpen, Send, CheckCircle, User } from 'lucide-react';

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
    logo: null,
    name: 'Bachelor of Commerce',
    short: 'B.Com',
    credential: 'Bachelor of Commerce (B.Com)',
    type: 'Undergraduate Degree',
    iconOverride: BookOpen,
  },
];

// Duplicate for marquee (3× for seamless loop)
const credTrack = [...credentials, ...credentials, ...credentials];

const CredCard = ({ cred }) => {
  const [imgError, setImgError] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const IconOverride = cred.iconOverride;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1.25rem 2rem',
        backgroundColor: '#FFFFFF',
        border: '1px solid',
        borderColor: hovered ? '#C9A84C' : '#E8E4DC',
        borderRadius: '8px',
        boxShadow: hovered ? '0 6px 20px rgba(15,34,68,0.1)' : '0 1px 6px rgba(15,34,68,0.05)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.25s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        flexShrink: 0,
        minWidth: '300px',
        whiteSpace: 'nowrap',
        cursor: 'default',
      }}
    >
      {/* Icon circle */}
      <div style={{
        width: '52px', height: '52px',
        borderRadius: '50%',
        backgroundColor: hovered ? 'rgba(201,168,76,0.12)' : '#F5F2EA',
        border: '2px solid',
        borderColor: hovered ? 'rgba(201,168,76,0.4)' : '#E8E4DC',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        overflow: 'hidden',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}>
        {IconOverride ? (
          <IconOverride size={22} style={{ color: '#C9A84C' }} />
        ) : cred.logo && !imgError ? (
          <img
            src={cred.logo}
            alt={cred.name}
            style={{ width: '36px', height: '36px', objectFit: 'contain' }}
            onError={() => setImgError(true)}
          />
        ) : (
          <GraduationCap size={22} style={{ color: '#C9A84C' }} />
        )}
      </div>

      {/* Text */}
      <div>
        <span style={{
          display: 'inline-block',
          fontSize: '9.5px', fontWeight: '700',
          letterSpacing: '1.5px', textTransform: 'uppercase',
          color: '#C9A84C',
          border: '1px solid rgba(201,168,76,0.35)',
          borderRadius: '2px',
          padding: '2px 8px',
          marginBottom: '0.4rem',
          backgroundColor: 'rgba(201,168,76,0.06)',
        }}>
          {cred.type}
        </span>
        <div style={{ fontSize: '13.5px', fontWeight: '700', color: '#0F2244', lineHeight: '1.3' }}>
          {cred.name}
        </div>
        <div style={{ fontSize: '11.5px', color: '#6B7280', marginTop: '2px' }}>
          {cred.credential}
        </div>
      </div>
    </div>
  );
};

export const EducationSection = () => {
  return (
    <section id="education" style={{ backgroundColor: '#FAFAF7', padding: '5rem 0' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem', padding: '0 2rem' }}>
        <p style={{
          fontSize: '11px', fontWeight: '600', letterSpacing: '3px',
          textTransform: 'uppercase', color: '#C9A84C', margin: '0 0 0.75rem',
        }}>
          Credentials
        </p>
        <h2 style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
          fontWeight: '700', color: '#0F2244',
          margin: '0 0 1rem',
        }}>
          Education & Professional Credentials
        </h2>
        <div style={{ height: '2px', width: '60px', backgroundColor: '#C9A84C', margin: '0 auto' }} />
      </div>

      {/* Marquee wrapper */}
      <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
        {/* Left fade */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
          background: 'linear-gradient(to right, #FAFAF7 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
        {/* Right fade */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
          background: 'linear-gradient(to left, #FAFAF7 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        {/* Track */}
        <div
          className="edu-marquee-track"
          style={{
            display: 'flex',
            gap: '1.25rem',
            padding: '0.5rem 0 1rem',
            width: 'max-content',
            animation: 'eduMarquee 22s linear infinite',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {credTrack.map((cred, i) => (
            <CredCard key={`${cred.short}-${i}`} cred={cred} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes eduMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .edu-marquee-track:hover { animation-play-state: paused !important; }
      `}</style>
    </section>
  );
};

/* ─── Contact Section ────────────────────────────────────────────────────── */

export const ContactSection = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', location: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const contactItems = [
    { icon: Phone, label: 'Phone', value: '+971 52 507 6563', href: 'tel:+971525076563' },
    { icon: Mail, label: 'Email', value: 'mishant.gandhi@gmail.com', href: 'mailto:mishant.gandhi@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Dubai, United Arab Emirates', href: null },
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
      <div style={{ position: 'absolute', top: '-30%', right: '-6%', width: '480px', height: '480px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.07)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-20%', left: '-4%', width: '340px', height: '340px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.05)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', margin: '0 0 0.75rem' }}>
            Get In Touch
          </p>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
            fontWeight: '700', color: '#FFFFFF', margin: '0 0 1rem',
          }}>
            Let's Connect
          </h2>
          <div style={{ height: '2px', width: '60px', backgroundColor: '#C9A84C', margin: '0 auto' }} />
        </div>

        {/* Two-column layout */}
        <div
          className="connect-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'start' }}
        >
          {/* ── LEFT: Mishant's Info ───────────────────────────────────── */}
          <div>
            {/* Identity card */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '10px',
              padding: '2rem',
              marginBottom: '1.25rem',
            }}>
              {/* Avatar / monogram */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '64px', height: '64px',
                  border: '2px solid #C9A84C',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', fontWeight: '700', color: '#C9A84C',
                  backgroundColor: 'rgba(201,168,76,0.08)',
                  flexShrink: 0,
                }}>
                  MG
                </div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#FFFFFF', lineHeight: '1.2' }}>
                    Mishant Gandhi
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#C9A84C', marginTop: '3px', fontWeight: '500' }}>
                    CA · Finance Leader · Dubai, UAE
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: 'rgba(201,168,76,0.15)', marginBottom: '1.5rem' }} />

              {/* Contact details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {contactItems.map((item, i) => {
                  const Icon = item.icon;
                  const Tag = item.href ? 'a' : 'div';
                  return (
                    <Tag
                      key={i}
                      href={item.href || undefined}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.875rem',
                        textDecoration: 'none', cursor: item.href ? 'pointer' : 'default',
                      }}
                    >
                      <div style={{
                        width: '36px', height: '36px',
                        backgroundColor: 'rgba(201,168,76,0.1)',
                        borderRadius: '6px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Icon size={16} style={{ color: '#C9A84C' }} />
                      </div>
                      <div>
                        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1px' }}>
                          {item.label}
                        </div>
                        <div style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: '500' }}>
                          {item.value}
                        </div>
                      </div>
                    </Tag>
                  );
                })}
              </div>
            </div>

            {/* LinkedIn button */}
            <a
              href="https://www.linkedin.com/in/camishant-0525076563"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                width: '100%',
                padding: '1rem',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#FFFFFF',
                fontSize: '13.5px',
                fontWeight: '600',
                letterSpacing: '0.3px',
                transition: 'background-color 0.3s ease, border-color 0.3s ease, transform 0.2s ease',
                boxSizing: 'border-box',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.12)';
                e.currentTarget.style.borderColor = '#C9A84C';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Linkedin size={18} style={{ color: '#C9A84C' }} />
              Connect on LinkedIn
            </a>
          </div>

          {/* ── RIGHT: Contact Form ────────────────────────────────────── */}
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '10px',
            padding: '2rem',
          }}>
            {submitted ? (
              /* Success state */
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{
                  width: '72px', height: '72px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(201,168,76,0.12)',
                  border: '2px solid #C9A84C',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}>
                  <CheckCircle size={32} style={{ color: '#C9A84C' }} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 0.75rem' }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', margin: '0 0 1.5rem' }}>
                  Thank you for reaching out. Mishant will get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', location: '' }); }}
                  style={{
                    backgroundColor: 'transparent',
                    border: '1.5px solid rgba(201,168,76,0.5)',
                    color: '#C9A84C',
                    padding: '10px 28px',
                    borderRadius: '4px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontFamily: "'Poppins', sans-serif",
                    transition: 'background-color 0.3s ease, border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.1)';
                    e.currentTarget.style.borderColor = '#C9A84C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)';
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 0.4rem' }}>
                    Send a Message
                  </h3>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: '1.5' }}>
                    Fill out the form and I'll be in touch soon.
                  </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      style={{
                        width: '100%', boxSizing: 'border-box',
                        padding: '12px 14px',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        border: `1px solid ${errors.name ? '#e05c5c' : 'rgba(201,168,76,0.2)'}`,
                        borderRadius: '6px',
                        color: '#FFFFFF',
                        fontSize: '13.5px',
                        fontFamily: "'Poppins', sans-serif",
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#C9A84C')}
                      onBlur={(e) => (e.target.style.borderColor = errors.name ? '#e05c5c' : 'rgba(201,168,76,0.2)')}
                    />
                    {errors.name && <div style={{ fontSize: '11.5px', color: '#e05c5c', marginTop: '4px' }}>{errors.name}</div>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+971 XX XXX XXXX"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      style={{
                        width: '100%', boxSizing: 'border-box',
                        padding: '12px 14px',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(201,168,76,0.2)',
                        borderRadius: '6px',
                        color: '#FFFFFF',
                        fontSize: '13.5px',
                        fontFamily: "'Poppins', sans-serif",
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#C9A84C')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.2)')}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      style={{
                        width: '100%', boxSizing: 'border-box',
                        padding: '12px 14px',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        border: `1px solid ${errors.email ? '#e05c5c' : 'rgba(201,168,76,0.2)'}`,
                        borderRadius: '6px',
                        color: '#FFFFFF',
                        fontSize: '13.5px',
                        fontFamily: "'Poppins', sans-serif",
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#C9A84C')}
                      onBlur={(e) => (e.target.style.borderColor = errors.email ? '#e05c5c' : 'rgba(201,168,76,0.2)')}
                    />
                    {errors.email && <div style={{ fontSize: '11.5px', color: '#e05c5c', marginTop: '4px' }}>{errors.email}</div>}
                  </div>

                  {/* Location */}
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                      Your Location
                    </label>
                    <input
                      type="text"
                      placeholder="City, Country"
                      value={form.location}
                      onChange={(e) => handleChange('location', e.target.value)}
                      style={{
                        width: '100%', boxSizing: 'border-box',
                        padding: '12px 14px',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(201,168,76,0.2)',
                        borderRadius: '6px',
                        color: '#FFFFFF',
                        fontSize: '13.5px',
                        fontFamily: "'Poppins', sans-serif",
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#C9A84C')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.2)')}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    style={{
                      marginTop: '0.25rem',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.625rem',
                      padding: '13px',
                      backgroundColor: '#C9A84C',
                      border: 'none',
                      borderRadius: '6px',
                      color: '#0F2244',
                      fontSize: '13.5px',
                      fontWeight: '700',
                      letterSpacing: '0.5px',
                      cursor: 'pointer',
                      fontFamily: "'Poppins', sans-serif",
                      transition: 'background-color 0.3s ease, transform 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#B8963E';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#C9A84C';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Send size={15} />
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .connect-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder { color: rgba(255,255,255,0.25) !important; }
      `}</style>
    </section>
  );
};
