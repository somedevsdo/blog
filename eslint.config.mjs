import tsParser from "@typescript-eslint/parser";
import astroParser from "astro-eslint-parser";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
        ecmaVersion: 2015, // es6
      },
    },
    rules: {
      // override/add rules here
    },
  },
];
