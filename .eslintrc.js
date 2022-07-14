module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    "cypress/globals": true,
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "prettier",
    "plugin:cypress/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "cypress"],
  rules: {},
  settings: {
    react: {
      version: "detect",
    },
  },
};
