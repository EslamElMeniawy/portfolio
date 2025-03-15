import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import styles from "./styles";
import { TopSectionProps } from "./types";

export default React.memo((props: TopSectionProps) => {
  const { data } = props;

  return (
    <View style={styles.topContainer}>
      <Text variant="headlineMedium" style={styles.title}>
        {data?.name}
      </Text>
      <Text variant="titleMedium" style={styles.subTitle}>
        {data?.profession}
      </Text>
    </View>
  );
});
