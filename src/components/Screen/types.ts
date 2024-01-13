import type { StatusBarProps } from "expo-status-bar";
import type * as React from "react";
import { type StyleProp, type ViewStyle } from "react-native";
import type { Edge } from "react-native-safe-area-context";

export interface Props {
  edges?: Edge[];
  statusBarProps?: StatusBarProps;
  statusBarColor?: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
