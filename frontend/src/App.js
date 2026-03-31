import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsRibbon from './components/SkillsRibbon';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationContact from './components/EducationContact';

function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", overflowX: 'hidden' }}>
      <Header />
      <HeroSection />
      <SkillsRibbon />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationContact />
    </div>
  );
}

export default App;
