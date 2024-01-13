import { NavigatorScreenParams } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Project } from "@src/core";
import { HomeBottomTabsParamList, NavigationParamsKeys } from "@src/navigation";

type RootStackParamList = {
  Home: NavigatorScreenParams<HomeBottomTabsParamList>;
  Project: { [NavigationParamsKeys.PROJECT]: Project | undefined } | undefined;
};

type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type { RootStackParamList, RootStackScreenProps };
