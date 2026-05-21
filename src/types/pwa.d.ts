interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

interface WindowEventMap {
  beforeinstallprompt: BeforeInstallPromptEvent;
  appearancepreferencechange: CustomEvent<void>;
  appearancesettingchange: CustomEvent<void>;
  languagepreferencechange: CustomEvent<void>;
  languagesettingchange: CustomEvent<void>;
  installpromptavailable: CustomEvent<void>;
  installpromptcleared: CustomEvent<void>;
}
