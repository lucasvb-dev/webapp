import { useSyncExternalStore } from "react";
import {
  appearancePreference,
  type AppearancePreference,
} from "../lib/device/appearance";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("appearancepreferencechange", onStoreChange);
  return () =>
    window.removeEventListener("appearancepreferencechange", onStoreChange);
}

function getSnapshot(): AppearancePreference {
  return appearancePreference;
}

/** React hook for `appearancePreference` (stays in sync when OS theme changes). */
export function useAppearancePreference(): AppearancePreference {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
