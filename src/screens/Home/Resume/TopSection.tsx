import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import styles from "./styles";
import { TopSectionProps } from "./types";

export default React.memo((props: TopSectionProps) => {
  const { data } = props;

  return (
    <View style={styles.topContainer}>
      <Text
        variant="headlineMedium"
        style={styles.title}
        adjustsFontSizeToFit
        numberOfLines={1}
      >
        {data?.name}
      </Text>
      <Text
        variant="titleMedium"
        style={styles.subTitle}
        adjustsFontSizeToFit
        numberOfLines={1}
      >
        {data?.profession}
      </Text>
    </View>
  );
});
