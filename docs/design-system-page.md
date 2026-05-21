# Design system page (`/design-system`)

Internal reference for foundations and (later) approved components. Not part of the main app UX.

## URL

- Path: `/design-system`
- Implementation: [`src/screens/design-system/`](../src/screens/design-system/)

## Copy rules (exception)

| Scope | Where | Copy rule |
|-------|--------|-----------|
| Main app | `src/screens/*` except `design-system/` | All user-visible strings in [`src/content/`](../src/content/) |
| Design system chrome | `src/screens/design-system/**` | Organizer strings may be **hardcoded** in JSX (section titles, token names, control labels, size labels, etc.) |
| Approved app components | `src/components/` | Use `src/content/` for real UI text, even when rendered on the design system page |

**Hardcoded on the design system page is OK:** section headings, palette token ids, spacing/radius labels, toolbar control labels, icon registry keys, scenario group titles.

**Still use locales when:** a showcased component displays copy that will ship in the app (buttons, nav labels, game strings, etc.).

## Components whitelist

- One-off markup in `src/screens/design-system/` does **not** require an entry in [`components.md`](./components.md).
- Moving markup into `src/components/` for app reuse **does** require approval in `components.md`.

## Styling

- Design tokens only from [`src/styles/theme.css`](../src/styles/theme.css).
- Page layout lives in [`src/screens/design-system/design-system.css`](../src/screens/design-system/design-system.css) (not new global tokens).

## Preferences

Appearance and language controls on the design system page use the same hooks and `localStorage` settings as the main app, so toggles update `data-appearance` and `lang` on `<html>` globally.
