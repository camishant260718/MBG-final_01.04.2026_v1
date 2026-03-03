import React, { useState } from 'react';
import { GraduationCap, MapPin, Phone, Mail, Linkedin, BookOpen, User, CheckCircle, MessageSquare } from 'lucide-react';

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
  const [form, setForm] = useState({ name: '', phone: '', email: '', location: '', message: '' });
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

  const inputBase = {
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1.5px solid rgba(255,255,255,0.2)',
    padding: '10px 0 10px 28px',
    fontSize: '14px',
    fontFamily: "'Poppins', sans-serif",
    color: '#FFFFFF',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

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
      {/* Decorative top-left ellipse accent matching cursor style */}
      <div style={{
        position: 'absolute', top: '3rem', left: '2rem',
        width: '60px', height: '60px',
        borderRadius: '50%', border: '2px solid #0F2244',
        opacity: 0.12, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '3.75rem', left: '2.75rem',
        width: '12px', height: '12px', borderRadius: '50%',
        backgroundColor: '#E87340', opacity: 0.25, pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div
          className="connect-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 2.2fr', gap: '5rem', alignItems: 'start' }}
        >
          {/* ── LEFT: Info panel ───────────────────────────────────── */}
          <div>
            <p style={{
              fontSize: '11px', fontWeight: '700', letterSpacing: '3px',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: '0 0 1.25rem',
            }}>
              Contact Us
            </p>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: '800', color: '#FFFFFF',
              lineHeight: '1.1', margin: '0 0 2.5rem',
              letterSpacing: '-0.5px',
            }}>
              Let's<br />Connect
            </h2>

            {/* Name row (no subheading) */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.125rem' }}>
                Mishant Gandhi
              </div>
            </div>

            {/* Phone */}
            <div style={{ marginBottom: '0.5rem' }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '600', marginBottom: '4px' }}>
                Contact us
              </div>
              <a href="tel:+971525076563" style={{ fontSize: '15px', color: '#C9A84C', fontWeight: '500', textDecoration: 'none', display: 'block' }}>
                +971 52 507 6563
              </a>
            </div>
            <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', margin: '1.25rem 0' }} />

            {/* Email */}
            <div style={{ marginBottom: '0.5rem' }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '600', marginBottom: '4px' }}>
                Email
              </div>
              <a href="mailto:mishant.gandhi@gmail.com" style={{ fontSize: '14.5px', color: '#C9A84C', fontWeight: '500', textDecoration: 'none', display: 'block' }}>
                mishant.gandhi@gmail.com
              </a>
            </div>
            <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', margin: '1.25rem 0' }} />

            {/* Social */}
            <div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '600', marginBottom: '0.875rem' }}>
                Follow us
              </div>
              <a
                href="https://www.linkedin.com/in/camishant-0525076563"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  color: '#FFFFFF', textDecoration: 'none',
                  fontSize: '13px', fontWeight: '600',
                  padding: '8px 16px',
                  border: '1.5px solid rgba(201,168,76,0.4)',
                  borderRadius: '4px',
                  transition: 'background-color 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.12)';
                  e.currentTarget.style.borderColor = '#C9A84C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
                }}
              >
                <Linkedin size={15} style={{ color: '#C9A84C' }} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* ── RIGHT: Form ────────────────────────────────────────── */}
          <div style={{ paddingTop: '3.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  border: '2px solid #C9A84C',
                  backgroundColor: 'rgba(201,168,76,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}>
                  <CheckCircle size={32} style={{ color: '#C9A84C' }} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0F2244', margin: '0 0 0.75rem' }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.7', margin: '0 0 2rem' }}>
                  Thank you for reaching out. Mishant will get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', location: '', message: '' }); }}
                  style={{
                    backgroundColor: '#0F2244', color: '#FFFFFF',
                    border: 'none', padding: '12px 32px',
                    borderRadius: '50px', fontSize: '13.5px',
                    fontWeight: '600', cursor: 'pointer',
                    fontFamily: "'Poppins', sans-serif",
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#C9A84C')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0F2244')}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Full Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: '600', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>
                    Full Name
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={14} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.35)' }} />
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      style={{ ...inputBase, borderBottomColor: errors.name ? '#e05c5c' : '#D1CCC0' }}
                      onFocus={(e) => (e.target.style.borderBottomColor = '#C9A84C')}
                      onBlur={(e) => (e.target.style.borderBottomColor = errors.name ? '#e05c5c' : '#D1CCC0')}
                    />
                  </div>
                  {errors.name && <div style={{ fontSize: '11.5px', color: '#e05c5c', marginTop: '4px' }}>{errors.name}</div>}
                </div>

                {/* Email + Phone row */}
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13.5px', fontWeight: '600', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>
                      Email
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Mail size={14} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.35)' }} />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        style={{ ...inputBase, borderBottomColor: errors.email ? '#e05c5c' : '#D1CCC0' }}
                        onFocus={(e) => (e.target.style.borderBottomColor = '#C9A84C')}
                        onBlur={(e) => (e.target.style.borderBottomColor = errors.email ? '#e05c5c' : '#D1CCC0')}
                      />
                    </div>
                    {errors.email && <div style={{ fontSize: '11.5px', color: '#e05c5c', marginTop: '4px' }}>{errors.email}</div>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13.5px', fontWeight: '600', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>
                      Phone
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Phone size={14} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.35)' }} />
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        style={inputBase}
                        onFocus={(e) => (e.target.style.borderBottomColor = '#C9A84C')}
                        onBlur={(e) => (e.target.style.borderBottomColor = '#D1CCC0')}
                      />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: '600', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>
                    Your Location
                  </label>
                  <div style={{ position: 'relative' }}>
                    <MapPin size={14} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.35)' }} />
                    <input
                      type="text"
                      placeholder="City, Country"
                      value={form.location}
                      onChange={(e) => handleChange('location', e.target.value)}
                      style={inputBase}
                      onFocus={(e) => (e.target.style.borderBottomColor = '#C9A84C')}
                      onBlur={(e) => (e.target.style.borderBottomColor = '#D1CCC0')}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: '600', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>
                    Send Message
                  </label>
                  <div style={{ position: 'relative' }}>
                    <MessageSquare size={14} style={{ position: 'absolute', left: 0, top: '14px', color: 'rgba(255,255,255,0.35)' }} />
                    <textarea
                      placeholder="Enter your message..."
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={4}
                      style={{
                        ...inputBase,
                        resize: 'vertical',
                        minHeight: '100px',
                        paddingTop: '10px',
                        borderBottom: '1.5px solid #D1CCC0',
                      }}
                      onFocus={(e) => (e.target.style.borderBottomColor = '#C9A84C')}
                      onBlur={(e) => (e.target.style.borderBottomColor = '#D1CCC0')}
                    />
                  </div>
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#C9A84C',
                      color: '#0F2244',
                      border: 'none',
                      padding: '14px 48px',
                      borderRadius: '50px',
                      fontSize: '14px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      fontFamily: "'Poppins', sans-serif",
                      letterSpacing: '0.3px',
                      transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
                      boxShadow: '0 4px 14px rgba(201,168,76,0.3)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#B8963E';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(201,168,76,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#C9A84C';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(201,168,76,0.3)';
                    }}
                  >
                    Submit Now
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .connect-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: #B0AAA0 !important; }
        textarea { font-family: 'Poppins', sans-serif !important; }
      `}</style>
    </section>
  );
};
