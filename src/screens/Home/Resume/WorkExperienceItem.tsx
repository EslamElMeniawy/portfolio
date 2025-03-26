import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import Circle from "./Circle";
import PlaceDateRow from "./PlaceDateRow";
import styles from "./styles";
import { WorkExperienceItemProps } from "./types";

export default React.memo((props: WorkExperienceItemProps) => {
  const { data } = props;

  return (
    <View style={styles.sectionRow}>
      <Circle />
      <View style={styles.sectionDataContainer}>
        <Text variant="titleMedium" style={styles.mediumTitle}>
          {data?.job}
        </Text>
        <PlaceDateRow place={data?.company} date={data?.date} />
        {data?.details?.map((item) => <Text key={item}>{`- ${item}`}</Text>)}
      </View>
    </View>
  );
});
