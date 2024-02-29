import { getLanguage, setLanguage } from "@src/core";
import { AppLanguages } from "@src/enums";
import ar from "@src/translations/ar.json";
import en from "@src/translations/en.json";
import { restart } from "@src/utils";
import { getLocales } from "expo-localization";
import { use } from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";

const getLogMessage = (message: string) => `## I18n:: ${message}`;

const resources = {
  ar: { translation: ar },
  en: { translation: en },
};

const defaultLocale: string = AppLanguages.ENGLISH;

const i18n = use(initReactI18next);

const handleRestart = (locale: string) => {
  if (locale === AppLanguages.ARABIC && !I18nManager.isRTL) {
    setTimeout(() => restart(), 500);
  }

  if (locale === AppLanguages.ENGLISH && I18nManager.isRTL) {
    setTimeout(() => restart(), 500);
  }
};

export const setI18nConfig = async () => {
  console.info(getLogMessage("setI18nConfig"));

  await i18n.init({
    debug: process.env.ENABLE_LOCAL_LOG === "true",
    compatibilityJSON: "v3",
    resources,
    lng: defaultLocale,
    interpolation: {
      escapeValue: false,
    },
  });

  const locales = getLocales();

  if (Array.isArray(locales)) {
    await i18n.changeLanguage(locales[0].languageTag);
  }

  // Get user language.
  const userLanguage = await getLanguage();

  // Set the locale.
  await updateLanguage(userLanguage);
};

export const updateLanguage = async (language?: AppLanguages | null) => {
  console.info(getLogMessage("updateLanguage"), language);
  const locale = language ?? defaultLocale;

  // Save user language.
  if (language) {
    setLanguage(language);
  }

  // Set the locale.
  await i18n.changeLanguage(locale);
  I18nManager.allowRTL(locale === AppLanguages.ARABIC);
  I18nManager.forceRTL(locale === AppLanguages.ARABIC);

  // Restart if needed.
  handleRestart(locale);
};

export const getCurrentLocale = () => i18n.language;

export const translate = i18n.t;
