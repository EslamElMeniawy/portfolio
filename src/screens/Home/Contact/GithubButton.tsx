import { AppSvgImages } from "@src/constants";
import { openUrl } from "@src/utils";
import * as React from "react";
import { Button } from "react-native-paper";

import styles from "./styles";
import { ContactInfoProps } from "./types";

export default React.memo((props: ContactInfoProps) => {
  const { data } = props;

  const _onPress = () => {
    openUrl(data?.github ? `https://github.com/${data?.github}` : undefined);
  };

  return data && data.github ? (
    <Button
      icon={({ color, size }) => (
        <AppSvgImages.github
          fill={color}
          style={{ width: size, height: size }}
        />
      )}
      labelStyle={styles.buttonText}
      onPress={_onPress}
    >
      {data.github}
    </Button>
  ) : null;
});
