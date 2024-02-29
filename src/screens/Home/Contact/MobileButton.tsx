import { openPhone } from "@src/utils";
import * as React from "react";
import { Button } from "react-native-paper";

import styles from "./styles";
import { ContactInfoProps } from "./types";

export default React.memo((props: ContactInfoProps) => {
  // #region Logger
  const getLogMessage = (message: string) =>
    `## Home::Contact::MobileButton:: ${message}`;
  // #endregion

  const { data } = props;

  const _onPress = () => {
    console.info(getLogMessage("_onPress"));
    openPhone(data?.mobile);
  };

  return data?.mobile ? (
    <Button icon="cellphone" labelStyle={styles.buttonText} onPress={_onPress}>
      {data.mobile}
    </Button>
  ) : null;
});
