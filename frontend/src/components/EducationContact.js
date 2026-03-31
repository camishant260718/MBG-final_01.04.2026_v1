import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, MessageCircle } from 'lucide-react';

export default function EducationContact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:mishant.gandhi@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      style={{
        backgroundColor: '#fff',
        padding: '80px 60px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 2,
            color: '#888',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}
        >
          Contact
        </p>
        <h2
          data-testid="contact-heading"
          style={{ fontSize: 32, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}
        >
          Get in Touch With Me
        </h2>
        <p style={{ fontSize: 14, color: '#888', maxWidth: 480, margin: '0 auto' }}>
          I'm available to discuss projects, ideas, or opportunities anytime via contact form.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 48,
          maxWidth: 900,
          margin: '0 auto',
        }}
      >
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: 4,
            }}
          >
            Mishant Gandhi
          </h3>
          <p style={{ fontSize: 14, color: '#666', marginBottom: 28 }}>
            CA, CS — Finance & Audit Professional
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  backgroundColor: '#003554',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Mail size={18} color="#d4a843" />
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#999', marginBottom: 2 }}>Email</p>
                <p style={{ fontSize: 14, color: '#1a1a1a', fontWeight: 500 }}>
                  mishant.gandhi@gmail.com
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  backgroundColor: '#003554',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Phone size={18} color="#d4a843" />
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#999', marginBottom: 2 }}>Phone</p>
                <p style={{ fontSize: 14, color: '#1a1a1a', fontWeight: 500 }}>
                  +971 52 507 6563
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  backgroundColor: '#003554',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MapPin size={18} color="#d4a843" />
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#999', marginBottom: 2 }}>Location</p>
                <p style={{ fontSize: 14, color: '#1a1a1a', fontWeight: 500 }}>
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #eee', paddingTop: 20 }}>
            <p style={{ fontSize: 12, color: '#999', marginBottom: 12 }}>Connect with me</p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a
                href="https://www.linkedin.com/in/mishantgandhi"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="linkedin-link"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  backgroundColor: '#0077b5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                }}
              >
                <Linkedin size={18} color="#fff" />
              </a>
              <a
                href="https://wa.me/971525076563"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="whatsapp-link"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  backgroundColor: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                }}
              >
                <MessageCircle size={18} color="#fff" />
              </a>
            </div>
          </div>
        </div>

        <form
          data-testid="contact-form"
          onSubmit={handleSubmit}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <div>
            <label
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: '#1a1a1a',
                display: 'block',
                marginBottom: 6,
              }}
            >
              Your Name
            </label>
            <input
              data-testid="contact-name"
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: 8,
                border: '1px solid #ddd',
                fontSize: 14,
                fontFamily: "'Poppins', sans-serif",
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: '#1a1a1a',
                display: 'block',
                marginBottom: 6,
              }}
            >
              Email Address
            </label>
            <input
              data-testid="contact-email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: 8,
                border: '1px solid #ddd',
                fontSize: 14,
                fontFamily: "'Poppins', sans-serif",
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: '#1a1a1a',
                display: 'block',
                marginBottom: 6,
              }}
            >
              Your Message
            </label>
            <textarea
              data-testid="contact-message"
              placeholder="Tell me about your project"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: 8,
                border: '1px solid #ddd',
                fontSize: 14,
                fontFamily: "'Poppins', sans-serif",
                outline: 'none',
                resize: 'vertical',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <button
            data-testid="contact-submit"
            type="submit"
            style={{
              backgroundColor: '#003554',
              color: '#fff',
              border: 'none',
              padding: '14px 32px',
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: "'Poppins', sans-serif",
              transition: 'background-color 0.2s',
              width: '100%',
            }}
          >
            Send Message
          </button>
        </form>
      </div>

      <div
        style={{
          textAlign: 'center',
          marginTop: 60,
          paddingTop: 24,
          borderTop: '1px solid #eee',
        }}
      >
        <p style={{ fontSize: 13, color: '#aaa' }}>
          &copy; {new Date().getFullYear()} Mishant Gandhi. All rights reserved.
        </p>
      </div>
    </section>
  );
}
