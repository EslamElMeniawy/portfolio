import { StyleSheet } from "react-native";
import { ms, vs } from "react-native-size-matters";

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
  },
  card: {
    marginVertical: vs(8),
    padding: ms(8),
  },
  cardContent: {
    gap: vs(16),
  },
  text: {
    fontSize: ms(12),
    lineHeight: ms(16),
    textAlign: "justify",
  },
});

export default styles;
