import { openEmail } from "@src/utils";
import * as React from "react";
import { Button } from "react-native-paper";

import styles from "./styles";
import { ContactInfoProps } from "./types";

export default React.memo((props: ContactInfoProps) => {
  const { data } = props;

  const _onPress = () => {
    openEmail(data?.email);
  };

  return data && data.email ? (
    <Button icon="email" labelStyle={styles.buttonText} onPress={_onPress}>
      {data.email}
    </Button>
  ) : null;
});
