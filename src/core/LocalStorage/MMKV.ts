import type { LocalStorageKeys } from "@src/core";
import {
  MMKV,
  useMMKV,
  useMMKVString,
  useMMKVObject,
  useMMKVBoolean,
  useMMKVNumber,
} from "react-native-mmkv";

const getLogMessage = (message: string) => `## LocalStorage:: ${message}`;

export const storage = new MMKV();

export const useLocalStorage = useMMKV;
export const useLocalStorageString = useMMKVString;
export const useLocalStorageObject = useMMKVObject;
export const useLocalStorageBoolean = useMMKVBoolean;
export const useLocalStorageNumber = useMMKVNumber;

export const setString = (key: LocalStorageKeys, value: string) => {
  console.info(getLogMessage("setString"), key, value);
  storage.set(key, value);
};

export const getString = (key: LocalStorageKeys) => {
  console.info(getLogMessage("getString"), key);
  return storage.getString(key);
};

export const setObject = (key: LocalStorageKeys, value: object) => {
  console.info(getLogMessage("setMap"), key, value);
  storage.set(key, JSON.stringify(value));
};

export const getObject = <T>(key: LocalStorageKeys) => {
  console.info(getLogMessage("getMap"), key);
  const jsonObject = storage.getString(key);
  return jsonObject ? (JSON.parse(jsonObject) as T) : undefined;
};

export const setBoolean = (key: LocalStorageKeys, value: boolean) => {
  console.info(getLogMessage("setBoolean"), key, value);
  storage.set(key, value);
};

export const getBoolean = (key: LocalStorageKeys) => {
  console.info(getLogMessage("getBoolean"), key);
  return storage.getBoolean(key);
};

export const setNumber = (key: LocalStorageKeys, value: number) => {
  console.info(getLogMessage("setInt"), key, value);
  storage.set(key, value);
};

export const getNumber = (key: LocalStorageKeys) => {
  console.info(getLogMessage("getInt"), key);
  return storage.getNumber(key);
};

export const removeItem = (key: LocalStorageKeys) => {
  console.info(getLogMessage("removeItem"), key);
  storage.delete(key);
};
