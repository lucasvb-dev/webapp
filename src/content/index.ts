import { en } from "./locales/en";
import { es } from "./locales/es";
import { fr } from "./locales/fr";
import { ja } from "./locales/ja";
import { pt } from "./locales/pt";
import type { AppContent } from "./types";
import {
  normalizeToAppLocale,
  type AppLocale,
} from "../lib/preferences/languageLocale";

/**
 * Central copy for the app. All user-visible strings live here (or in modules imported from here).
 * Do not hardcode UI strings in components.
 */
export const contentByLocale: Record<AppLocale, AppContent> = {
  en,
  es,
  fr,
  ja,
  pt,
};

export function resolveLocaleFromLanguageTag(languageTag: string): AppLocale {
  return normalizeToAppLocale(languageTag);
}

export function getContentForLocale(locale: AppLocale): AppContent {
  return contentByLocale[locale] ?? contentByLocale.en;
}
