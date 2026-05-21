function readLanguagePreference(): string {
  const languages = navigator.languages;

  if (languages.length > 0) {
    return languages[0];
  }

  return navigator.language || "en";
}

/** Primary device/browser language (`navigator.languages[0]`). */
export let languagePreference: string = readLanguagePreference();

export function initLanguagePreference(): () => void {
  const sync = () => {
    const next = readLanguagePreference();

    if (next !== languagePreference) {
      languagePreference = next;
      window.dispatchEvent(new CustomEvent("languagepreferencechange"));
    }
  };

  window.addEventListener("languagechange", sync);
  sync();

  return () => window.removeEventListener("languagechange", sync);
}
