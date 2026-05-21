# PWA & offline

## Offline app shell

- **Service worker:** generated at build time by `vite-plugin-pwa` (Workbox).
- **Precache:** JS, CSS, HTML, icons, and other static build assets so the installed app works offline.
- **Splash images** are deployed under `/splash/` but are **not** service-worker precached (each file is ~2–3 MB; over Workbox’s default 2 MB limit). iOS still loads them by URL when launching from the home screen.
- **Updates:** `registerType: "autoUpdate"` refreshes the cache when a new build is deployed.

Test install and offline behavior on your **Netlify HTTPS URL** after deploy. See [deploy-netlify.md](./deploy-netlify.md). Local `npm run dev` is fine for development; install prompt is most reliable on the live Netlify site (Android Chrome).

## User data (offline)

| Kind | API | Storage |
|------|-----|---------|
| Text / settings | `setPreference`, `getPreference`, `setPreferenceJson`, `getPreferenceJson` | `localStorage` |
| Images / files | `saveImage`, `getImage`, `listImageIds`, `deleteImage` | `IndexedDB` |

Import from `src/lib/storage`.

## Device globals

| Global | Source | Module |
|--------|--------|--------|
| `appearancePreference` | `prefers-color-scheme` | `src/lib/device/appearance.ts` |
| `languagePreference` | `navigator.languages[0]` | `src/lib/device/language.ts` |

React hooks: `useAppearancePreference`, `useLanguagePreference`.

Initialized once via `initAppInfrastructure()` in `main.tsx`.

## Add to home screen (Android / Chromium)

```ts
import { promptAddToHomeScreen, isAddToHomeScreenAvailable } from "./lib/pwa/install";

if (isAddToHomeScreenAvailable()) {
  const result = await promptAddToHomeScreen();
}
```

Or `useAddToHomeScreen()` in a component. Not available on iOS Safari (use Share → Add to Home Screen manually).

## Splash screen

### Android

You **do not** upload separate splash images. Chrome builds the splash from the web manifest:

| Manifest field | Role |
|----------------|------|
| `background_color` | Splash background (match your design) |
| `theme_color` | Status bar / browser chrome |
| `name` | Text under the icon (on some versions) |
| Icons **512×512** | Center icon on the splash |

**Asset to design:** one **512×512** PNG app icon (`public/icons/icon-512.png`). Keep `background_color` in `vite.config.ts` aligned with the splash background.

### iOS (all iPhones, portrait only)

iOS uses `apple-touch-startup-image` in `index.html`. Each entry needs:

1. A **media query** matching the phone’s CSS viewport (not the physical pixel size).
2. A PNG at the **exact pixel size** in the filename.

**iPhone 15 / 15 Pro** use **393×852** CSS px → **1179×2556** PNG (`splash-1179x2556.png`). They do **not** use the older 390×844 / 1170×2532 size (iPhone 12–14).

| PNG file | Pixel size | Phones (portrait) |
|----------|------------|-------------------|
| `splash-1320x2868.png` | 1320 × 2868 | iPhone 16 Pro Max |
| `splash-1206x2622.png` | 1206 × 2622 | iPhone 16 Pro |
| `splash-1290x2796.png` | 1290 × 2796 | 14 Pro Max, 15 Plus, 15 Pro Max, 16 Plus |
| `splash-1179x2556.png` | **1179 × 2556** | **14 Pro, 15, 15 Pro, 16** |
| `splash-1284x2778.png` | 1284 × 2778 | 12–14 Pro Max, 14 Plus |
| `splash-1170x2532.png` | 1170 × 2532 | iPhone 12, 13, 14 |
| `splash-1242x2688.png` | 1242 × 2688 | XS Max, 11 Pro Max |
| `splash-828x1792.png` | 828 × 1792 | XR, 11 |
| `splash-1242x2208.png` | 1242 × 2208 | 8 Plus |
| `splash-1125x2436.png` | 1125 × 2436 | X, XS, 12/13 mini |
| `splash-750x1334.png` | 750 × 1334 | SE 2/3, 8 |
| `splash-640x1136.png` | 640 × 1136 | SE 1st gen, older small phones |

Fallback (no media): `splash-1179x2556.png`.

**Testing on iPhone**

1. Deploy to Netlify (HTTPS).
2. In Safari, open your image directly, e.g. `https://YOUR-SITE.netlify.app/splash/splash-1179x2556.png` — you must see the PNG, not the app HTML. If you see the app, the deploy or path is wrong.
3. Safari → Share → **Add to Home Screen** (not only a bookmark).
4. Open from the **home screen icon** (splash does not show when opening a normal Safari tab).
5. After changing splash images: **delete** the home screen icon and add again. iOS caches the splash from when you first added the icon.

**Media queries:** each `<link>` uses `screen and (device-width: …)` (required on many iOS versions).

## Status bar (iOS installed PWA)

- `apple-mobile-web-app-status-bar-style: black-translucent` in `index.html`.
- Time/battery icon color is inferred from **content behind the bar** at the top of the viewport. Static `theme-color` in `index.html` does not drive iOS icon color.

Keep `index.html` `theme-color` and `vite.config.ts` manifest colors aligned with palette tokens in `theme.css` (install/splash chrome on Android; optional for this project).

## Icons

Replace placeholder files in `public/icons/` before release. Manifest `theme_color` / `background_color` in `vite.config.ts` should match palette tokens in `theme.css` (see `AGENTS.md` → Colors).
