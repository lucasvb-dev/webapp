# After cloning this template

Update these once for your project:

| Item | Where |
|------|--------|
| App id (storage, IndexedDB, events) | `src/lib/appId.ts` → `APP_ID` |
| npm package name | `package.json` → `name` |
| Page title & iOS home screen name | `index.html` → `<title>`, `apple-mobile-web-app-title` |
| PWA manifest name & description | `vite.config.ts` → `manifest` |
| User-facing copy | `src/content/locales/` |
| PWA icons & splashes | `public/icons/`, `public/splash/` — see [docs/assets.md](./docs/assets.md) |
| UI icons (optional) | `src/icons/` — see [docs/assets.md](./docs/assets.md) |

Then run `npm install` and `npm run dev`.

Deploy: [docs/deploy-netlify.md](./docs/deploy-netlify.md).
