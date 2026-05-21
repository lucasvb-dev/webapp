import { useCallback, useSyncExternalStore } from "react";
import {
  isAddToHomeScreenAvailable,
  promptAddToHomeScreen,
} from "../lib/pwa/install";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("installpromptavailable", onStoreChange);
  window.addEventListener("installpromptcleared", onStoreChange);
  window.addEventListener("appinstalled", onStoreChange);

  return () => {
    window.removeEventListener("installpromptavailable", onStoreChange);
    window.removeEventListener("installpromptcleared", onStoreChange);
    window.removeEventListener("appinstalled", onStoreChange);
  };
}

function getSnapshot(): boolean {
  return isAddToHomeScreenAvailable();
}

/**
 * React hook for install availability + `promptAddToHomeScreen` action.
 * Prefer importing `promptAddToHomeScreen` directly when not in a component.
 */
export function useAddToHomeScreen() {
  const isAvailable = useSyncExternalStore(subscribe, getSnapshot, () => false);
  const promptInstall = useCallback(() => promptAddToHomeScreen(), []);

  return { isAvailable, promptInstall };
}
