import { useAppTheme } from "@src/utils";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import type { ToastProps } from "react-native-toast-notifications/lib/typescript/toast";
import tinycolor from "tinycolor2";

import styles from "./styles";

export default React.memo((toastOptions: ToastProps) => {
  const theme = useAppTheme();

  const indicatorColor = tinycolor(
    toastOptions.type === "danger" ? theme.colors.error : theme.colors.primary,
  );

  const borderColor = indicatorColor.clone();
  borderColor.setAlpha(0.25);

  return (
    <View
      style={StyleSheet.compose(styles.container, {
        backgroundColor: theme.colors.surface,
        borderColor: borderColor.toHex8String(),
        borderStartColor: indicatorColor.toHex8String(),
      })}
    >
      <Text
        style={StyleSheet.compose(
          { color: theme.colors.onSurface },
          styles.text,
        )}
      >
        {toastOptions.message}
      </Text>
    </View>
  );
});
