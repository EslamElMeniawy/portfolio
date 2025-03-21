import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import styles from "./styles";
import { PlaceDateRowProps } from "./types";

export default React.memo((props: PlaceDateRowProps) => {
  const { place, date } = props;

  return (
    <View style={styles.placeDateRow}>
      <Text
        variant="titleMedium"
        style={styles.smallTitle}
        adjustsFontSizeToFit
        numberOfLines={1}
      >
        {place}
      </Text>
      <Text style={styles.text} adjustsFontSizeToFit numberOfLines={1}>
        {date}
      </Text>
    </View>
  );
});
