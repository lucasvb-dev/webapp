import { STORAGE_PREFIX } from "../appId";

function preferenceKey(key: string): string {
  return `${STORAGE_PREFIX}${key}`;
}

/** Save a text preference locally (available offline). */
export function setPreference(key: string, value: string): void {
  localStorage.setItem(preferenceKey(key), value);
}

/** Read a text preference, or `null` if missing. */
export function getPreference(key: string): string | null {
  return localStorage.getItem(preferenceKey(key));
}

/** Remove a text preference. */
export function removePreference(key: string): void {
  localStorage.removeItem(preferenceKey(key));
}

/** Save structured preferences as JSON (available offline). */
export function setPreferenceJson<T>(key: string, value: T): void {
  localStorage.setItem(preferenceKey(key), JSON.stringify(value));
}

/** Read structured preferences, or `null` if missing or invalid JSON. */
export function getPreferenceJson<T>(key: string): T | null {
  const raw = localStorage.getItem(preferenceKey(key));

  if (raw === null) {
    return null;
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

/** List preference keys created by this app (without the internal prefix). */
export function listPreferenceKeys(): string[] {
  const keys: string[] = [];

  for (let index = 0; index < localStorage.length; index += 1) {
    const storageKey = localStorage.key(index);

    if (storageKey?.startsWith(STORAGE_PREFIX)) {
      keys.push(storageKey.slice(STORAGE_PREFIX.length));
    }
  }

  return keys;
}
