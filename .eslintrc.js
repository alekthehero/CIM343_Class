module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    ".eslintrc.js",
    "tailwind.config.ts",
    "/lib/**/*", // Ignore built files.
    "/generated/**/*", // Ignore generated files.
    "/node_modules/**/*", // Ignore node_modules.
    "/scripts/**/*", // Ignore scripts.
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "quotes": ["error", "double"],
    "import/no-unresolved": 0,
    "max-len": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-pattern": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-empty-object-type": "off",
    "no-empty-pattern": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "no-empty": "off",
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "prettier/prettier": ["error", {
      printWidth: 120,
      endOfLine: "auto",
    }],
    "@typescript-eslint/no-unused-vars": "warn",
    "no-case-declarations": "off"
  },
};
