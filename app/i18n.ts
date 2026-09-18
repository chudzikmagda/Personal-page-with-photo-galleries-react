import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import * as enTranslations from "./i18n/en/";
import * as plTranslations from "./i18n/pl/";

const initialLng = "pl";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    pl: { translation: plTranslations },
  },
  lng: initialLng,
  fallbackLng: "en",
  supportedLngs: ["en", "pl"],
  load: "languageOnly",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
