import type { ScrollViewProps } from "react-native";

export interface Props extends ScrollViewProps {
  refreshing?: boolean;
  onRefresh?: () => void;
  refreshColor?: string;
}
