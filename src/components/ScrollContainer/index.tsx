import { percentWidth, useAppTheme } from "@src/utils";
import * as React from "react";
import {
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Platform,
  RefreshControl,
} from "react-native";

import { Props } from "./types";

export default React.memo((props: Props) => {
  const {
    bounces,
    showsHorizontalScrollIndicator,
    showsVerticalScrollIndicator,
    keyboardShouldPersistTaps,
    keyboardDismissMode,
    contentContainerStyle,
    refreshControl,
    onRefresh,
    refreshColor,
    refreshing,
    children,
    ...restProps
  } = props;

  const { width } = useWindowDimensions();
  const theme = useAppTheme();

  return (
    <ScrollView
      bounces={bounces ?? false}
      showsHorizontalScrollIndicator={
        showsHorizontalScrollIndicator ?? Platform.OS === "web"
      }
      showsVerticalScrollIndicator={
        showsVerticalScrollIndicator ?? Platform.OS === "web"
      }
      keyboardShouldPersistTaps={keyboardShouldPersistTaps ?? "handled"}
      keyboardDismissMode={keyboardDismissMode ?? "none"}
      contentContainerStyle={StyleSheet.compose(
        {
          width: percentWidth(width),
          paddingHorizontal: percentWidth(width, 5),
        },
        contentContainerStyle,
      )}
      refreshControl={
        refreshControl ?? onRefresh ? (
          <RefreshControl
            colors={refreshColor ? [refreshColor] : [theme.colors.primary]}
            tintColor={refreshColor ?? theme.colors.primary}
            refreshing={refreshing ?? false}
            onRefresh={onRefresh}
          />
        ) : undefined
      }
      {...restProps}
    >
      {children}
    </ScrollView>
  );
});
