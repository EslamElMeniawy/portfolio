import { StyleSheet } from "react-native";
import { ms, vs, s } from "react-native-size-matters";

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
  },
  card: {
    marginVertical: vs(8),
    padding: ms(2),
  },
  cardContent: {
    gap: vs(16),
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
  },
  titleMargin: {
    marginTop: vs(16),
  },
  rightContainer: {
    gap: vs(8),
  },
  sectionRow: {
    flexDirection: "row",
    gap: s(4),
  },
  circleContainer: {
    height: ms(16),
    justifyContent: "center",
  },
  circle: {
    width: ms(8),
    height: ms(8),
    borderRadius: ms(4),
  },
  sectionDataContainer: {
    flex: 1,
    gap: vs(4),
  },
  mediumTitle: {
    fontSize: ms(12),
    lineHeight: ms(16),
  },
  smallTitle: {
    textTransform: "uppercase",
    fontSize: ms(11),
    lineHeight: ms(16),
  },
  placeDateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: ms(12),
    lineHeight: ms(16),
  },
});

export default styles;
