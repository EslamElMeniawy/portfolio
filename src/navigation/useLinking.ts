import * as Linking from "expo-linking";

export const useLinking = () => {
  const linking = {
    prefixes: [
      Linking.createURL("/"),
      "eslam://",
      "elmeniawy://",
      "eslam-elmeniawy://",
      "eslamelmeniawy://",
      "https://eslamelmeniawy.github.io",
    ],
    config: {
      screens: {
        Home: {
          screens: {
            About: "about",
            Portfolio: "portfolio",
            Resume: "resume",
            Contact: "contact",
          },
        },
        Project: "project",
        NotFound: "*",
      },
    },
  };

  return linking;
};
