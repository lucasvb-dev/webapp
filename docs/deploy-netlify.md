# Deploy on Netlify

Netlify hosts your site on the internet over **HTTPS** (required for PWA install and offline mode).

You only do the **one-time setup** below. After that, every `git push` to your main branch can redeploy the site automatically.

---

## One-time setup (about 10 minutes)

### A. Put your code on GitHub (if it is not there yet)

1. Create a repository on [github.com](https://github.com) (e.g. `my-pwa-app`).
2. In Terminal, from your project folder:

```bash
cd path/to/your-project
git add .
git commit -m "Prepare for Netlify deploy"
git remote add origin https://github.com/YOUR_USERNAME/my-pwa-app.git
git push -u origin main
```

Replace `YOUR_USERNAME` and the repo name with yours. Skip steps you already did.

### B. Connect the repo to Netlify

1. Log in at [app.netlify.com](https://app.netlify.com).
2. Click **Add new site** → **Import an existing project**.
3. Choose **GitHub** and authorize Netlify if asked.
4. Select your repository.
5. Netlify will read **`netlify.toml`** in the repo. You should see:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy site**.

Netlify installs dependencies, runs the build, and uploads the `dist` folder. Wait until the deploy shows **Published**.

### C. Open your live URL

Netlify gives you a URL like:

`https://random-name-123.netlify.app`

Use that HTTPS link on your phone (Android Chrome) to test appearance, language, and **Add to home screen**.

You can rename the site under **Site configuration → Domain management**.

---

## What happens on every update later

1. You change code on your computer.
2. You commit and push to GitHub:

```bash
git add .
git commit -m "Describe your change"
git push
```

3. Netlify detects the push, builds again, and updates the live site. You do not run `npm run build` on Netlify manually.

---

## Optional: test the production build on your computer

This is **not** the same as Netlify. It only checks that the project builds:

```bash
npm install
npm run build
npm run preview
```

Then open the URL shown in the terminal (usually `http://localhost:4173`). PWA install is still most reliable on the real Netlify HTTPS URL.

---

## Troubleshooting

| Problem | What to try |
|--------|-------------|
| Build failed on Netlify | Open the deploy log on Netlify; fix the error (often a TypeScript or missing file issue). |
| Install button always disabled | Open the **Netlify HTTPS** URL on Android Chrome, not `file://` or plain `http://` on another host. |
| Old version after deploy | Hard refresh, or close the tab and reopen the Netlify URL. |
| 404 on refresh | `netlify.toml` redirects should fix this; confirm the file was pushed to GitHub. |
