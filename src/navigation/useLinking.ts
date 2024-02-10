import * as Linking from "expo-linking";

export const useLinking = () => {
  const linking = {
    prefixes: [
      Linking.createURL("/"),
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
        Project: {
          path: "project/:project?",
          parse: {
            project: Number,
          },
        },
        NotFound: "*",
      },
    },
  };

  return linking;
};
