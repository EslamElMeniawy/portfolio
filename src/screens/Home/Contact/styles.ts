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
  buttonText: {
    flex: 1,
    fontSize: ms(14),
    lineHeight: ms(20),
    textAlign: "left",
    textDecorationLine: "underline",
  },
});

export default styles;
