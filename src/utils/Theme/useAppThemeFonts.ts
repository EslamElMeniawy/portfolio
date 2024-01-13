import { configureFonts } from "react-native-paper";

const useAppThemeFonts = () => {
  const baseFont = { fontFamily: "Rubik-Regular" } as const;
  const baseVariants = configureFonts({ config: baseFont });

  const customVariants = {
    // Customize individual base variants.
    titleSmall: {
      ...baseVariants.titleSmall,
      fontFamily: "Rubik-SemiBold",
    },
    titleMedium: {
      ...baseVariants.titleMedium,
      fontFamily: "Rubik-SemiBold",
    },
    labelSmall: {
      ...baseVariants.labelSmall,
      fontFamily: "Rubik-SemiBold",
    },
    labelMedium: {
      ...baseVariants.labelMedium,
      fontFamily: "Rubik-SemiBold",
    },
    labelLarge: {
      ...baseVariants.labelLarge,
      fontFamily: "Rubik-SemiBold",
    },
  } as const;

  return configureFonts({
    config: {
      ...baseVariants,
      ...customVariants,
    },
  });
};

export default useAppThemeFonts;
