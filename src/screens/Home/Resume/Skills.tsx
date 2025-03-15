import * as React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import styles from "./styles";
import { SkillsProps } from "./types";

export default React.memo((props: SkillsProps) => {
  const { data } = props;
  const { t: translate } = useTranslation();

  return (
    <>
      <Text
        variant="titleMedium"
        style={StyleSheet.flatten([styles.subTitle, styles.titleMargin])}
        adjustsFontSizeToFit
        numberOfLines={1}
      >
        {translate("skills_and_programming_languages")}
      </Text>
      <></>
    </>
  );
});
