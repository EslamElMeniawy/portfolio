import * as React from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import styles from "./styles";
import { RightSectionProps } from "./types";

export default React.memo((props: RightSectionProps) => {
  const { flex, data } = props;
  const { t: translate } = useTranslation();

  return (
    <View style={StyleSheet.flatten([styles.rightContainer, { flex }])}>
      <Text variant="titleMedium" style={styles.subTitle}>
        {translate("work_experience")}
      </Text>
      <Text
        variant="titleMedium"
        style={StyleSheet.flatten([styles.subTitle, styles.titleMargin])}
      >
        {translate("education")}
      </Text>
      <Text
        variant="titleMedium"
        style={StyleSheet.flatten([styles.subTitle, styles.titleMargin])}
      >
        {translate("skills_and_programming_languages")}
      </Text>
      <Text
        variant="titleMedium"
        style={StyleSheet.flatten([styles.subTitle, styles.titleMargin])}
      >
        {translate("languages")}
      </Text>
    </View>
  );
});
