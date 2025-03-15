import * as React from "react";
import { View } from "react-native";
import { TouchableRipple, Text } from "react-native-paper";

import styles from "./styles";
import { ButtonProps } from "./types";

export default React.memo((props: ButtonProps) => {
  const { icon, text, onPress } = props;

  return (
    <TouchableRipple onPress={onPress}>
      <View style={styles.buttonContainer}>
        {icon}
        <Text style={styles.buttonText} adjustsFontSizeToFit numberOfLines={1}>
          {text}
        </Text>
      </View>
    </TouchableRipple>
  );
});
