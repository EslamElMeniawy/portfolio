import { openEmail, useAppTheme } from "@src/utils";
import * as React from "react";
import { Icon } from "react-native-paper";
import { ms } from "react-native-size-matters";

import Button from "./Button";
import { Props } from "./types";

export default React.memo((props: Props) => {
  // #region Logger
  const getLogMessage = (message: string) =>
    `## Home::Contact::MailButton:: ${message}`;
  // #endregion

  const { data } = props;
  const theme = useAppTheme();

  const _onPress = () => {
    console.info(getLogMessage("_onPress"));
    openEmail(data?.email);
  };

  return data?.email ? (
    <Button
      icon={
        <Icon source="email" color={theme.colors.onSurface} size={ms(12)} />
      }
      text={data.email}
      onPress={_onPress}
    />
  ) : null;
});
