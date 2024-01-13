import {
  useLocalStorageString,
  getString,
  setString,
  removeItem,
  LocalStorageKeys,
} from "@src/core";
import type { AppLanguages } from "@src/enums";

const getLogMessage = (message: string) =>
  `## LocalStorage::language:: ${message}`;

export const useLocalStorageLanguage = () =>
  useLocalStorageString(LocalStorageKeys.LANGUAGE);

export const getLanguage = () => {
  console.info(getLogMessage("getLanguage"));
  const language = getString(LocalStorageKeys.LANGUAGE);
  console.info(getLogMessage("language"), language);
  return language ? (language as AppLanguages) : undefined;
};

export const setLanguage = (language: AppLanguages) => {
  console.info(getLogMessage("setLanguage"), language);
  setString(LocalStorageKeys.LANGUAGE, language);
};

export const removeLanguage = () => {
  console.info(getLogMessage("removeLanguage"));
  removeItem(LocalStorageKeys.LANGUAGE);
};
