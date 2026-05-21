export type AppearancePreference = "light" | "dark";

/** Device appearance preference (`prefers-color-scheme`). Updated when the OS setting changes. */
export let appearancePreference: AppearancePreference = readAppearancePreference();

function readAppearancePreference(): AppearancePreference {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function initAppearancePreference(): () => void {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const sync = () => {
    appearancePreference = readAppearancePreference();
    window.dispatchEvent(new CustomEvent("appearancepreferencechange"));
  };

  mediaQuery.addEventListener("change", sync);
  sync();

  return () => mediaQuery.removeEventListener("change", sync);
}
