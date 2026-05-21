import { useSyncExternalStore } from "react";
import { languagePreference } from "../lib/device/language";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("languagepreferencechange", onStoreChange);
  return () =>
    window.removeEventListener("languagepreferencechange", onStoreChange);
}

function getSnapshot(): string {
  return languagePreference;
}

/** React hook for `languagePreference` (primary device language). */
export function useLanguagePreference(): string {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
