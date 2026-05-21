import type { IconName } from "../../icons";

export {
  PALETTE_COLOR_TOKENS,
  paletteColorVar,
  type PaletteColorToken,
} from "../../lib/theme/paletteColor";

/** Registry order for the design system icons grid. */
export const DESIGN_SYSTEM_ICON_NAMES: IconName[] = [
  "iconHow",
  "iconLanguage",
  "iconAppearance",
  "iconDrag",
  "iconAdd",
  "iconPlus",
  "iconCheck",
];

export const DESIGN_SYSTEM_ILLUSTRATION_NAMES: IconName[] = ["iconSwipe"];

export const SPACE_TOKENS = [
  2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56,
] as const;

export type SpaceToken = (typeof SPACE_TOKENS)[number];

export function spaceVar(token: SpaceToken): string {
  return `var(--space-${token})`;
}

export const RADIUS_TOKENS = ["small", "medium", "large", "full"] as const;

export type RadiusToken = (typeof RADIUS_TOKENS)[number];

export function radiusVar(token: RadiusToken): string {
  return `var(--radius-${token})`;
}

export const TEXT_STYLE_CLASSES = [
  "text-title-large",
  "text-title-medium",
  "text-title-small",
  "text-title-smallest",
  "text-body-strong",
  "text-body",
  "text-caption-strong",
  "text-caption",
] as const;

export type TextStyleClass = (typeof TEXT_STYLE_CLASSES)[number];

export const FONT_WEIGHT_CLASSES = [
  "font-weight-regular",
  "font-weight-medium",
  "font-weight-black",
] as const;

export type FontWeightClass = (typeof FONT_WEIGHT_CLASSES)[number];
