import { StyleSheet } from "react-native";
import { vs, ms } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "5%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: vs(16),
  },
  message: {
    marginTop: vs(8),
    textAlign: "center",
    fontSize: ms(12),
    lineHeight: ms(16),
  },
});

export default styles;
