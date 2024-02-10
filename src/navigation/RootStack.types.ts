import { NavigatorScreenParams } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeBottomTabsParamList, NavigationParamsKeys } from "@src/navigation";

type RootStackParamList = {
  Home: NavigatorScreenParams<HomeBottomTabsParamList>;
  Project: { [NavigationParamsKeys.PROJECT]: number | undefined } | undefined;
  NotFound: undefined;
};

type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type { RootStackParamList, RootStackScreenProps };
