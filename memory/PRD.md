# PRD - Mishant Gandhi Portfolio Website

## Problem Statement
Build an elegant, minimal, and professional portfolio website for Mishant Gandhi, a finance professional (CA, CS) based in Dubai, UAE.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS (via craco), inline CSS-in-JS
- **Icons**: lucide-react
- **Fonts**: Poppins, Playfair Display, Dancing Script (Google Fonts)
- **Backend**: None (frontend-only static site)
- **Database**: None

## Architecture
```
/app/frontend/src/
  App.js              - Main layout assembling all sections
  App.css             - Global styles
  index.css           - Tailwind + base styles
  components/
    Header.js          - Dark navy header with green dot + name, responsive nav
    HeroSection.js     - Cream/beige hero with intro, buttons, LinkedIn stats
    SkillsRibbon.js    - Floating marquee of finance skills with orange dots
    WorkedWithSection.js - Animated company logo marquee
    AboutSection.js    - Professional summary section
    SkillsSection.js   - Grid of expertise areas
    ExperienceSection.js - Work history cards
    EducationContact.js - Education & Contact form sections
    CustomCursor.js    - DEPRECATED (removed, default cursor restored)
```

## What's Implemented
- [x] Header: Dark navy background, green dot + "Mishant Gandhi" script font, responsive mobile nav overlay
- [x] Hero Section: Cream background, greeting, heading with yellow underline, company mentions, CA/CS buttons, Send Message button, LinkedIn stats bar, photo placeholder
- [x] Skills Ribbon: Slow floating marquee with 15 finance skills, orange dot separators
- [x] Organizations: Animated marquee of companies
- [x] About: Professional summary with photo placeholder
- [x] Skills: 12-card grid of expertise areas
- [x] Experience: Card-based work history
- [x] Education & Certifications: CA, CS, B.Com cards
- [x] Contact: Form with email, phone, location
- [x] Footer: Quote + copyright
- [x] Mobile responsive: Full-screen nav overlay, single-column layouts
- [x] Default browser cursor (custom cursor removed)

## Backlog / Upcoming
- [ ] Add Mishant's actual profile photo (PNG format) to hero section
- [ ] About section redesign (reference images provided)
- [ ] Education & Contact section polish
- [ ] Final responsiveness pass
- [ ] Refactor EducationContact.js into separate files
- [ ] Deployment readiness
