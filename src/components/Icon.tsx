import { icons, type IconName } from "../icons";
import { paletteColorVar, type PaletteColorToken } from "../lib/theme/paletteColor";

export type IconProps = {
  /** Registered icon id (filename without .svg). */
  name: IconName;
  /** Palette color token — applied as CSS `color`. Omit to inherit `color` from a parent. */
  color?: PaletteColorToken;
  /** Optional width in px. Omit to use the SVG file’s width. */
  width?: number;
  /** Optional height in px. Omit to use the SVG file’s height. */
  height?: number;
  /** Optional layout classes (not for color). */
  className?: string;
  /** Accessible name when the icon conveys meaning; omit for decorative icons. */
  label?: string;
};

/**
 * Single-color SVG icon. Color comes from the palette `color` prop (SVG uses currentColor).
 */
export function Icon({ name, color, width, height, className, label }: IconProps) {
  const Svg = icons[name];

  return (
    <Svg
      {...(width !== undefined ? { width } : {})}
      {...(height !== undefined ? { height } : {})}
      className={className}
      style={color !== undefined ? { color: paletteColorVar(color) } : undefined}
      focusable="false"
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    />
  );
}
