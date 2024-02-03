import { openPhone } from "@src/utils";
import * as React from "react";
import { Button } from "react-native-paper";

import styles from "./styles";
import { ContactInfoProps } from "./types";

export default React.memo((props: ContactInfoProps) => {
  const { data } = props;

  const _onPress = () => {
    openPhone(data?.mobile);
  };

  return data && data.mobile ? (
    <Button icon="cellphone" labelStyle={styles.buttonText} onPress={_onPress}>
      {data.mobile}
    </Button>
  ) : null;
});
