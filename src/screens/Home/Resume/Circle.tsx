import { useAppTheme } from "@src/utils";
import * as React from "react";
import { StyleSheet, View } from "react-native";

import styles from "./styles";

export default React.memo(() => {
  const theme = useAppTheme();

  return (
    <View style={styles.circleContainer}>
      <View
        style={StyleSheet.flatten([
          styles.circle,
          { backgroundColor: theme.colors.onSurface },
        ])}
      />
    </View>
  );
});
