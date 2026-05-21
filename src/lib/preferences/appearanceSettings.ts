import {
  appearancePreference,
  type AppearancePreference,
} from "../device/appearance";
import { STORAGE_PREFIX } from "../appId";
import { getPreference, setPreference } from "../storage/preferences";

export type AppearanceSetting = "system" | AppearancePreference;

const STORAGE_KEY = "appearance-setting";

export let appearanceSetting: AppearanceSetting = readAppearanceSetting();

function readAppearanceSetting(): AppearanceSetting {
  const stored = getPreference(STORAGE_KEY);

  if (stored === "light" || stored === "dark" || stored === "system") {
    return stored;
  }

  return "system";
}

function syncAppearanceSetting(): void {
  const next = readAppearanceSetting();

  if (next !== appearanceSetting) {
    appearanceSetting = next;
  }

  window.dispatchEvent(new CustomEvent("appearancesettingchange"));
}

export function getEffectiveAppearance(): AppearancePreference {
  if (appearanceSetting === "system") {
    return appearancePreference;
  }

  return appearanceSetting;
}

export function setAppearanceSetting(next: AppearanceSetting): void {
  setPreference(STORAGE_KEY, next);
  syncAppearanceSetting();
}

export function initAppearanceSetting(): () => void {
  const onDeviceAppearanceChange = () => {
    if (appearanceSetting === "system") {
      window.dispatchEvent(new CustomEvent("appearancesettingchange"));
    }
  };

  const onStorageChange = (event: StorageEvent) => {
    if (event.key === `${STORAGE_PREFIX}${STORAGE_KEY}`) {
      syncAppearanceSetting();
    }
  };

  window.addEventListener("appearancepreferencechange", onDeviceAppearanceChange);
  window.addEventListener("storage", onStorageChange);
  syncAppearanceSetting();

  return () => {
    window.removeEventListener(
      "appearancepreferencechange",
      onDeviceAppearanceChange,
    );
    window.removeEventListener("storage", onStorageChange);
  };
}
