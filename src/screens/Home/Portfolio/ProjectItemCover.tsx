import { AppSvgImages } from "@src/constants";
import { useAppTheme } from "@src/utils";
import * as React from "react";
import { View, StyleSheet } from "react-native";
import type { LayoutChangeEvent, LayoutRectangle } from "react-native";
import { Card } from "react-native-paper";

import styles from "./styles";
import type { ProjectItemProps } from "./types";

export default React.memo((props: ProjectItemProps) => {
  const { item: project } = props;

  const theme = useAppTheme();

  const [imageLayout, setImageLayout] = React.useState<LayoutRectangle>();
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [isError, setError] = React.useState<boolean>(false);

  return (
    <>
      <Card.Cover
        onLayout={(event: LayoutChangeEvent) =>
          setImageLayout(event.nativeEvent.layout)
        }
        source={{ uri: project.image }}
        resizeMode="contain"
        style={{ backgroundColor: theme.colors.surfaceVariant }}
        onLoadEnd={() => setLoading(false)}
        onError={() => setError(true)}
      />
      {(isLoading || isError) && (
        <View
          style={StyleSheet.compose(styles.projectImagePlaceholderContainer, {
            width: imageLayout?.width,
            height: imageLayout?.height,
            start: imageLayout?.x,
            top: imageLayout?.y,
          })}
        >
          <AppSvgImages.logo
            fill={theme.colors.onSurfaceVariant}
            width={imageLayout?.height}
            height={imageLayout?.height}
          />
        </View>
      )}
    </>
  );
});
