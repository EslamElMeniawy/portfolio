import { useAppTheme } from "@src/utils";
import { Image } from "expo-image";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { ms } from "react-native-size-matters";

import styles from "./styles";
import { ImageProps } from "./types";

export default React.memo((props: ImageProps) => {
  const { project, height } = props;
  const imageHeight = (height ?? 0) + ms(16);

  const theme = useAppTheme();

  return project?.image ? (
    <View
      style={StyleSheet.flatten([
        styles.imageContainer,
        { backgroundColor: theme.colors.surfaceVariant, height: imageHeight },
      ])}
    >
      <Image
        style={styles.image}
        source={project.image}
        contentFit="contain"
        placeholder={project.imageHash}
        placeholderContentFit="contain"
        transition={1000}
      />
    </View>
  ) : null;
});
