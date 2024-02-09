import { AppSvgImages } from "@src/constants";
import { useAppTheme } from "@src/utils";
import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import { ms } from "react-native-size-matters";

import styles from "./styles";
import { ImageProps } from "./types";

export default React.memo((props: ImageProps) => {
  const { project, height } = props;
  const imageHeight = (height ?? 0) + ms(16);

  const theme = useAppTheme();

  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [isError, setError] = React.useState<boolean>(false);

  return project && project.image ? (
    <View
      style={StyleSheet.flatten([
        styles.imageContainer,
        { backgroundColor: theme.colors.surfaceVariant, height: imageHeight },
      ])}
    >
      <Image
        source={{ uri: project.image }}
        resizeMode="contain"
        style={styles.image}
        onLoadEnd={() => setLoading(false)}
        onError={() => setError(true)}
      />
      {(isLoading || isError) && (
        <View style={styles.placeholderImage}>
          <AppSvgImages.logo
            fill={theme.colors.onSurfaceVariant}
            width={imageHeight}
            height={imageHeight}
          />
        </View>
      )}
    </View>
  ) : null;
});
