# Case Study + Visual Drama + Polish — Design

Date: 2026-06-11
Status: Approved (Approach C — hybrid: one flagship case-study page)

## Goal

Take the redesigned portfolio to the next level along three tracks the user selected:
visual drama, substance/credibility, and polish/performance. Structure: keep the
single-page portfolio and add exactly one routed case-study deep dive for the
AI-powered vulnerability remediation system (Claude API + CircleCI), the strongest
and most differentiating story.

## Constraints

- All existing copy is unchanged. New case-study prose is drafted only from facts
  already present in `src/sections/Experience.tsx` bullets; the user reviews every
  word before ship. Anything unsourceable is flagged, not invented.
- Deployed on GitHub Pages (`vite.config.ts` has `base: "/"`), so client-side
  routing needs a 404.html SPA fallback.
- No emojis. Dark, precise aesthetic. 60fps animations. Mobile responsive.
- Explicitly out of scope: custom cursor, additional WebGL canvases, command
  palette / terminal easter eggs (user did not select the interactive track).

## 1. Routing & structure

- Use `react-router-dom` (already a dependency, currently unused).
  `BrowserRouter` in `main.tsx` (basename not needed; base is `/`).
- Routes: `/` → existing one-pager (unchanged composition in `App.tsx`);
  `/work/ai-remediation` → new case-study page.
- GitHub Pages fallback: build step copies `dist/index.html` → `dist/404.html`
  (postbuild script). The 404 path also renders a styled not-found state for
  genuinely unknown routes.
- `Navigation` link hrefs change from `#about` to `/#about` so anchors work from
  both pages; on the case-study page the nav shows a back-to-home affordance.
- On route change: scroll to top; `AnimatePresence` fade/slide page transition.
- Home page must handle `/#section` anchor scrolling after route navigation.

## 2. Case-study page — `/work/ai-remediation`

New file `src/pages/CaseStudyAIRemediation.tsx` (lazy-loaded route chunk).
Sections, top to bottom:

1. **Hero** — "CASE STUDY" mono eyebrow, title, one-line summary, meta chips
   (Role, Company: Wellthy, Stack: Claude API / CircleCI / Python). Scanlines +
   static glow background; no WebGL on this page.
2. **Problem & constraints** — prose on manual remediation not scaling in a
   healthcare-compliance context (sourced from existing bullets: 0-day MTTR
   commitment, SLA tracking, 7+ teams, HIPAA context).
3. **Architecture diagram** — custom inline SVG in the site language (gray-950,
   cyan accents, mono labels). Flow: vulnerability ticket detection → codebase
   analysis → Claude API → generated fix PR → CircleCI cron pipeline → human
   review/merge. Edges draw in on scroll via Framer Motion path animation;
   nodes stagger in. Must degrade gracefully (visible, un-animated) under
   reduced motion. Responsive: vertical flow layout on mobile.
4. **How it works** — numbered steps with terminal-style mono markers.
5. **Outcomes** — count-up metrics row (reuse the `Metrics` treatment; extract a
   shared `CountUpValue` if practical).
6. **Footer CTA** — back to home + Get In Touch.

## 3. Home page integration

- Full-width featured card at the top of the Projects section: animated gradient
  border, small static diagram thumbnail, "Read the case study →" linking to
  `/work/ai-remediation`. New UI copy only (no changes to existing text).
- One compact text link beneath the hero CTAs pointing at the case study.

## 4. Visual drama pass (home)

- **Magnetic hover** on the three hero CTAs: cursor-tracking translate (a few px),
  desktop pointer devices only, spring-back on leave.
- **Animated gradient border** on the two featured cards (Wellthy experience card,
  new case-study card): slow rotating conic gradient on a pseudo-element/border
  mask. Subtle — accent cyan against near-black, no rainbow.
- **Hero choreography refinement**: keep current stagger; add subtle
  blur(8px)→blur(0) on the headline entrance.
- **Route transitions** between home and case study (AnimatePresence).

## 5. Polish & performance pass

- `MotionConfig reducedMotion="user"` at the app root; CSS fallbacks for
  shimmer/scanlines already partially exist — audit all animations.
  `ParticleField` renders a single static frame (no RAF loop) under
  `prefers-reduced-motion`.
- Fonts: Google Fonts already use `display=swap` + preconnect. Trim unused
  weights (audit usage of 300/900) if cheap; otherwise leave.
- Images (Book cover, Photography grid): `loading="lazy"`, `decoding="async"`,
  explicit width/height to prevent CLS.
- Meta: per-route `document.title` + description (small head-manager hook, no new
  dependency); `og:image` + Twitter card tags with a designed static preview
  image (1200×630 PNG in `public/`); `og:url`.
- Accessibility: skip-to-content link, `:focus-visible` rings sitewide,
  aria-labels on icon-only buttons, contrast audit of slate-500/600 text on
  gray-950 (bump where failing WCAG AA).
- Target: Lighthouse ≥95 in Performance, Accessibility, Best Practices, SEO.

## 6. Verification

- `npx tsc --noEmit` after each step; production build passes.
- Browser verification (preview tools) at desktop and mobile widths for both
  routes; reduced-motion spot check via emulation.
- Prove the Pages fallback: `vite preview`, then direct-load
  `/work/ai-remediation` and a junk URL.
- Content gate: user reviews all case-study prose before ship.

## Risks / notes

- The Photography/Book/Clients/Certifications/Contact/Footer sections have not
  been audited yet in this effort; image-polish items there are discovery work.
- `og:image` requires an absolute URL to render in link previews — confirm the
  production domain during implementation.
- Anchor scrolling after cross-route navigation is a known React Router footgun;
  handle explicitly (effect that scrolls to `location.hash` target on mount).
