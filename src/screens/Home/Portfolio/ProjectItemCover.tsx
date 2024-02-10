import { useAppTheme } from "@src/utils";
import { Image } from "expo-image";
import * as React from "react";
import { View, StyleSheet } from "react-native";

import styles from "./styles";
import type { ProjectItemProps } from "./types";

export default React.memo((props: ProjectItemProps) => {
  const { item: project } = props;

  const theme = useAppTheme();

  return (
    <View
      style={StyleSheet.flatten([
        styles.projectImageContainer,
        {
          backgroundColor: theme.colors.surfaceVariant,
        },
      ])}
    >
      <Image
        style={styles.projectImage}
        source={project.image}
        contentFit="contain"
        placeholder={project.imageHash}
        placeholderContentFit="contain"
        transition={1000}
      />
    </View>
  );
});
