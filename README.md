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

- `src/components/` — one file per section (Hero, About, Services, Projects, Skills, Approach, WhyWorkWithMe, Contact, Footer) plus `Nav` and a shared `Container` layout wrapper. Styling is Tailwind utility classes directly on elements — no per-component CSS files.
- `tailwind.config.js` — design tokens (colors, fonts) used throughout: `ink`, `ink-soft`, `paper`, `paper-dim`, `line`, `gold`, `gold-deep`, `live`, `coming`.
- `src/index.css` — Tailwind directives, plus the small bits that aren't cleanly expressible as static utilities: the scroll-reveal transition (driven by a JS-toggled class) and `prefers-reduced-motion` overrides.
- `src/data/projects.js` — VILZOO, AERONERO (live) and THANGAM, CHILL, SYNZOO (coming soon). Edit this file to update project copy/status/links without touching components.
- `src/hooks/useReveal.js` — small IntersectionObserver hook that drives the scroll-reveal animations; respects `prefers-reduced-motion`.

## Notes

- Update the LinkedIn/GitHub links in `Contact.jsx` / `Footer.jsx` once you have real URLs — none are included yet since none were provided.
- Swap the placeholder project visual (`ProjectCard.jsx`) for real screenshots when you have them — add images under `public/projects/` and replace the `project-visual` block with an `<img>` (use `loading="lazy"` for anything below the fold).
