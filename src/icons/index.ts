/**
 * Icon registry — add new SVGs here after placing the file in this folder.
 *
 * 1. Add `your-icon.svg` with fill="currentColor" on shapes (no hardcoded hex).
 * 2. Import: import YourIcon from "./your-icon.svg?react";
 * 3. Add to `icons` below: yourIcon: YourIcon,
 */
import type { FunctionComponent, SVGProps } from "react";

import IconAddIcon from "./icon-add.svg?react";
import IconAppearanceIcon from "./icon-appearance.svg?react";
import IconCheckIcon from "./icon-check.svg?react";
import IconDragIcon from "./icon-drag.svg?react";
import IconHowIcon from "./icon-how.svg?react";
import IconLanguageIcon from "./icon-language.svg?react";
import IconPlusIcon from "./icon-plus.svg?react";
import IconSwipeIcon from "./icon-swipe.svg?react";

export type IconComponent = FunctionComponent<SVGProps<SVGSVGElement>>;

export const icons = {
  iconAdd: IconAddIcon,
  iconAppearance: IconAppearanceIcon,
  iconCheck: IconCheckIcon,
  iconDrag: IconDragIcon,
  iconHow: IconHowIcon,
  iconLanguage: IconLanguageIcon,
  iconPlus: IconPlusIcon,
  iconSwipe: IconSwipeIcon,
} as const satisfies Record<string, IconComponent>;

export type IconName = keyof typeof icons;
