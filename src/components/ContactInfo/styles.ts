import { StyleSheet } from "react-native";
import { s, ms } from "react-native-size-matters";

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: s(4),
  },
  buttonText: {
    flex: 1,
    fontSize: ms(12),
    lineHeight: ms(16),
    textAlign: "left",
    textDecorationLine: "underline",
  },
});

export default styles;
