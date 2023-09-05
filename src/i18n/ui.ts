export const languages = {
  en: "English",
  pl: "Polski",
};

export const languageKeys = Object.keys(languages) as Array<
  keyof typeof languages
>;
export const defaultLang = "en";

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.twitter": "Twitter",
    "nav.insight": "Insights",
    "nav.personal": "Personal",
    "nav.about-me": "About me",
    "nav.projects": "Projects",
  },
  pl: {
    "nav.home": "Accueil",
    "nav.insight": "Notatki",
    "nav.about-me": "O mnie",
    "nav.personal": "Osobiste",
    "nav.projects": "Projekty",
  },
} as const;
