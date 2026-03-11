# Cameron Cooper — Portfolio

Personal portfolio site for Cameron Cooper, Senior DevSecOps Engineer II (Lead) at Wellthy. Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

**Live site:** Deployed to GitHub Pages on push to `main`.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys to GitHub Pages on every push to `main`. No secrets or manual configuration required.

## Resume

Drop your resume PDF at `public/Cameron_Cooper_Resume.pdf` — the Hero section links to it.

## Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Fixed nav with mobile hamburger
│   └── Footer.tsx        # Footer with social links
├── sections/
│   ├── Hero.tsx          # Full-viewport landing with CTAs
│   ├── Metrics.tsx       # Key stats bar
│   ├── About.tsx         # Bio + three pillars
│   ├── Experience.tsx    # Wellthy (featured) + timeline roles
│   ├── Leadership.tsx    # Security programs & initiatives
│   ├── Expertise.tsx     # Categorized skill pills
│   ├── Certifications.tsx# Certs & licenses with active badges
│   ├── Projects.tsx      # Side projects & open source
│   ├── Photography.tsx   # Masonry photo gallery
│   └── Contact.tsx       # Email, LinkedIn, GitHub
├── App.tsx
└── index.css             # Global styles, dot-grid background
```
