import { AboutInfo, ContactInfo } from "@src/components";
import * as React from "react";
import { StyleSheet, View } from "react-native";

import styles from "./styles";
import { LeftSectionProps } from "./types";

export default React.memo((props: LeftSectionProps) => {
  const { flex, aboutData, contactData } = props;

  return (
    <View style={StyleSheet.flatten([styles.leftContainer, { flex }])}>
      <AboutInfo data={aboutData} />
      <ContactInfo data={contactData} />
    </View>
  );
});
