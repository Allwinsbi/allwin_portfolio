# Allwin S — Portfolio

React + Vite + Tailwind CSS, client-facing developer portfolio. No backend —
the contact CTA is a `mailto:` link, and project data lives in
`src/data/projects.js`.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

`npm run build` outputs a static `dist/` folder you can deploy anywhere
(Vercel, Netlify, GitHub Pages, etc.) — it's a static site with no server
required.

## Structure

- `src/components/` — one file per section (Hero, About, Experience, Services,
  Projects, Skills, Approach, WhyWorkWithMe, Contact, Footer) plus `Nav` and a
  shared `Container` layout wrapper. Styling is Tailwind utility classes
  directly on elements — no per-component CSS files.
- `tailwind.config.js` — design tokens: `ink` (near-black bg), `surface` /
  `surface-soft` (dark panels), `paper` / `paper-soft` (light text on dark),
  `line` (hairline borders), `red` / `red-deep` (accent), `live` / `coming`
  (status badge colors).
- `src/index.css` — Tailwind directives, plus the scroll-reveal transition
  (driven by a JS-toggled class) and `prefers-reduced-motion` overrides.
- `src/data/projects.js` — VILZOO, AERONERO (live) and THANGAM, CHILL, SYNZOO
  (coming soon). Edit this file to update project copy/status/links without
  touching components.
- `src/data/contact.js` — single source of truth for the email address and
  the pre-filled `mailto:` link used by every "Start a Project" CTA.
- `src/hooks/useReveal.js` — small IntersectionObserver hook that drives the
  scroll-reveal animations; respects `prefers-reduced-motion`.

## Project screenshots

`ProjectCard.jsx` looks for real screenshots at:

- `public/projects/vilzoo.png`
- `public/projects/aeronero.png`

Until those files exist, live project cards show a clean "Screenshot coming
soon" placeholder instead of a stock photo — this is intentional. Drop in
real screenshots (roughly 1600×1000, PNG or WebP, under ~300KB) to replace
the placeholder automatically; no code changes needed. Coming Soon projects
(THANGAM, CHILL, SYNZOO) intentionally have no screenshot slot, since showing
an image for a product that hasn't been built would be misleading — they
show a small category icon instead.

## Notes

- Every "Start a Project" CTA (nav, hero, contact) and the footer point to
  `mailto:info.vilzoo@gmail.com`. WhatsApp contact uses +91 9789365165
  (see `src/data/contact.js`).
- Add LinkedIn/GitHub links in `Footer.jsx` once you have real URLs — none
  are included since none were provided.
- Project statuses are exactly: VILZOO → Live, AERONERO → Live, THANGAM →
  Coming Soon, CHILL → Coming Soon, SYNZOO → Coming Soon. No completion
  percentages are shown anywhere, by design.
