# Rushikesh Debadwar — Portfolio

A modern, dark-themed developer portfolio for an AWS Cloud Engineer / DevOps Engineer, built with React, Vite, Tailwind CSS, and Framer Motion. Content is sourced directly from the attached resume.

## Tech stack

- **React 19 + Vite** — fast dev/build tooling
- **Tailwind CSS 3** — utility-first styling with a custom design token system
- **Framer Motion** — scroll-triggered reveals, hero stagger animations, hover micro-interactions
- **lucide-react / react-icons** — iconography

## Design system

- **Background**: deep navy-slate (`#0B1120`) instead of pure black, with a faint grid and an ambient animated network-topology canvas in the hero (nodes/links drifting — evokes a VPC diagram, not generic particles)
- **Accent**: sky blue (`#38BDF8`) for primary actions/links, mint green (`#34D399`) for "status/active" signals, amber for certifications
- **Type**: Space Grotesk (display/headings), Inter (body), JetBrains Mono (labels, tags, data — reinforces the infra/console feel)
- **Cards**: glassmorphism (`bg-base-800/60` + `backdrop-blur-xl` + hairline border), with hover lift and a soft glow on the accent border

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── Rushikesh_Debadwar_Resume.pdf   # served for the "Download Resume" button
├── src/
│   ├── assets/
│   │   └── profile.jpeg                # hero portrait
│   ├── components/
│   │   ├── Navbar.jsx                  # scroll-spy nav + mobile menu
│   │   ├── Hero.jsx                    # intro, CTAs, portrait card
│   │   ├── NetworkTopology.jsx         # canvas background animation
│   │   ├── About.jsx
│   │   ├── Skills.jsx                  # 7 grouped skill categories
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx              # timeline
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── resumeData.js               # single source of truth for all content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                       # Tailwind layers + design tokens
├── index.html                          # SEO meta tags (OG, Twitter, robots, canonical)
├── tailwind.config.js
└── package.json
```

**To update content** (new project, role change, etc.), edit `src/data/resumeData.js` only — every section reads from it.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

Output goes to `dist/`.

## Deploy to Vercel

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel login
vercel --prod
```

Vercel auto-detects the Vite framework preset (build command `npm run build`, output directory `dist`). Accept the defaults when prompted.

**Option B — Git + Vercel dashboard**

1. Push this project to a GitHub repository.
2. Go to vercel.com/new and import the repo.
3. Framework preset: **Vite** (auto-detected). Build command: `npm run build`. Output directory: `dist`.
4. Click **Deploy**.

Every push to your main branch will trigger a new deployment automatically.

### Before deploying

- Replace the placeholder URLs in `index.html` (`og:url`, `canonical`, `twitter` tags) with your actual Vercel domain once assigned, then redeploy.
- Optionally add a real `og-image.png` (1200×630) to `public/` for social link previews — currently referenced but not included.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (animations and the canvas background fall back to a static frame)
- Keyboard-focusable nav links and buttons
- Responsive from 375px mobile up through large desktop
- Resume PDF served as a static asset for instant download (no JS required)
