# Mishant Gandhi Portfolio - PRD

## Original Problem Statement
Build an elegant, minimal, and professional portfolio website for Mishant Gandhi, a senior finance professional (CA, CS) based in Dubai, UAE. Navy Blue (#003554) and Beige (#f5f1ed) color theme, transparent PNG profile photo, tabbed Experience/Education section, contact form via mailto.

## Architecture
- **Frontend**: React 19 + Tailwind CSS (via craco) + Inline styles + Lucide React icons
- **Backend**: FastAPI + MongoDB (stub endpoints)
- **Standalone HTML**: portfolio-standalone.html (for Netlify deployment)

## What's Been Implemented
- [x] Header - Navy blue, LinkedIn + WhatsApp icons, pulsing green dot, gold underline active nav
- [x] Hero Section - Beige background, profile photo, "Let's Collaborate" + "Request My CV" buttons
- [x] Skills Ribbon - Navy blue marquee with gold italic text
- [x] About Section - Soft beige, 2x2 interactive grid with hover effects
- [x] Skills Section - 4-column grid, 8 skill cards with progress bars
- [x] Experience/Education - Tabbed interface (6 experience + 4 education cards)
- [x] Contact Section - mailto form to mishant.gandhi@gmail.com, LinkedIn/WhatsApp links
- [x] Footer - Dark navy with MG monogram
- [x] WhatsApp floating FAB button
- [x] Custom cursor
- [x] Code quality fixes (hook deps, magic numbers, sub-component extraction, useCallback)
- [x] Standalone HTML for Netlify deployment

## Key Emails
- Request My CV -> mailto:mishant.gandhi@gmail.com
- Contact Form -> mailto:mishant.gandhi@gmail.com

## MOCKED
- Contact form uses `mailto:` protocol (opens visitor's email client)

## Backlog
- P2: Mobile responsive testing
- P3: SEO meta tags & favicon
- P3: Direct email sending integration (SendGrid) when ready
