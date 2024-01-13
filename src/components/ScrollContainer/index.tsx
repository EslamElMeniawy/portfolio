import { percentWidth } from "@src/utils";
import * as React from "react";
import { StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import type { ScrollViewProps } from "react-native";

export default React.memo((props: ScrollViewProps) => {
  const { bounces, contentContainerStyle, children, ...restProps } = props;
  const { width } = useWindowDimensions();

  return (
    <ScrollView
      bounces={bounces ?? false}
      contentContainerStyle={StyleSheet.compose(
        {
          width: percentWidth(width),
          paddingHorizontal: percentWidth(width, 5),
        },
        contentContainerStyle,
      )}
      {...restProps}
    >
      {children}
    </ScrollView>
  );
});
