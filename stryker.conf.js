module.exports = {
  mutate: ["**/*.ts?(x)", "!**/*@(.data|.test|.spec|Spec|.stories).ts?(x)"],
  testRunner: "jest",
  reporters: ["clear-text", "html"],
  htmlReporter: {
    baseDir: "reports/mutation/html",
  },
  coverageAnalysis: "off",
  jest: {
    config: require("./jest.config.js"),
    projectType: "custom",
    enableFindRelatedTests: true,
  },
  concurrency: 1,
  thresholds: {
    high: 0,
    low: 0,
    break: 0,
  },
};
