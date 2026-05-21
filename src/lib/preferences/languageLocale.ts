export const APP_LOCALES = ["en", "es", "fr", "ja", "pt"] as const;

export type AppLocale = (typeof APP_LOCALES)[number];

const DEFAULT_LOCALE: AppLocale = "en";

/**
 * Normalize browser language tags (en-US, pt-BR, etc.) to app locales.
 * The app intentionally supports one generic locale per language.
 */
export function normalizeToAppLocale(languageTag: string): AppLocale {
  const [base] = languageTag.toLowerCase().split("-");

  switch (base) {
    case "en":
    case "es":
    case "fr":
    case "ja":
    case "pt":
      return base;
    default:
      return DEFAULT_LOCALE;
  }
}
