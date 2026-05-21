export const PALETTE_COLOR_TOKENS = [
  "white",
  "shade-lightest",
  "shade-light",
  "shade-midtone",
  "shade-dark",
  "shade-darkest",
  "black",
  "accent",
] as const;

export type PaletteColorToken = (typeof PALETTE_COLOR_TOKENS)[number];

export function paletteColorVar(token: PaletteColorToken): string {
  return `var(--color-${token})`;
}
