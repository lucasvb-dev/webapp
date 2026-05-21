let deferredInstallPrompt: BeforeInstallPromptEvent | null = null;

function notifyInstallPromptAvailable() {
  window.dispatchEvent(new CustomEvent("installpromptavailable"));
}

function notifyInstallPromptCleared() {
  window.dispatchEvent(new CustomEvent("installpromptcleared"));
}

export function initInstallPrompt(): () => void {
  const onBeforeInstallPrompt = (event: BeforeInstallPromptEvent) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    notifyInstallPromptAvailable();
  };

  const onAppInstalled = () => {
    deferredInstallPrompt = null;
    notifyInstallPromptCleared();
  };

  window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
  window.addEventListener("appinstalled", onAppInstalled);

  return () => {
    window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.removeEventListener("appinstalled", onAppInstalled);
  };
}

/** Whether the browser has offered an install prompt (mainly Android Chrome). */
export function isAddToHomeScreenAvailable(): boolean {
  return deferredInstallPrompt !== null;
}

/**
 * Triggers the native "Add to home screen" flow when available.
 * Returns `unavailable` when the prompt was never captured (iOS, desktop, or criteria not met).
 */
export async function promptAddToHomeScreen(): Promise<
  "accepted" | "dismissed" | "unavailable"
> {
  if (!deferredInstallPrompt) {
    return "unavailable";
  }

  await deferredInstallPrompt.prompt();
  const { outcome } = await deferredInstallPrompt.userChoice;

  deferredInstallPrompt = null;
  notifyInstallPromptCleared();

  return outcome === "accepted" ? "accepted" : "dismissed";
}
