import React, { useState } from 'react';
import { Award, GraduationCap, BookOpen, Clock, MapPin, Phone, Mail, Linkedin, User, CheckCircle, MessageSquare } from 'lucide-react';

/* ─── Education Section ──────────────────────────────────────────── */

const credentials = [
  {
    Icon: Award,
    title: 'Chartered Accountant',
    institution: 'The Institute of Chartered Accountants of India',
    status: null,
  },
  {
    Icon: Award,
    title: 'Company Secretary',
    institution: 'The Institute of Company Secretaries of India',
    status: null,
  },
  {
    Icon: GraduationCap,
    title: 'Bachelor of Commerce',
    institution: 'S. P. B. English Medium College of Commerce',
    status: null,
  },
  {
    Icon: Clock,
    title: 'Association of Chartered Certified Accountants',
    institution: 'ACCA Global',
    status: 'Pursuing',
  },
];

export const EducationSection = () => (
  <section id="education" style={{ backgroundColor: '#FFFFFF', padding: '5rem 2rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#9CA3AF', margin: '0 0 1rem' }}>
          Education
        </p>
        <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '800', color: '#05668d', margin: '0 0 1rem', letterSpacing: '-0.3px' }}>
          Qualifications &amp; Certifications
        </h2>
        <p style={{ fontSize: '15px', color: '#6B7280', maxWidth: '620px', margin: '0 auto', lineHeight: '1.7' }}>
          Strong academic foundation with professional certifications and continuous learning in finance, technology, and leadership.
        </p>
      </div>

      {/* 4-card grid */}
      <div className="cred-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
        {credentials.map((cred, i) => {
          const Icon = cred.Icon;
          return (
            <div
              key={i}
              style={{
                backgroundColor: '#F4F5F8',
                borderRadius: '16px',
                padding: '2.25rem 1.5rem 2rem',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(15,34,68,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Navy circle icon */}
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%',
                backgroundColor: '#05668d',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 6px 20px rgba(15,34,68,0.25)',
              }}>
                <Icon size={32} style={{ color: '#679436' }} />
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#05668d', margin: '0 0 0.5rem', lineHeight: '1.35' }}>
                {cred.title}
              </h3>

              {/* Institution */}
              <p style={{ fontSize: '12.5px', color: '#6B7280', margin: '0', lineHeight: '1.5' }}>
                {cred.institution}
              </p>

              {/* Pursuing badge */}
              {cred.status && (
                <span style={{
                  marginTop: '0.875rem',
                  fontSize: '11px', fontWeight: '700',
                  letterSpacing: '1px', textTransform: 'uppercase',
                  color: '#679436',
                  backgroundColor: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  borderRadius: '20px', padding: '3px 12px',
                }}>
                  {cred.status}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>

    <style>{`
      @media (max-width: 1024px) { .cred-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      @media (max-width: 540px)  { .cred-grid { grid-template-columns: 1fr !important; } }
    `}</style>
  </section>
);

/* ─── Contact Section ────────────────────────────────────────────── */

export const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim())  errs.name  = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field, val) => {
    setForm(p => ({ ...p, [field]: val }));
    if (errors[field]) setErrors(p => ({ ...p, [field]: '' }));
  };

  const inputStyle = {
    width: '100%', boxSizing: 'border-box',
    padding: '13px 16px',
    border: '1.5px solid #E5E7EB',
    borderRadius: '10px',
    fontSize: '14px',
    fontFamily: "'Poppins', sans-serif",
    color: '#1A1A2E',
    outline: 'none',
    backgroundColor: '#FFFFFF',
    transition: 'border-color 0.25s ease',
  };

  return (
    <section id="connect" style={{ backgroundColor: '#ebf2fa', padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}>
      {/* Cursor-style decorative ring */}
      <div style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', width: '52px', height: '52px', borderRadius: '50%', border: '2px solid #679436', opacity: 0.2, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '800', color: '#05668d', margin: '0 0 0.875rem', letterSpacing: '-0.3px' }}>
            Get in Touch With Me
          </h2>
          <p style={{ fontSize: '15px', color: '#6B7280', margin: 0 }}>
            I'm available to discuss projects, ideas, or opportunities anytime via contact form.
          </p>
        </div>

        {/* Two rounded cards */}
        <div className="connect-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', alignItems: 'stretch' }}>

          {/* ── Left card: Info ─────────────────────────────── */}
          <div style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #E5E7EB', borderRadius: '16px', padding: '2.25rem', display: 'flex', flexDirection: 'column' }}>
            {/* Name & title */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#05668d', margin: '0 0 0.3rem' }}>Mishant Gandhi</h3>
              <p style={{ fontSize: '13.5px', color: '#6B7280', margin: 0 }}>Senior Finance Professional</p>
            </div>

            {/* Contact items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
              {[
                { Icon: Mail,   label: 'Email',    value: 'mishant.gandhi@gmail.com', href: 'mailto:mishant.gandhi@gmail.com' },
                { Icon: Phone,  label: 'Phone',    value: '+971 52 507 6563', href: 'tel:+971525076563' },
                { Icon: MapPin, label: 'Location', value: 'Dubai, United Arab Emirates', href: null },
              ].map(({ Icon, label, value, href }, i) => {
                const Tag = href ? 'a' : 'div';
                return (
                  <Tag key={i} href={href || undefined}
                    data-testid={`contact-item-${label.toLowerCase()}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}
                  >
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '10px',
                      backgroundColor: '#05668d',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <Icon size={18} style={{ color: '#679436' }} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px', fontWeight: '600' }}>{label}</div>
                      <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#05668d', lineHeight: '1.3', wordBreak: 'break-word' }}>{value}</div>
                    </div>
                  </Tag>
                );
              })}
            </div>

            {/* Divider */}
            <div style={{ height: '1px', backgroundColor: '#F0EDE6', margin: '1.75rem 0 1.25rem' }} />

            {/* LinkedIn */}
            <p style={{ fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 0.875rem', fontWeight: '600' }}>Connect with me</p>
            <a
              href="https://www.linkedin.com/in/camishant-0525076563"
              target="_blank" rel="noopener noreferrer"
              data-testid="contact-linkedin"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '44px', height: '44px', borderRadius: '10px',
                backgroundColor: '#05668d', textDecoration: 'none',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#679436'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#05668d'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Linkedin size={18} style={{ color: '#FFFFFF' }} />
            </a>
          </div>

          {/* ── Right card: Form ─────────────────────────────── */}
          <div style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #E5E7EB', borderRadius: '16px', padding: '2.25rem', display: 'flex', flexDirection: 'column' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(201,168,76,0.1)', border: '2px solid #679436', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <CheckCircle size={28} style={{ color: '#679436' }} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#05668d', margin: '0 0 0.5rem' }}>Message Sent!</h3>
                <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 1.5rem' }}>Thank you — Mishant will get back to you shortly.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                  style={{ backgroundColor: '#05668d', color: '#FFFFFF', border: 'none', padding: '11px 28px', borderRadius: '50px', fontSize: '13.5px', fontWeight: '600', cursor: 'pointer', fontFamily: "'Poppins', sans-serif" }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', flex: 1 }}>
                {/* Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: '600', color: '#05668d', marginBottom: '6px' }}>Your Name</label>
                  <input type="text" placeholder="Enter your name" value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    style={{ ...inputStyle, borderColor: errors.name ? '#e05c5c' : '#E5E7EB' }}
                    onFocus={(e) => (e.target.style.borderColor = '#05668d')}
                    onBlur={(e) => (e.target.style.borderColor = errors.name ? '#e05c5c' : '#E5E7EB')}
                  />
                  {errors.name && <div style={{ fontSize: '11.5px', color: '#e05c5c', marginTop: '4px' }}>{errors.name}</div>}
                </div>

                {/* Email + Contact Number in same row */}
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13.5px', fontWeight: '600', color: '#05668d', marginBottom: '6px' }}>Email Address</label>
                    <input type="email" placeholder="Enter your email" value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      style={{ ...inputStyle, borderColor: errors.email ? '#e05c5c' : '#E5E7EB' }}
                      onFocus={(e) => (e.target.style.borderColor = '#05668d')}
                      onBlur={(e) => (e.target.style.borderColor = errors.email ? '#e05c5c' : '#E5E7EB')}
                    />
                    {errors.email && <div style={{ fontSize: '11.5px', color: '#e05c5c', marginTop: '4px' }}>{errors.email}</div>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13.5px', fontWeight: '600', color: '#05668d', marginBottom: '6px' }}>Contact Number</label>
                    <input type="tel" placeholder="+971 XX XXX XXXX" value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      style={{ ...inputStyle }}
                      onFocus={(e) => (e.target.style.borderColor = '#05668d')}
                      onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: '600', color: '#05668d', marginBottom: '6px' }}>Your Message</label>
                  <textarea placeholder="Tell me about your project" value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={3}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '80px' }}
                    onFocus={(e) => (e.target.style.borderColor = '#05668d')}
                    onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                  />
                </div>

                {/* Submit */}
                <button type="submit" data-testid="contact-submit" style={{
                  width: '100%', padding: '15px',
                  backgroundColor: '#05668d', color: '#FFFFFF',
                  border: 'none', borderRadius: '10px',
                  fontSize: '15px', fontWeight: '700',
                  cursor: 'pointer', fontFamily: "'Poppins', sans-serif",
                  letterSpacing: '0.3px', marginTop: 'auto',
                  transition: 'background-color 0.3s ease, transform 0.2s ease',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#679436'; e.currentTarget.style.color = '#05668d'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#05668d'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .connect-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 540px) { .form-row { grid-template-columns: 1fr !important; } }
        input::placeholder, textarea::placeholder { color: #B0AAA0 !important; }
        textarea { font-family: 'Poppins', sans-serif !important; }
      `}</style>
    </section>
  );
};
