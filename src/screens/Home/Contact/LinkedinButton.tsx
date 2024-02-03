import { AppSvgImages } from "@src/constants";
import { openUrl } from "@src/utils";
import * as React from "react";
import { Button } from "react-native-paper";

import styles from "./styles";
import { ContactInfoProps } from "./types";

export default React.memo((props: ContactInfoProps) => {
  const { data } = props;

  const _onPress = () => {
    openUrl(
      data?.linkedin ? `https://linkedin.com/in/${data?.linkedin}` : undefined,
    );
  };

  return data && data.linkedin ? (
    <Button
      icon={({ color, size }) => (
        <AppSvgImages.linkedin
          fill={color}
          style={{ width: size, height: size }}
        />
      )}
      labelStyle={styles.buttonText}
      onPress={_onPress}
    >
      {data.linkedin}
    </Button>
  ) : null;
});
