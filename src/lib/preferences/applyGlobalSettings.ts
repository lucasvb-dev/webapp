import {
  getEffectiveAppearance,
  initAppearanceSetting,
} from "./appearanceSettings";
import { getEffectiveLanguage, initLanguageSetting } from "./languageSettings";

function applyGlobals(): void {
  const root = document.documentElement;
  const nextAppearance = getEffectiveAppearance();
  const nextLang = getEffectiveLanguage();

  if (root.dataset.appearance !== nextAppearance) {
    root.dataset.appearance = nextAppearance;
  }

  if (root.lang !== nextLang) {
    root.lang = nextLang;
  }
}

/**
 * Applies effective appearance/language globally and keeps document root in sync.
 */
export function initGlobalSettings(): () => void {
  const stopAppearance = initAppearanceSetting();
  const stopLanguage = initLanguageSetting();

  const sync = () => {
    applyGlobals();
  };

  window.addEventListener("appearancesettingchange", sync);
  window.addEventListener("languagesettingchange", sync);
  applyGlobals();

  return () => {
    stopAppearance();
    stopLanguage();
    window.removeEventListener("appearancesettingchange", sync);
    window.removeEventListener("languagesettingchange", sync);
  };
}
