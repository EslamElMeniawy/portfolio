import { useLinkTo } from "@react-navigation/native";
import { Screen } from "@src/components";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";

import styles from "./styles";

export default React.memo(() => {
  // #region Logger
  const getLogMessage = (message: string) => `## NotFound:: ${message}`;
  // #endregion

  const { t: translate } = useTranslation();
  const linkTo = useLinkTo();

  const onHomePagePress = () => {
    console.info(getLogMessage("onHomePagePress"));
    linkTo({ screen: "Home" });
  };

  return (
    <Screen style={styles.container}>
      <Text
        variant="titleLarge"
        style={StyleSheet.flatten([styles.text, styles.title])}
      >
        {translate("page_not_found.title")}
      </Text>
      <Text style={StyleSheet.flatten([styles.text, styles.message])}>
        {translate("page_not_found.message")}
      </Text>
      <Button
        onPress={onHomePagePress}
        style={styles.btn}
        labelStyle={styles.btnTxt}
      >
        {translate("home_page")}
      </Button>
    </Screen>
  );
});
