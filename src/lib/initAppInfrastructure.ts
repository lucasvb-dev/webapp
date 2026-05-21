import { initAppearancePreference, initLanguagePreference } from "./device";
import { initGlobalSettings } from "./preferences/applyGlobalSettings";
import { initInstallPrompt } from "./pwa/install";

let teardown: (() => void) | null = null;

/** Wire PWA install capture and device preference globals. Call once at startup. */
export function initAppInfrastructure(): void {
  if (teardown) {
    return;
  }

  const stopAppearance = initAppearancePreference();
  const stopLanguage = initLanguagePreference();
  const stopGlobalSettings = initGlobalSettings();
  const stopInstall = initInstallPrompt();

  teardown = () => {
    stopAppearance();
    stopLanguage();
    stopGlobalSettings();
    stopInstall();
    teardown = null;
  };
}
