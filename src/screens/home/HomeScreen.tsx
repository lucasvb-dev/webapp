import { useState } from "react";
import { getContentForLocale } from "../../content";
import { useAddToHomeScreen } from "../../hooks/useAddToHomeScreen";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import { navigateTo } from "../../lib/routing/appRoute";
import "./home-screen.css";

type InstallMessage = "accepted" | "dismissed" | null;

export default function HomeScreen() {
  const language = useLanguageSettings();
  const content = getContentForLocale(language.effective);
  const { isAvailable, promptInstall } = useAddToHomeScreen();
  const [installMessage, setInstallMessage] = useState<InstallMessage>(null);

  async function handleInstallClick() {
    const result = await promptInstall();

    if (result === "accepted") {
      setInstallMessage("accepted");
      return;
    }

    if (result === "dismissed") {
      setInstallMessage("dismissed");
    }
  }

  return (
    <main className="home-screen">
      <p>
        <a
          href="/design-system"
          onClick={(event) => {
            event.preventDefault();
            navigateTo("/design-system");
          }}
        >
          {content.home.designSystemLink}
        </a>
      </p>

      <p>
        <button type="button" onClick={handleInstallClick} disabled={!isAvailable}>
          {content.home.installButton}
        </button>
      </p>

      {!isAvailable ? <p>{content.home.installUnavailable}</p> : null}

      {installMessage === "accepted" ? (
        <p>{content.home.installAccepted}</p>
      ) : null}

      {installMessage === "dismissed" ? (
        <p>{content.home.installDismissed}</p>
      ) : null}
    </main>
  );
}
