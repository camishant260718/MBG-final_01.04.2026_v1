import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WorkedWithSection from "./components/WorkedWithSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import { EducationSection, ContactSection } from "./components/EducationContact";
import CustomCursor from "./components/CustomCursor";

const Footer = () => (
  <footer
    style={{
      backgroundColor: '#071729',
      padding: '2.5rem 2rem',
      textAlign: 'center',
      borderTop: '1px solid rgba(201,168,76,0.15)',
    }}
  >
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div
        style={{
          width: '36px',
          height: '36px',
          border: '1.5px solid rgba(201,168,76,0.5)',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '700',
          fontSize: '13px',
          color: '#C9A84C',
          margin: '0 auto 1.25rem',
          letterSpacing: '0.5px',
        }}
      >
        MG
      </div>
      <p
        style={{
          fontSize: '13.5px',
          color: 'rgba(255,255,255,0.4)',
          fontStyle: 'italic',
          margin: '0 0 0.75rem',
          letterSpacing: '0.3px',
        }}
      >
        "Precision in numbers, purpose in leadership."
      </p>
      <p style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.2)', margin: 0, letterSpacing: '0.5px' }}>
        © {new Date().getFullYear()} Mishant Gandhi · Dubai, United Arab Emirates
      </p>
    </div>
  </footer>
);

function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <CustomCursor />
      <Header />
      <HeroSection />
      <WorkedWithSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
