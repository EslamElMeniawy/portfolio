import * as React from "react";
import { View, StyleSheet } from "react-native";

import styles from "./styles";
import { RightSectionProps } from "./types";

export default React.memo((props: RightSectionProps) => {
  const { flex, data } = props;

  return (
    <View style={StyleSheet.flatten([styles.rightContainer, { flex }])}>
      <></>
    </View>
  );
});
