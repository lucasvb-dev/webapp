import { languagePreference } from "../device/language";
import { STORAGE_PREFIX } from "../appId";
import { getPreference, setPreference } from "../storage/preferences";
import { normalizeToAppLocale, type AppLocale } from "./languageLocale";

export type LanguageSetting = "system" | AppLocale;

const STORAGE_KEY = "language-setting";

export let languageSetting: LanguageSetting = readLanguageSetting();

function readLanguageSetting(): LanguageSetting {
  const stored = getPreference(STORAGE_KEY);

  if (
    stored === "system" ||
    stored === "en" ||
    stored === "es" ||
    stored === "fr" ||
    stored === "ja" ||
    stored === "pt"
  ) {
    return stored;
  }

  return "system";
}

function syncLanguageSetting(): void {
  const next = readLanguageSetting();

  if (next !== languageSetting) {
    languageSetting = next;
  }

  window.dispatchEvent(new CustomEvent("languagesettingchange"));
}

export function getEffectiveLanguage(): AppLocale {
  if (languageSetting === "system") {
    return normalizeToAppLocale(languagePreference);
  }

  return languageSetting;
}

export function setLanguageSetting(next: LanguageSetting): void {
  setPreference(STORAGE_KEY, next);
  syncLanguageSetting();
}

export function initLanguageSetting(): () => void {
  const onDeviceLanguageChange = () => {
    if (languageSetting === "system") {
      window.dispatchEvent(new CustomEvent("languagesettingchange"));
    }
  };

  const onStorageChange = (event: StorageEvent) => {
    if (event.key === `${STORAGE_PREFIX}${STORAGE_KEY}`) {
      syncLanguageSetting();
    }
  };

  window.addEventListener("languagepreferencechange", onDeviceLanguageChange);
  window.addEventListener("storage", onStorageChange);
  syncLanguageSetting();

  return () => {
    window.removeEventListener("languagepreferencechange", onDeviceLanguageChange);
    window.removeEventListener("storage", onStorageChange);
  };
}
