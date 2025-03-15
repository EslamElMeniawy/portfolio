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
});

export default styles;
