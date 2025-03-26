import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import Circle from "./Circle";
import PlaceDateRow from "./PlaceDateRow";
import styles from "./styles";
import { EducationItemProps } from "./types";

export default React.memo((props: EducationItemProps) => {
  const { data } = props;

  return (
    <View style={styles.sectionRow}>
      <Circle />
      <View style={styles.sectionDataContainer}>
        <Text variant="titleMedium" style={styles.mediumTitle}>
          {data?.degree}
        </Text>
        <PlaceDateRow place={data?.place} date={data?.date} />
      </View>
    </View>
  );
});
