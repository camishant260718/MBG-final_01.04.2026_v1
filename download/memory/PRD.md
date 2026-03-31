# PRD - Mishant Gandhi Portfolio Website

## Problem Statement
Elegant, minimal, and professional portfolio website for Mishant Gandhi — a senior finance professional (CA, CS) based in Dubai, UAE.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS (via craco), inline CSS-in-JS
- **Icons**: lucide-react
- **Fonts**: Poppins (Google Fonts) — unified throughout
- **Backend**: FastAPI (minimal, mainly for health checks)
- **Database**: MongoDB (not actively used — frontend-only portfolio)

## Color Palette
- Navy blue: #003554 (header, buttons, headings, dark accents)
- Beige: #f5f1ed (hero background)
- Warm beige: #efece6 (about section)
- Light: #f7f4f3 (contact section)
- Gold accent: #B8860B (dots, numbers, highlights, progress bars)
- Green: #4ADE80 (availability indicator, pulsing dot)

## Architecture
```
/app/frontend/src/
  App.js                 - Main layout assembling all sections
  components/
    Header.js            - Navy header, green pulse dot, active nav underline
    HeroSection.js       - Beige hero with photo, intro, CTAs, LinkedIn stats
    SkillsRibbon.js      - Navy marquee with gold skill text
    AboutSection.js      - 2-column: intro text + 2x2 quadrant grid with hover
    SkillsSection.js     - 8-card grid (4 cols) with progress bars
    ExperienceSection.js - Tabbed: Experience cards + Education cards
    EducationContact.js  - Contact form (mailto), info card, WhatsApp + LinkedIn
```

## What's Implemented
- [x] Header: Navy #003554, green pulsing dot, scroll-based active nav underline
- [x] Hero: Photo (transparent PNG), "Hello, I'm Mishant.", body text, "Let's Collaborate" + "Explore My Work" CTAs, LinkedIn stats (5,214 / 5,000+)
- [x] Skills Ribbon: Navy marquee with 8 finance skills in gold
- [x] About: 2-col layout, 2x2 quadrant grid with blue hover + white text, "Scroll to explore"
- [x] Skills: 8 cards (4-col) with blue progress bars at 85-95%
- [x] Experience & Education: Tabbed section, 6 experience cards + 4 education cards with years
- [x] Contact: Form linked to mailto:mishant.gandhi@gmail.com, WhatsApp icon beside LinkedIn
- [x] Mobile responsive: Full-screen nav overlay, single-column layouts
- [x] Code review fixes: Hook dependencies, array keys, backend type hints

## Content Updates Applied
- DEWA: Sr. Manager — Finance and Audit (2024–Present)
- Essar: 2017–2022
- GOLS: 2012–2015 (links to Reliance 2015–2016)
- Education: CA (2012), CS (2012), B.Com (2008), ACCA IFRS Diploma (2021)
- Hero quote: "I believe numbers should not just report the past — they should illuminate the path forward."
- Contact: "Tell me about the opportunity", WhatsApp icon

## Deployment Status
- Health check: PASSED
- Ready for production deployment
