# PWA starter

React + Vite + TypeScript template for a small personal PWA: design tokens, offline storage, appearance/language prefs, install prompt, and a design system gallery.

**Forking?** See [TEMPLATE.md](./TEMPLATE.md) for what to rename first.

## Project conventions

- **Rules for AI:** see [AGENTS.md](./AGENTS.md) and [`.cursor/rules/`](./.cursor/rules/)
- **Components:** [docs/components.md](./docs/components.md)
- **Assets:** [docs/assets.md](./docs/assets.md)
- **Design tokens:** [src/styles/theme.css](./src/styles/theme.css)
- **Copy:** [src/content/](./src/content/)

## Development locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Deploy on Netlify for testing on device

Hosting is configured in **`netlify.toml`**. Netlify runs `npm run build` and publishes the **`dist`** folder.

**Step-by-step (GitHub → Netlify):** see **[docs/deploy-netlify.md](./docs/deploy-netlify.md)**.

Short version:

1. Push this project to GitHub.
2. In [Netlify](https://app.netlify.com), import that repo (settings are picked up from `netlify.toml`).
3. Open the `https://….netlify.app` URL on your phone to test install and offline behavior.

## PWA & offline

See [docs/pwa.md](./docs/pwa.md) for service worker, local storage APIs, device globals, and install prompt.
