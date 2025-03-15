import { openPhone, useAppTheme } from "@src/utils";
import * as React from "react";
import { Icon } from "react-native-paper";
import { ms } from "react-native-size-matters";

import Button from "./Button";
import { Props } from "./types";

export default React.memo((props: Props) => {
  // #region Logger
  const getLogMessage = (message: string) =>
    `## Home::Contact::MobileButton:: ${message}`;
  // #endregion

  const { data } = props;
  const theme = useAppTheme();

  const _onPress = () => {
    console.info(getLogMessage("_onPress"));
    openPhone(data?.mobile);
  };

  return data?.mobile ? (
    <Button
      icon={
        <Icon source="cellphone" color={theme.colors.onSurface} size={ms(12)} />
      }
      text={data.mobile}
      onPress={_onPress}
    />
  ) : null;
});
