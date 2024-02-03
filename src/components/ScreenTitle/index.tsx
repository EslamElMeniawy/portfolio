import * as React from "react";
import { Text } from "react-native-paper";

import styles from "./styles";
import { Props } from "./types";

export default React.memo((props: Props) => {
  const { title } = props;
  return (
    <Text variant="headlineMedium" style={styles.title}>
      {title}
    </Text>
  );
});
