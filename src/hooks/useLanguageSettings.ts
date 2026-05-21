import { useSyncExternalStore } from "react";
import {
  getEffectiveLanguage,
  languageSetting,
  setLanguageSetting,
  type LanguageSetting,
} from "../lib/preferences/languageSettings";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("languagesettingchange", onStoreChange);
  return () => window.removeEventListener("languagesettingchange", onStoreChange);
}

function getSnapshot(): LanguageSetting {
  return languageSetting;
}

export function useLanguageSettings() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  return {
    setting: snapshot,
    effective: getEffectiveLanguage(),
    setSetting: setLanguageSetting,
  };
}
