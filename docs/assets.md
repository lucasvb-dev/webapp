# Assets

All icons and images are provided by the project owner. **Do not create or substitute assets in code.**

> Status: **pending** — document each asset here as it is uploaded.

## How to document an asset

For each file, add a row:

| File path | Usage | Notes |
|-----------|--------|-------|
| `public/...` | Where it appears in the app | Optional |

## Inventory

| File path | Usage | Notes |
|-----------|--------|-------|
| `public/icons/icon-192.png` | PWA manifest, favicon, Apple touch icon | **Placeholder** — replace with final design asset |
| `public/icons/icon-512.png` | PWA manifest, **Android splash icon** | **Placeholder** — replace with final design asset (512×512) |

### Fonts (Tommy)

| File path | Weight | Notes |
|-----------|--------|-------|
| `public/fonts/tommy_regular-webfont.woff2` | 400 | Prefer woff2; woff fallback |
| `public/fonts/tommy_regular-webfont.woff` | 400 | |
| `public/fonts/tommy_medium-webfont.woff2` | 500 | |
| `public/fonts/tommy_medium-webfont.woff` | 500 | |
| `public/fonts/tommy_black-webfont.woff2` | 900 | |
| `public/fonts/tommy_black-webfont.woff` | 900 | |

Loaded via `src/styles/theme.css`. Japanese glyph coverage depends on the font files — verify on the Typography section at `/design-system`.

### UI icons (SVG, React)

Place files in `src/icons/`, register in `src/icons/index.ts`. Use `fill="currentColor"`.

| File path | Registered name | Notes |
|-----------|-----------------|-------|
| `src/icons/*.svg` | see `src/icons/index.ts` | UI icons; use `fill="currentColor"` |

### iOS splash (portrait, all iPhones)

Replace each file at **exact** dimensions. See [pwa.md](./pwa.md).

| File path | Size (px) |
|-----------|-----------|
| `public/splash/splash-1179x2556.png` | 1179 × 2556 — **iPhone 15, 15 Pro**, 14 Pro, 16 |
| `public/splash/splash-1170x2532.png` | 1170 × 2532 — iPhone 12–14 |
| `public/splash/splash-1290x2796.png` | 1290 × 2796 — Plus / Pro Max (15, 16, etc.) |
| `public/splash/splash-1284x2778.png` | 1284 × 2778 |
| `public/splash/splash-1320x2868.png` | 1320 × 2868 — iPhone 16 Pro Max |
| `public/splash/splash-1206x2622.png` | 1206 × 2622 — iPhone 16 Pro |
| `public/splash/splash-1242x2688.png` | 1242 × 2688 |
| `public/splash/splash-828x1792.png` | 828 × 1792 |
| `public/splash/splash-1242x2208.png` | 1242 × 2208 |
| `public/splash/splash-1125x2436.png` | 1125 × 2436 |
| `public/splash/splash-750x1334.png` | 750 × 1334 |
| `public/splash/splash-640x1136.png` | 640 × 1136 |
