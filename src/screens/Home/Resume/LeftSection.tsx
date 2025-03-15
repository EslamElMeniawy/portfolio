import { AboutInfo, ContactInfo } from "@src/components";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import styles from "./styles";
import { LeftSectionProps } from "./types";

export default React.memo((props: LeftSectionProps) => {
  const { flex, aboutData, contactData } = props;
  const { t: translate } = useTranslation();

  return (
    <View style={StyleSheet.flatten([styles.leftContainer, { flex }])}>
      <Text
        variant="titleMedium"
        style={styles.subTitle}
        adjustsFontSizeToFit
        numberOfLines={1}
      >
        {translate("summary")}
      </Text>
      <AboutInfo data={aboutData} />
      <Text
        variant="titleMedium"
        style={StyleSheet.flatten([styles.subTitle, styles.titleMargin])}
        adjustsFontSizeToFit
        numberOfLines={1}
      >
        {translate("contact")}
      </Text>
      <ContactInfo data={contactData} />
    </View>
  );
});
