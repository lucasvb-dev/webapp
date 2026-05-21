import { useAppearanceSettings } from "../../hooks/useAppearanceSettings";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import type { AppearanceSetting } from "../../lib/preferences/appearanceSettings";
import type { LanguageSetting } from "../../lib/preferences/languageSettings";

const APPEARANCE_OPTIONS: { value: AppearanceSetting; label: string }[] = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

const LANGUAGE_OPTIONS: { value: LanguageSetting; label: string }[] = [
  { value: "system", label: "System" },
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "ja", label: "Japanese" },
  { value: "pt", label: "Portuguese" },
];

export function DesignSystemToolbar() {
  const appearance = useAppearanceSettings();
  const language = useLanguageSettings();

  return (
    <footer className="design-system__toolbar">
      <div className="design-system__toolbar-controls">
        <select
          id="design-system-appearance"
          className="design-system__toolbar-select text-caption"
          aria-label="Appearance"
          value={appearance.setting}
          onChange={(event) =>
            appearance.setSetting(event.target.value as AppearanceSetting)
          }
        >
          {APPEARANCE_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <select
          id="design-system-language"
          className="design-system__toolbar-select text-caption"
          aria-label="Language"
          value={language.setting}
          onChange={(event) =>
            language.setSetting(event.target.value as LanguageSetting)
          }
        >
          {LANGUAGE_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </footer>
  );
}
