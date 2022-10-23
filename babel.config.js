module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "babel-plugin-styled-components",
        {
          minify: true,
          transpileTemplateLiterals: true,
          displayName: true,
        },
      ],
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@assets": "./assets",
            "@resources": "./src/resources",
            "@hooks": "./src/hooks",
            "@components": "./src/components",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
