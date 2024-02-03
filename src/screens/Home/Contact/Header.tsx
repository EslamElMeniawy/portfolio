import { ScreenTitle } from "@src/components";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Appbar } from "react-native-paper";

export default React.memo(() => {
  const { t: translate } = useTranslation();

  return (
    <Appbar.Header statusBarHeight={0} mode="small">
      <Appbar.Content title={<ScreenTitle title={translate("contact_me")} />} />
    </Appbar.Header>
  );
});
