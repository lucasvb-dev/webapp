# Components

Approved reusable components for this project. **Do not create components that are not listed here** without explicit approval.

The design system gallery at `/design-system` (`src/screens/design-system/`) uses one-off section markup. That folder is **not** the component whitelist; only `src/components/` is.

## Approved components

- **`Icon`** (`src/components/Icon.tsx`) — single-color SVG icons via `currentColor`. Pass a palette `color` token (e.g. `color="accent"`), or omit `color` to inherit from the parent. Optional `width` / `height` in px; omit both to use each SVG’s native dimensions. Register SVGs in `src/icons/index.ts`.

## Planned components

<!-- Add each component as it is approved from the design, for example:

- `Button` — primary actions
- `Card` — content panel

-->

_None listed yet beyond Icon._
