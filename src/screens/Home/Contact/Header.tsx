import * as React from "react";
import { useTranslation } from "react-i18next";
import { Appbar, Text } from "react-native-paper";

export default React.memo(() => {
  const { t: translate } = useTranslation();

  const Title = () => (
    <Text variant="headlineMedium">{translate("contact_me")}</Text>
  );

  return (
    <Appbar.Header statusBarHeight={0} mode="small">
      <Appbar.Content title={<Title />} />
    </Appbar.Header>
  );
});
