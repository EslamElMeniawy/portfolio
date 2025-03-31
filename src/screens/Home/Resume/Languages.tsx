import * as React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { Text, Chip } from "react-native-paper";

import styles from "./styles";
import { LanguageProps } from "./types";

export default React.memo((props: LanguageProps) => {
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
        {translate("languages")}
      </Text>
      <View style={styles.skillLanguageContainer}>
        {data?.map((language) => (
          <Chip
            key={language.name}
          >{`${language.name} (${language.experience})`}</Chip>
        ))}
      </View>
    </>
  );
});
