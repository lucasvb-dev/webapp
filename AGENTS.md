# PWA starter — agent context

Small personal web app template. Build **step by step**; ask when unclear.

## Stack

- React + Vite + TypeScript
- PWA via `vite-plugin-pwa` (offline precache, auto-update)
- Design tokens in `src/styles/theme.css`
- [Motion](https://motion.dev) for animations that fit poorly in CSS only—not for every interaction

## Key paths

| Path | Purpose |
|------|---------|
| `src/lib/appId.ts` | `APP_ID` — storage prefix, IndexedDB name, route events (change when forking) |
| `src/styles/theme.css` | Design tokens (colors, spacing, type, motion, etc.) |
| `src/content/` | All user-visible copy |
| `src/components/` | Approved components only — see `docs/components.md` |
| `src/screens/` | Page-level composition |
| `src/hooks/` | Logic separated from UI |
| `src/lib/storage/` | Offline preferences (`localStorage`) and images (`IndexedDB`) |
| `src/lib/device/` | Globals: `appearancePreference`, `languagePreference` |
| `src/lib/pwa/` | `promptAddToHomeScreen`, install prompt capture |
| `docs/pwa.md` | PWA / offline reference |
| `docs/components.md` | Component whitelist |
| `docs/design-system-page.md` | `/design-system` reference — copy exception for design system chrome |
| `docs/assets.md` | Asset inventory |
| `src/screens/design-system/` | Design system gallery at `/design-system` |
| `.cursor/rules/` | Full project rules for Cursor |
| `TEMPLATE.md` | Checklist after cloning this repo |

## Rules (summary)

1. No hardcoded visual values — use tokens from `theme.css`.
2. No invented assets — see `docs/assets.md`.
3. No new reusable components without `docs/components.md` approval.
4. All copy in `src/content/` — except organizer/chrome strings on the design system page; see `docs/design-system-page.md`.
5. Logic in hooks/lib; presentation in components/screens.
6. Design system consistency over speed; ask instead of assuming.

## Colors (palette only)

- **Palette tokens** in `theme.css` `:root`: `--color-white`, `--color-black`, `--color-accent`, `--color-shade-lightest`, `--color-shade-light`, `--color-shade-midtone`, `--color-shade-dark`, `--color-shade-darkest`.
- **Do not** add extra semantic aliases (`--color-text-primary`, etc.) or `icon-color-*` utilities. Pick a palette token for each use (`color` prop on `Icon`, `paletteColorVar()`, or `var(--color-*)` in CSS).
- **CSS:** `color: var(--color-accent);` (or a utility class that references one palette token).
- **Static files** (`index.html`, `vite.config.ts` manifest): cannot read CSS variables; keep hex in sync with the matching `--color-*` token manually, or document the pairing in a comment.
- **iOS status bar** (installed PWA): `black-translucent` in `index.html`; icon color follows **pixels behind the bar** at the top of the viewport.

See `.cursor/rules/` for authoritative detail.
