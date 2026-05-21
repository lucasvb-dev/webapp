import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icons/**/*", "splash/**/*", "fonts/**/*"],
      manifest: {
        name: "My App",
        short_name: "My App",
        description: "Personal PWA — update name and description in vite.config.ts when forking.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        // Static hex — align with --color-* in src/styles/theme.css (see AGENTS.md)
        theme_color: "#000000",
        background_color: "#000000",
        icons: [
          {
            src: "icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,woff2,webmanifest}"],
        // Splash PNGs are ~2–3 MB each; Workbox default limit is 2 MB.
        // They stay in dist/ as static files (iOS loads them by URL). Not precached.
        globIgnores: ["**/splash/**"],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        navigateFallback: "index.html",
        cleanupOutdatedCaches: true,
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
