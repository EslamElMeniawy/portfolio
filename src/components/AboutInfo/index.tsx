import * as React from "react";
import { Text } from "react-native-paper";

import styles from "./styles";
import { Props } from "./types";

export default React.memo((props: Props) => {
  const { data } = props;

  return data?.length ? (
    <>
      {data.map((item) => (
        <Text key={item} style={styles.text}>
          {item}
        </Text>
      ))}
    </>
  ) : null;
});
