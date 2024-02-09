import { StyleSheet } from "react-native";
import { vs, ms } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingVertical: vs(16),
  },
  text: {
    textAlign: "center",
    width: "90%",
    alignSelf: "center",
  },
  title: {
    fontSize: ms(22),
    lineHeight: ms(28),
  },
  message: {
    fontSize: ms(12),
    lineHeight: ms(16),
  },
  btn: {
    width: "90%",
    alignSelf: "center",
    marginTop: vs(32),
  },
  btnTxt: {
    fontSize: ms(14),
    lineHeight: ms(20),
  },
});

export default styles;
