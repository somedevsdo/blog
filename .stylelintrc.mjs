/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-astro",
    "stylelint-config-tailwindcss",
  ],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "order/properties-alphabetical-order": true,
    "at-rule-no-unknown": null,
    "at-rule-no-deprecated": [
      true,
      {
        ignoreAtRules: ["apply"],
      },
    ],
    "scss/at-rule-no-unknown": null,
  },
};
