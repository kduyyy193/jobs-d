module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["expo-router/babel", {
      "root": ["./app"],
      "alias": {
        "@components": "./app/components",
        "@config": "./app/config",
        "@helpers": "./app/helpers",
        "@navigators": "./app/navigators",
        "@reducers": "./app/reducers",
        "@screens": "./app/screens"
      }
    }],
  };
};
