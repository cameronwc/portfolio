# Case Study + Drama + Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a routed case-study page for the AI-powered vulnerability remediation system, a visual-drama pass (magnetic CTAs, gradient borders, route transitions), and a polish/performance pass (reduced motion, meta/OG, a11y, image hygiene).

**Architecture:** Convert the SPA to two React Router routes (`/` and `/work/ai-remediation`) with a GitHub Pages 404 fallback. The case-study page is a lazy route chunk with a data-driven animated SVG architecture diagram. Drama and polish are incremental passes over existing components.

**Tech Stack:** React 18, TypeScript, react-router-dom 6 (already installed), Tailwind CSS 3, Framer Motion 11, Vite 5. No test framework exists in this repo — each task verifies via `npx tsc --noEmit`, production build, and browser checks with the preview tools.

**Spec:** `docs/superpowers/specs/2026-06-11-case-study-drama-polish-design.md`

**Content gate:** All case-study prose in Task 2 is drafted from existing bullets in `src/sections/Experience.tsx`. The user must review it before deploy. Do not invent claims.

---

### Task 1: Routing scaffold

**Files:**
- Create: `src/pages/Home.tsx`
- Create: `src/pages/NotFound.tsx`
- Create: `src/components/ScrollManager.tsx`
- Create: `src/components/PageTransition.tsx`
- Create: `src/hooks/usePageMeta.ts`
- Modify: `src/main.tsx`
- Modify: `src/App.tsx`
- Modify: `src/components/Navigation.tsx`
- Modify: `package.json` (build script)

- [ ] **Step 1: Create the page-meta hook** — `src/hooks/usePageMeta.ts`:

```ts
import { useEffect } from "react";

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [title, description]);
}
```

- [ ] **Step 2: Create ScrollManager** — `src/components/ScrollManager.tsx`. Scrolls to top on route change, or to the hash target if present (handles `/#about` links from the case-study page):

```tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        requestAnimationFrame(() =>
          target.scrollIntoView({ behavior: "smooth" })
        );
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}
```

- [ ] **Step 3: Create PageTransition** — `src/components/PageTransition.tsx`:

```tsx
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 4: Create Home page** — `src/pages/Home.tsx`. Move the section composition out of `App.tsx` verbatim and wrap in `PageTransition`:

```tsx
import { Hero } from "../sections/Hero";
import { Metrics } from "../sections/Metrics";
import { Clients } from "../sections/Clients";
import { About } from "../sections/About";
import { Experience } from "../sections/Experience";
import { Leadership } from "../sections/Leadership";
import { Expertise } from "../sections/Expertise";
import { Certifications } from "../sections/Certifications";
import { Projects } from "../sections/Projects";
import { Book } from "../sections/Book";
import { Photography } from "../sections/Photography";
import { Contact } from "../sections/Contact";
import { PageTransition } from "../components/PageTransition";
import { usePageMeta } from "../hooks/usePageMeta";

export function Home() {
  usePageMeta(
    "Cameron Cooper — Senior DevSecOps Engineer",
    "Cameron Cooper — Senior DevSecOps Engineer II at Wellthy. Cloud security automation, compliance engineering, and team enablement."
  );

  return (
    <PageTransition>
      <Hero />
      <Metrics />
      <Clients />
      <About />
      <Experience />
      <Leadership />
      <Expertise />
      <Certifications />
      <Projects />
      <Book />
      <Photography />
      <Contact />
    </PageTransition>
  );
}
```

- [ ] **Step 5: Create NotFound page** — `src/pages/NotFound.tsx`:

```tsx
import { Link } from "react-router-dom";
import { PageTransition } from "../components/PageTransition";
import { usePageMeta } from "../hooks/usePageMeta";

export function NotFound() {
  usePageMeta(
    "404 — Cameron Cooper",
    "Page not found."
  );

  return (
    <PageTransition>
      <section className="flex min-h-screen items-center justify-center">
        <div className="section-container py-32 text-center">
          <p className="font-mono text-sm tracking-[0.3em] text-accent-400">
            404 — NOT FOUND
          </p>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
            This route doesn't exist.
          </h1>
          <Link
            to="/"
            className="mt-10 inline-block rounded-lg bg-accent-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-400 hover:shadow-[0_0_28px_rgba(6,182,212,0.45)]"
          >
            Back to home
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
```

- [ ] **Step 6: Rewrite App.tsx** with routes, lazy case-study chunk, and AnimatePresence. The case-study page doesn't exist yet — use a temporary placeholder component in this task; Task 2 replaces it:

```tsx
import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollManager } from "./components/ScrollManager";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

const CaseStudyAIRemediation = lazy(() =>
  import("./pages/CaseStudyAIRemediation").then((m) => ({
    default: m.CaseStudyAIRemediation,
  }))
);

function App() {
  const location = useLocation();

  return (
    <div className="relative overflow-x-hidden">
      <ScrollManager />
      <Navigation />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route
              path="/work/ai-remediation"
              element={
                <Suspense fallback={null}>
                  <CaseStudyAIRemediation />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

And create a minimal placeholder `src/pages/CaseStudyAIRemediation.tsx` so the build passes (Task 2 replaces this file entirely):

```tsx
import { PageTransition } from "../components/PageTransition";

export function CaseStudyAIRemediation() {
  return (
    <PageTransition>
      <section className="min-h-screen pt-32">
        <div className="section-container">
          <p className="font-mono text-sm tracking-[0.3em] text-accent-400">
            CASE STUDY
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
```

- [ ] **Step 7: Wrap main.tsx in BrowserRouter:**

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

- [ ] **Step 8: Update Navigation for cross-route links.** In `src/components/Navigation.tsx`:
  1. Add imports: `import { Link, useLocation } from "react-router-dom";`
  2. Change `navLinks` hrefs from `"#about"` to `"/#about"` (prefix every one with `/`).
  3. Replace the logo `<a href="#" ...>` with `<Link to="/" ...>` (same classes/children).
  4. Replace each desktop and mobile `<a href={link.href} ...>` with `<Link to={link.href} ...>` (same classes; keep the mobile `onClick`).
  5. Add `const { pathname } = useLocation();` and `const onWorkPage = pathname.startsWith("/work");` inside the component. When `onWorkPage`, render this in place of the desktop `<ul>` (and hide the mobile hamburger with the same condition):

```tsx
<Link
  to="/"
  className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
>
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
  Back to home
</Link>
```

- [ ] **Step 9: GitHub Pages SPA fallback.** In `package.json`, change the build script to:

```json
"build": "tsc --noEmit && vite build && cp dist/index.html dist/404.html"
```

- [ ] **Step 10: Verify.** Run `npx tsc --noEmit` (expect clean), `npm run build` (expect `dist/404.html` exists — check with `ls dist/404.html`). Start the preview server; verify: home renders all sections, `/work/ai-remediation` shows the placeholder with back-link nav, a junk URL like `/nope` shows the 404 page, clicking "Skills" from the case-study page navigates home and scrolls to Expertise.

- [ ] **Step 11: Commit:**

```bash
git add src/ package.json
git commit -m "Add routing: case study route scaffold, 404 page, Pages SPA fallback"
```

---

### Task 2: Case-study page content

**Files:**
- Rewrite: `src/pages/CaseStudyAIRemediation.tsx`

All prose below is drafted from these source bullets in `src/sections/Experience.tsx`: the AI remediation system (line ~18), the ML vulnerability pipeline (line ~15), 0-day MTTR (line ~20), HIPAA/compliance coordination (line ~26), and the 7+ teams summary (line ~12). **Flag for user review before deploy.**

- [ ] **Step 1: Replace the placeholder with the full page.** The `<ArchitectureDiagram />` import will fail until Task 3 — create it as part of this step using the stub below, which Task 3 replaces:

Stub `src/components/ArchitectureDiagram.tsx`:

```tsx
export function ArchitectureDiagram() {
  return <div className="glass h-64 rounded-xl" aria-hidden="true" />;
}
```

Full `src/pages/CaseStudyAIRemediation.tsx`:

```tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageTransition } from "../components/PageTransition";
import { ArchitectureDiagram } from "../components/ArchitectureDiagram";
import { usePageMeta } from "../hooks/usePageMeta";

const META_CHIPS = [
  { label: "Role", value: "Architect & Lead" },
  { label: "Company", value: "Wellthy" },
  { label: "Stack", value: "Claude API · CircleCI · Python" },
];

const STEPS = [
  {
    title: "Scheduled detection",
    body: "A CircleCI cron pipeline runs on a schedule and scans the vulnerability ticket queue for open remediation work, so no human has to remember to kick anything off.",
  },
  {
    title: "Codebase analysis",
    body: "For each ticket, the system pulls the affected repository and assembles context: the vulnerable dependency or code path, surrounding code, and the project's conventions.",
  },
  {
    title: "Fix generation",
    body: "Claude analyzes the vulnerability alongside that context and generates a candidate fix scoped to the actual finding.",
  },
  {
    title: "Pull request",
    body: "The pipeline opens a pull request with the generated patch, linked back to the originating ticket for SLA tracking.",
  },
  {
    title: "Human review",
    body: "An engineer reviews, validates, and merges. The system accelerates remediation; accountability stays with people.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
} as const;

export function CaseStudyAIRemediation() {
  usePageMeta(
    "AI-Powered Vulnerability Remediation — Cameron Cooper",
    "Case study: an automated vulnerability remediation system using the Claude API and CircleCI, built at Wellthy."
  );

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent-500/[0.07] blur-[120px]" />
          <div className="scanlines absolute inset-0" />
        </div>
        <div className="section-container relative z-10">
          <motion.p
            className="font-mono text-sm tracking-[0.3em] text-accent-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            CASE STUDY
          </motion.p>
          <motion.h1
            className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            AI-Powered Vulnerability Remediation
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            An automated pipeline that detects open vulnerability tickets,
            analyzes the affected codebase, and generates fix pull requests —
            keeping remediation ahead of strict SLAs without pulling engineers
            off product work.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          >
            {META_CHIPS.map((chip) => (
              <span
                key={chip.label}
                className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
              >
                <span className="font-mono text-accent-400">{chip.label}</span>
                {" — "}
                {chip.value}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="section-container">
          <motion.div {...fadeUp}>
            <p className="font-mono text-sm tracking-[0.2em] text-accent-400">
              THE PROBLEM
            </p>
            <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-slate-400">
              <p>
                Wellthy's security program holds critical and high-severity
                vulnerabilities to a 0-day mean time to remediation — findings
                are patched the day they surface. On a healthcare platform
                handling sensitive caregiver data, that bar is non-negotiable.
              </p>
              <p>
                But as the automated vulnerability pipeline matured, detection
                outpaced human capacity. Every finding pushed to the
                centralized ticketing system needed an engineer to read it,
                find the affected code, write a patch, and shepherd it through
                review — across 7+ engineering teams with their own roadmaps.
                The bottleneck wasn't finding vulnerabilities. It was fixing
                them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="section-container">
          <motion.div {...fadeUp}>
            <p className="font-mono text-sm tracking-[0.2em] text-accent-400">
              THE SYSTEM
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Detection to pull request, end to end.
            </h2>
          </motion.div>
          <div className="mt-12">
            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="section-container">
          <motion.div {...fadeUp}>
            <p className="font-mono text-sm tracking-[0.2em] text-accent-400">
              HOW IT WORKS
            </p>
          </motion.div>
          <ol className="mt-10 max-w-3xl space-y-8">
            {STEPS.map((step, index) => (
              <motion.li
                key={step.title}
                className="flex gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded border border-accent-500/30 bg-accent-500/[0.06] font-mono text-sm text-accent-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {step.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="section-container">
          <motion.div {...fadeUp}>
            <p className="font-mono text-sm tracking-[0.2em] text-accent-400">
              OUTCOMES
            </p>
            <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-slate-400">
              <p>
                The system runs as part of the security program that maintained
                a 0-day mean time to remediation for all critical and
                high-severity vulnerabilities, with full security coverage
                across 7+ engineering teams — without growing the security
                team.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-10">
              <div>
                <span className="text-3xl font-bold text-white sm:text-4xl">
                  0-day
                </span>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-accent-400">
                  MTTR maintained
                </p>
              </div>
              <div>
                <span className="text-3xl font-bold text-white sm:text-4xl">
                  7+
                </span>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-accent-400">
                  Teams covered
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="section-container flex flex-wrap items-center gap-4">
          <Link
            to="/"
            className="rounded-lg border border-white/[0.12] px-8 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-accent-500/40 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]"
          >
            Back to home
          </Link>
          <Link
            to="/#contact"
            className="rounded-lg bg-accent-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-400 hover:shadow-[0_0_28px_rgba(6,182,212,0.45)]"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
```

- [ ] **Step 2: Verify.** `npx tsc --noEmit` clean; reload preview, visit `/work/ai-remediation`, confirm all six sections render and the Outcomes/CTA links work.

- [ ] **Step 3: Commit:**

```bash
git add src/pages/CaseStudyAIRemediation.tsx src/components/ArchitectureDiagram.tsx
git commit -m "Add AI remediation case study page (prose pending user review)"
```

---

### Task 3: Animated architecture diagram

**Files:**
- Rewrite: `src/components/ArchitectureDiagram.tsx`

- [ ] **Step 1: Replace the stub with the data-driven diagram.** One node/edge dataset, two computed layouts: horizontal (desktop, `hidden md:block`) and vertical (mobile, `md:hidden`). Edges draw with `pathLength`; nodes stagger in:

```tsx
import { motion } from "framer-motion";

const NODES = [
  { id: "cron", label: "CircleCI Cron", sub: "Scheduled trigger" },
  { id: "detect", label: "Ticket Detection", sub: "Open vuln queue scan" },
  { id: "context", label: "Codebase Analysis", sub: "Repo + dependency context" },
  { id: "claude", label: "Claude API", sub: "Fix generation" },
  { id: "pr", label: "Fix Pull Request", sub: "Patch + ticket link" },
  { id: "review", label: "Human Review", sub: "Engineer approves + merges" },
];

const NODE_W = 150;
const NODE_H = 64;

function Diagram({ vertical }: { vertical: boolean }) {
  const gap = vertical ? 40 : 38;
  const positions = NODES.map((_, i) =>
    vertical
      ? { x: 20, y: i * (NODE_H + gap) }
      : { x: i * (NODE_W + gap), y: 20 }
  );
  const width = vertical ? NODE_W + 40 : NODES.length * (NODE_W + gap) - gap;
  const height = vertical
    ? NODES.length * (NODE_H + gap) - gap
    : NODE_H + 40;

  return (
    <motion.svg
      viewBox={`0 0 ${width} ${height}`}
      className={vertical ? "mx-auto w-full max-w-[240px]" : "w-full"}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      aria-label="Architecture: CircleCI cron triggers ticket detection, codebase analysis, Claude API fix generation, a fix pull request, and human review"
      role="img"
    >
      {/* Edges */}
      {NODES.slice(0, -1).map((node, i) => {
        const from = positions[i];
        const to = positions[i + 1];
        const d = vertical
          ? `M ${from.x + NODE_W / 2} ${from.y + NODE_H} L ${to.x + NODE_W / 2} ${to.y - 6}`
          : `M ${from.x + NODE_W} ${from.y + NODE_H / 2} L ${to.x - 6} ${to.y + NODE_H / 2}`;
        return (
          <g key={`edge-${node.id}`}>
            <motion.path
              d={d}
              stroke="rgba(6,182,212,0.5)"
              strokeWidth="1.5"
              fill="none"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 0.4, delay: 0.3 + i * 0.25 },
                },
              }}
            />
            <motion.path
              d={
                vertical
                  ? `M ${to.x + NODE_W / 2 - 5} ${to.y - 10} L ${to.x + NODE_W / 2} ${to.y - 3} L ${to.x + NODE_W / 2 + 5} ${to.y - 10}`
                  : `M ${to.x - 11} ${to.y + NODE_H / 2 - 5} L ${to.x - 4} ${to.y + NODE_H / 2} L ${to.x - 11} ${to.y + NODE_H / 2 + 5}`
              }
              stroke="rgba(6,182,212,0.5)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.2, delay: 0.55 + i * 0.25 },
                },
              }}
            />
          </g>
        );
      })}
      {/* Nodes */}
      {NODES.map((node, i) => {
        const pos = positions[i];
        const isAccent = node.id === "claude";
        return (
          <motion.g
            key={node.id}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.35, delay: i * 0.25 },
              },
            }}
          >
            <rect
              x={pos.x}
              y={pos.y}
              width={NODE_W}
              height={NODE_H}
              rx="8"
              fill={isAccent ? "rgba(6,182,212,0.08)" : "rgba(255,255,255,0.03)"}
              stroke={isAccent ? "rgba(6,182,212,0.5)" : "rgba(255,255,255,0.12)"}
              strokeWidth="1"
            />
            <text
              x={pos.x + NODE_W / 2}
              y={pos.y + 27}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="12"
              fontWeight="600"
              fontFamily="Inter, system-ui, sans-serif"
            >
              {node.label}
            </text>
            <text
              x={pos.x + NODE_W / 2}
              y={pos.y + 45}
              textAnchor="middle"
              fill="#64748b"
              fontSize="9"
              fontFamily="JetBrains Mono, monospace"
            >
              {node.sub}
            </text>
          </motion.g>
        );
      })}
    </motion.svg>
  );
}

export function ArchitectureDiagram() {
  return (
    <div className="glass rounded-xl p-6 sm:p-10">
      <div className="hidden md:block">
        <Diagram vertical={false} />
      </div>
      <div className="md:hidden">
        <Diagram vertical={true} />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify.** `npx tsc --noEmit` clean. In preview: desktop shows the horizontal flow drawing in left-to-right on scroll; resize to mobile (375px) and confirm the vertical variant renders and animates. Screenshot both.

- [ ] **Step 3: Commit:**

```bash
git add src/components/ArchitectureDiagram.tsx
git commit -m "Add animated architecture diagram to case study"
```

---

### Task 4: Home page integration

**Files:**
- Modify: `src/sections/Projects.tsx`
- Modify: `src/sections/Hero.tsx`

- [ ] **Step 1: Featured case-study card in Projects.** In `src/sections/Projects.tsx`, add `import { Link } from "react-router-dom";` and insert this between the header `motion.div` and the existing projects grid (`gradient-border` class lands in Task 5; harmless until then):

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.5 }}
>
  <Link
    to="/work/ai-remediation"
    className="gradient-border group mt-12 flex flex-col gap-6 rounded-xl border border-accent-500/20 bg-accent-500/[0.03] p-8 transition-shadow duration-300 hover:shadow-glow sm:flex-row sm:items-center sm:justify-between sm:p-10"
  >
    <div>
      <span className="font-mono text-xs tracking-wider text-accent-400">
        FEATURED CASE STUDY
      </span>
      <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
        AI-Powered Vulnerability Remediation
      </h3>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
        How an automated Claude API pipeline turns vulnerability tickets into
        reviewed fix pull requests at Wellthy.
      </p>
    </div>
    <span className="inline-flex flex-none items-center gap-2 font-mono text-sm text-accent-400 transition-transform duration-300 group-hover:translate-x-1">
      Read the case study
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  </Link>
</motion.div>
```

Then change the existing projects grid's `className="mt-12 grid gap-6 sm:grid-cols-2"` to `className="mt-6 grid gap-6 sm:grid-cols-2"`.

- [ ] **Step 2: Hero link.** In `src/sections/Hero.tsx`, add `import { Link } from "react-router-dom";` and insert after the CTA `motion.div` (before the scroll indicator):

```tsx
<motion.div
  className="mt-8"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.7 }}
>
  <Link
    to="/work/ai-remediation"
    className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider text-slate-500 transition-colors hover:text-accent-400"
  >
    FEATURED: AI-POWERED VULNERABILITY REMEDIATION
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </Link>
</motion.div>
```

- [ ] **Step 3: Verify.** `npx tsc --noEmit` clean. Preview: both links navigate to the case study with the route transition; back-link returns home.

- [ ] **Step 4: Commit:**

```bash
git add src/sections/Projects.tsx src/sections/Hero.tsx
git commit -m "Link case study from hero and featured Projects card"
```

---

### Task 5: Visual drama pass

**Files:**
- Create: `src/components/Magnetic.tsx`
- Modify: `src/sections/Hero.tsx`
- Modify: `src/sections/Experience.tsx`
- Modify: `src/index.css`

- [ ] **Step 1: Magnetic wrapper** — `src/components/Magnetic.tsx`:

```tsx
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

export function Magnetic({
  children,
  strength = 0.25,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="inline-block"
      style={{ x: springX, y: springY }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Apply to hero CTAs.** In `src/sections/Hero.tsx`, import `Magnetic` and wrap each of the three CTA `<a>` elements: `<Magnetic><a ...>Explore My Work</a></Magnetic>` etc. (The CTA container is flex; `Magnetic` renders `inline-block` so layout is unchanged.)

- [ ] **Step 3: Headline blur entrance.** On the Hero `motion.h1`, change `initial`/`animate` to include filter: `initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}` and `animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}`.

- [ ] **Step 4: Gradient border utility.** Append to `src/index.css`:

```css
/* Rotating conic-gradient border for featured cards */
@property --border-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

.gradient-border {
  position: relative;
}

.gradient-border::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: conic-gradient(
    from var(--border-angle),
    rgba(6, 182, 212, 0.5),
    transparent 25%,
    transparent 75%,
    rgba(6, 182, 212, 0.5)
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: border-rotate 7s linear infinite;
  pointer-events: none;
}

@keyframes border-rotate {
  to {
    --border-angle: 360deg;
  }
}

@media (prefers-reduced-motion: reduce) {
  .gradient-border::before {
    animation: none;
  }
}
```

- [ ] **Step 5: Apply gradient border to the Wellthy card.** In `src/sections/Experience.tsx`, add `gradient-border` to the featured `motion.article` className (the one starting `relative rounded-xl border border-accent-500/20`). The Projects featured card already has the class from Task 4.

- [ ] **Step 6: Verify.** `npx tsc --noEmit` clean. Preview: CTAs subtly track the cursor and spring back; headline resolves from blur; both featured cards show a slowly rotating cyan border sweep. Note: `@property` requires Chromium/Safari — in Firefox the border is static, which is acceptable degradation; confirm no visual breakage.

- [ ] **Step 7: Commit:**

```bash
git add src/components/Magnetic.tsx src/sections/Hero.tsx src/sections/Experience.tsx src/index.css
git commit -m "Drama pass: magnetic CTAs, blur entrance, rotating gradient borders"
```

---

### Task 6: Polish pass — reduced motion, meta/OG, a11y, images

**Files:**
- Modify: `src/main.tsx`
- Modify: `src/components/ParticleField.tsx`
- Modify: `src/components/Navigation.tsx`
- Modify: `src/App.tsx`
- Modify: `src/index.css`
- Modify: `src/sections/Book.tsx`
- Modify: `src/sections/Photography.tsx`
- Modify: `src/sections/Hero.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `index.html`
- Create: `scripts/og-template.html`
- Create: `public/og-image.png` (generated)

- [ ] **Step 1: Honor reduced motion globally.** In `src/main.tsx`, import `MotionConfig` from `framer-motion` and wrap: `<BrowserRouter><MotionConfig reducedMotion="user"><App /></MotionConfig></BrowserRouter>`.

- [ ] **Step 2: Static particle frame under reduced motion.** In `src/components/ParticleField.tsx`, inside the effect after `isMobile` is computed, add:

```ts
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;
```

Then guard the loop: in `start()`, if `prefersReducedMotion`, render exactly one frame instead of starting the RAF loop:

```ts
const start = () => {
  if (running) return;
  if (prefersReducedMotion) {
    update(0);
    renderer.render(scene, camera);
    return;
  }
  running = true;
  lastTime = performance.now();
  rafId = requestAnimationFrame(renderLoop);
};
```

Also skip adding the `pointermove` listener when `prefersReducedMotion` (wrap the existing `if (!isMobile)` as `if (!isMobile && !prefersReducedMotion)`).

- [ ] **Step 3: Skip link + focus rings.** In `src/App.tsx`, as the first child of the wrapper div add `<a href="#main" className="skip-link">Skip to content</a>` and change `<main>` to `<main id="main">`. Append to `src/index.css`:

```css
/* Skip link — visible only on keyboard focus */
.skip-link {
  position: fixed;
  top: -100px;
  left: 16px;
  z-index: 100;
  border-radius: 8px;
  background: #06b6d4;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  transition: top 0.2s ease;
}

.skip-link:focus {
  top: 16px;
}

/* Keyboard focus rings */
a:focus-visible,
button:focus-visible {
  outline: 2px solid #22d3ee;
  outline-offset: 2px;
  border-radius: 4px;
}
```

- [ ] **Step 4: Nav toggle aria.** In `src/components/Navigation.tsx`, add `aria-expanded={mobileOpen}` to the mobile menu `<button>`.

- [ ] **Step 5: Contrast bumps.** Change `text-slate-600` to `text-slate-500` on: the Hero "SCROLL" span and its sibling svg (`src/sections/Hero.tsx`), and all four `text-slate-600` instances in `src/components/Footer.tsx` (the copyright span and the three links; keep hover states as-is). Do not touch decorative elements (Clients dot separator, Experience bullet dots).

- [ ] **Step 6: Image hygiene.** Get real dimensions: run `sips -g pixelWidth -g pixelHeight public/book-cover.jpg public/photography/*.jpg` and record each. Then: in `src/sections/Book.tsx` add `loading="lazy" decoding="async"` plus the measured `width`/`height` attributes to the cover `<img>`; in `src/sections/Photography.tsx` extend the `photos` array entries with `width`/`height` fields from the measurements and render them as attributes alongside the existing `loading="lazy"`, plus `decoding="async"` (CSS `w-full` keeps responsive sizing; the attributes only reserve aspect ratio).

- [ ] **Step 7: OG image template** — `scripts/og-template.html`:

```html
<!doctype html>
<html>
<head>
<meta charset="UTF-8" />
<style>
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px;
    background: #030712;
    font-family: -apple-system, "Inter", sans-serif;
    display: flex; flex-direction: column; justify-content: center;
    padding: 80px; position: relative; overflow: hidden;
  }
  .glow {
    position: absolute; top: -200px; left: 50%; transform: translateX(-50%);
    width: 800px; height: 500px; border-radius: 50%;
    background: rgba(6, 182, 212, 0.12); filter: blur(120px);
  }
  .eyebrow {
    font-family: "SF Mono", Menlo, monospace; font-size: 22px;
    letter-spacing: 0.3em; color: #22d3ee;
  }
  h1 { margin-top: 28px; font-size: 96px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em; }
  p { margin-top: 24px; font-size: 30px; color: #94a3b8; max-width: 900px; line-height: 1.4; }
  .rule { position: absolute; bottom: 0; left: 0; right: 0; height: 6px;
    background: linear-gradient(90deg, #06b6d4, transparent 60%); }
</style>
</head>
<body>
  <div class="glow"></div>
  <span class="eyebrow">SENIOR DEVSECOPS ENGINEER</span>
  <h1>Cameron Cooper</h1>
  <p>Security automation for cloud platforms — compliant, observable, resilient.</p>
  <div class="rule"></div>
</body>
</html>
```

- [ ] **Step 8: Generate the PNG:**

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --screenshot="$(pwd)/public/og-image.png" \
  --window-size=1200,630 --hide-scrollbars --default-background-color=030712FF \
  "file://$(pwd)/scripts/og-template.html"
```

Expected: `public/og-image.png` exists at 1200×630 (verify with `sips -g pixelWidth -g pixelHeight public/og-image.png`). If Chrome is not at that path, locate it with `mdfind "kMDItemCFBundleIdentifier == com.google.Chrome"` and substitute.

- [ ] **Step 9: Meta tags.** In `index.html` `<head>`, after the existing `og:type` line add (production URL is the GitHub Pages site for this repo — confirm with `git remote get-url origin` and the repo's Pages settings via `gh api repos/{owner}/{repo}/pages --jq .html_url`; substitute it for `SITE_URL` below):

```html
<meta property="og:url" content="SITE_URL" />
<meta property="og:image" content="SITE_URL/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Cameron Cooper — Senior DevSecOps Engineer" />
<meta name="twitter:description" content="Senior DevSecOps Engineer II at Wellthy. Cloud security automation, compliance engineering, and team enablement." />
<meta name="twitter:image" content="SITE_URL/og-image.png" />
```

- [ ] **Step 10: Verify.** `npx tsc --noEmit` clean; `npm run build` passes. Preview: tab through the page from load — skip link appears on first Tab and jumps to content; focus rings visible on links/buttons. Emulate reduced motion (preview_resize supports colorScheme only, so verify via eval: `matchMedia('(prefers-reduced-motion: reduce)').matches` — if emulation isn't available, temporarily hardcode `prefersReducedMotion = true`, confirm a static frame renders, then revert). Confirm photography images reserve space while loading (no layout shift on hard reload).

- [ ] **Step 11: Commit:**

```bash
git add src/ index.html scripts/og-template.html public/og-image.png
git commit -m "Polish pass: reduced motion, skip link, focus rings, contrast, image dims, OG tags"
```

---

### Task 7: Final verification

**Files:** none (verification only)

- [ ] **Step 1:** `npx tsc --noEmit` && `npm run build` — both clean.

- [ ] **Step 2:** `npx vite preview --port 4173 &` then verify SPA fallback: `curl -s -o /dev/null -w "%{http_code}" http://localhost:4173/work/ai-remediation` returns 200 (Vite preview serves index for unknown paths; the real fallback is `404.html` on Pages — confirm it exists and is byte-identical to `dist/index.html` with `cmp dist/index.html dist/404.html`).

- [ ] **Step 3:** Lighthouse (requires Chrome):

```bash
npx --yes lighthouse http://localhost:4173/ --preset=desktop \
  --quiet --chrome-flags="--headless" --output=json --output-path=./lighthouse.json
node -e "const r=require('./lighthouse.json').categories; console.log(Object.fromEntries(Object.entries(r).map(([k,v])=>[k, Math.round(v.score*100)])))"
rm lighthouse.json
```

Expected: ≥95 in all four categories. If Performance falls short, the usual culprit is the photography payload — note findings rather than over-optimizing blind.

- [ ] **Step 4:** Browser pass with preview tools: home + case study at desktop and mobile widths, route transitions, diagram animation both orientations, 404 page, anchor navigation from case study back to `/#expertise`.

- [ ] **Step 5:** Present all case-study prose (Task 2) to the user for review. **Do not merge/deploy until approved.**

- [ ] **Step 6:** Final commit of any verification fixes:

```bash
git add -u
git commit -m "Verification fixes from final pass"
```

---

## Self-review notes

- Spec coverage: routing/fallback (Task 1), case-study page (Task 2), diagram (Task 3), home integration (Task 4), drama (Task 5), polish/meta/a11y/images (Task 6), verification incl. Lighthouse + content gate (Task 7). Font-weight trimming from the spec was dropped: the Hero uses `font-extrabold` (800) and weight 300 is plausibly unused, but the savings don't justify the risk of a visual regression across weights — noted as an explicit YAGNI cut.
- The `gradient-border` class is referenced in Task 4 but defined in Task 5 — harmless (unknown class until defined), called out in both tasks.
- `ScrollManager` + `AnimatePresence mode="wait"`: scroll-to-top fires on pathname change while the old page exits; acceptable since the new page fades in at top. If visible jank appears, move the `window.scrollTo` into the route element's mount — note for the executor.
