import { StyleSheet } from "react-native";
import { ms, vs, s } from "react-native-size-matters";

const styles = StyleSheet.create({
  card: {
    marginVertical: vs(8),
    padding: ms(8),
    borderRadius: ms(8),
  },
  infoCard: {
    padding: 0,
  },
  infoCardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    aspectRatio: 1,
    borderRadius: ms(8),
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: "100%",
  },
  infoCardTextContainer: {
    flex: 1,
    margin: ms(8),
    gap: vs(16),
  },
  infoText: {
    fontSize: ms(12),
    lineHeight: ms(16),
  },
  downloadIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: s(8),
  },
  cardContent: {
    gap: vs(8),
  },
  cardTitle: {
    fontSize: ms(22),
    lineHeight: ms(28),
  },
  descriptionText: {
    fontSize: ms(12),
    lineHeight: ms(16),
    textAlign: "justify",
  },
  screenshotsContainer: {
    width: "100%",
    height: "auto",
    gap: ms(8),
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  screenshot: {
    width: 300,
    aspectRatio: 1 / 2,
  },
});

export default styles;
