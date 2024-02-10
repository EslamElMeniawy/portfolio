import { Screen } from "@src/components";
import { translate } from "@src/core";
import { restart, useAppTheme } from "@src/utils";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import styles from "./styles";

export default React.memo(() => {
  const theme = useAppTheme();

  useFonts({
    "Rubik-Regular": require("@src/assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("@src/assets/fonts/Rubik-SemiBold.ttf"),
  });

  React.useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <SafeAreaProvider>
      <Screen style={styles.container}>
        <Text
          variant="titleLarge"
          style={StyleSheet.flatten([
            { color: theme.colors.onBackground },
            styles.text,
            styles.title,
          ])}
        >
          {translate("error_fallback.title")}
        </Text>
        <Text
          style={StyleSheet.flatten([
            { color: theme.colors.onBackground },
            styles.text,
            styles.message,
          ])}
        >
          {translate("error_fallback.message")}
        </Text>
        <Button
          onPress={() => restart()}
          style={StyleSheet.compose(
            { backgroundColor: theme.colors.primary },
            styles.btn,
          )}
          textColor={theme.colors.onPrimary}
          labelStyle={styles.btnTxt}
        >
          {translate("restart_app")}
        </Button>
      </Screen>
    </SafeAreaProvider>
  );
});
