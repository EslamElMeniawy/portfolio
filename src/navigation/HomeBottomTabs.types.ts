import type { MaterialBottomTabScreenProps } from "react-native-paper/react-navigation";

type HomeBottomTabsParamList = {
  About: undefined;
  Portfolio: undefined;
  Resume: undefined;
  Contact: undefined;
};

type HomeBottomTabsScreenProps<T extends keyof HomeBottomTabsParamList> =
  MaterialBottomTabScreenProps<HomeBottomTabsParamList, T>;

export type { HomeBottomTabsParamList, HomeBottomTabsScreenProps };
