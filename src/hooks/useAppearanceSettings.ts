import { useSyncExternalStore } from "react";
import {
  appearanceSetting,
  getEffectiveAppearance,
  setAppearanceSetting,
  type AppearanceSetting,
} from "../lib/preferences/appearanceSettings";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("appearancesettingchange", onStoreChange);
  return () => window.removeEventListener("appearancesettingchange", onStoreChange);
}

function getSnapshot(): AppearanceSetting {
  return appearanceSetting;
}

export function useAppearanceSettings() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  return {
    setting: snapshot,
    effective: getEffectiveAppearance(),
    setSetting: setAppearanceSetting,
  };
}
