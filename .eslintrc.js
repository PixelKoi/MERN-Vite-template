module.exports = {
  env: {
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ["client/**/*"],
      plugins: ["react"],
      rules: {
        // React-specific rules here
      },
    },
    {
      files: ["server/**/*"],
      env: {
        node: true,
      },
      rules: {
        // Node.js-specific rules here
      },
    },
  ],
};
