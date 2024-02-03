module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "transform-inline-environment-variables",
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
          alias: {
            "@src": "./src",
            "@packageJson": "./package.json",
            "@appJson": "./app.json",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
