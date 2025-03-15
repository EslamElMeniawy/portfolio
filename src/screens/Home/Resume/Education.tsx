import * as React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import styles from "./styles";
import { EducationProps } from "./types";

export default React.memo((props: EducationProps) => {
  const { data } = props;
  const { t: translate } = useTranslation();

  return (
    <>
      <Text
        variant="titleMedium"
        style={StyleSheet.flatten([styles.subTitle, styles.titleMargin])}
      >
        {translate("education")}
      </Text>
      <></>
    </>
  );
});
