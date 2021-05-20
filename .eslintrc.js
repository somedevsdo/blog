module.exports = {
  plugins: ["prettier", "sort-destructure-keys"],
  extends: ["prettier", "plugin:jsdoc/recommended"],
  ignorePatterns: "jest.setup.ts",
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      extends: [
        "airbnb-typescript",
        "react-app",
        "plugin:prettier/recommended",
        "plugin:jsdoc/recommended",
      ],
      rules: {
        "max-len": [
          "error",
          {
            code: 120,
            tabWidth: 2,
          },
        ],
        // We're using Typescript so don't need these
        "jsdoc/require-param-type": "off",
        "jsdoc/require-returns-type": "off",
        // Sort the props in alphabetical order
        "react/jsx-sort-props": "error",
        // Don't need this anymore in React v17
        "react/react-in-jsx-scope": "off",
        // We use Prop Spreading quite a lot so just warn for now
        "react/jsx-props-no-spreading": "warn",
        // This removes the error for the Next.js <Link> tag
        "jsx-a11y/anchor-is-valid": [
          "error",
          {
            components: ["Link"],
            specialLink: ["hrefLeft", "hrefRight"],
            aspects: ["invalidHref", "preferButton"],
          },
        ],
      },
    },
  ],
};
