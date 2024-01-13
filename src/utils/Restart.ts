import * as Updates from "expo-updates";
import { Platform } from "react-native";

export const restart = () => {
  if (Platform.OS === "web") {
    window.location.reload();
  } else {
    Updates.reloadAsync();
  }
};
