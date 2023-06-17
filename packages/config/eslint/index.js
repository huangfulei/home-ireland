/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "next",
    "turbo",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  plugins: ["unused-imports"],
  ignorePatterns: [
    "**/*.js",
    "**/*.json",
    "node_modules",
    "plop",
    "public",
    "styles",
    ".next",
    "coverage",
    "dist",
    ".turbo",
    "**/*.config.js",
    "**/*.config.cjs",
    "packages/config/**",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "unused-imports/no-unused-imports": "error",
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "inline-type-imports" },
    ],
  },
  reportUnusedDisableDirectives: true,
};

module.exports = config;
