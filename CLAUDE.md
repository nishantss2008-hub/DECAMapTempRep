# FL DECA Map — Project Notes

Single-page React + Vite app: interactive Florida map showing DECA districts and State Officer info.

## Stack
- React 18, Vite, plain CSS (no Tailwind/UI lib)
- No backend, no router, no tests
- Data is static in `src/MapData.js`

## Files (only ones that matter)
- `src/App.jsx` — all UI + state (map, search, panel, legend)
- `src/App.css` — all styles, scoped under `#fldeca-map-root`
- `src/MapData.js` — DISTRICTS, SCHOOLS, FL_OUTLINE_PATH, DISTRICT_GEOM, VB_W, VB_H
- `src/index.css`, `src/main.jsx`, `index.html` — boilerplate, rarely touched

## Conventions
- CSS classes: `fldeca-*` prefix, all selectors nested under `#fldeca-map-root`
- Colors: use existing CSS vars (`--deca-blue`, `--deca-gold`, etc.) — don't introduce new palette
- Text color on colored backgrounds: use `readableOn(hex)` in App.jsx, not hardcoded comparisons
- SVG viewBox uses `VB_W`/`VB_H` from MapData; never hardcode map dimensions

## Commands
- `npm run dev` — vite dev (auto-picks port if 5173 busy)
- `npm run build` — production build
- No test/lint script wired up beyond `eslint.config.js`

## Working preferences
- Edit existing files; don't add new files/components for small changes
- Don't add comments unless the *why* is non-obvious
- Don't add dependencies — vanilla React is enough
- Don't write README/docs unless asked
- Keep responses short; skip recaps of diffs the user can read
