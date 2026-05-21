# Icons

Single-color SVGs used as React components via `?react` (SVGR).

## Add an icon

1. Export SVG into this folder (e.g. `close.svg`).
2. Use `fill="currentColor"` (or `stroke="currentColor"`) on paths — no `#hex` fills.
3. Open `index.ts`:
   - `import CloseIcon from "./close.svg?react";`
   - Add `close: CloseIcon` to the `icons` object.
4. Document the file in `docs/assets.md`.
5. Use: `<Icon name="close" color="accent" />` — omit `width` and `height` to keep the SVG’s designed dimensions; pass either or both in px when you need an override.

`color` is a palette token from `src/lib/theme/paletteColor.ts`.
