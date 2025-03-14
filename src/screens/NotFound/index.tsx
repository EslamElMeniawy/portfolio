import { useLinkBuilder, useLinkTo } from "@react-navigation/native";
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
  const { buildHref } = useLinkBuilder();
  const linkTo = useLinkTo();

  const _onHomePagePress = () => {
    console.info(getLogMessage("_onHomePagePress"));
    const href = buildHref("Home");

    if (href) {
      linkTo(href);
    }
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
        onPress={_onHomePagePress}
        style={styles.btn}
        labelStyle={styles.btnTxt}
      >
        {translate("home_page")}
      </Button>
    </Screen>
  );
});
