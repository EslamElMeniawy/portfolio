import { StyleSheet } from "react-native";
import { vs, s, ms } from "react-native-size-matters";

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
  },
  emptyList: {
    height: "100%",
  },
  list: {
    flex: 1,
    marginVertical: vs(8),
    marginHorizontal: s(8),
  },
  projectCard: {
    flex: 1,
    marginVertical: vs(8),
    marginHorizontal: s(8),
    borderRadius: ms(8),
  },
  projectImageContainer: {
    width: "100%",
    aspectRatio: 2 / 1,
    borderRadius: ms(8),
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  projectImage: {
    flex: 1,
    width: "100%",
  },
  projectTitle: {
    fontSize: ms(22),
    lineHeight: ms(28),
    marginTop: vs(8),
    marginBottom: vs(4),
  },
  projectDetails: {
    fontSize: ms(12),
    lineHeight: ms(16),
  },
  detailsButtonText: {
    fontSize: ms(14),
    lineHeight: ms(20),
  },
});

export default styles;
