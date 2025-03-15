import { StyleSheet } from "react-native";
import { ms, vs } from "react-native-size-matters";

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
  },
  card: {
    marginVertical: vs(8),
    padding: ms(2),
  },
  cardContent: {
    gap: vs(8),
  },
  topContainer: {
    gap: vs(2),
  },
  title: {
    fontSize: ms(24),
    lineHeight: ms(32),
  },
  subTitle: {
    textTransform: "uppercase",
    fontSize: ms(14),
    lineHeight: ms(20),
  },
  leftContainer: {
    gap: vs(8),
    backgroundColor: "green",
  },
  rightContainer: {
    backgroundColor: "blue",
  },
});

export default styles;
