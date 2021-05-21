module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/**/*.ts", "<rootDir>/**/*.tsx", "!<rootDir>/**/*.d.ts"],
  coverageDirectory: "reports/coverage",
  coverageReporters: ["json", "lcov", "text", "clover", "cobertura"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass)$": "<rootDir>/__mocks__/styleMock.js",
    ".+\\.(png|jpg|ttf|woff|woff2|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "^.+\\.module\\.s?css$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["<rootDir>/**/*.spec.ts", "<rootDir>/**/*.spec.tsx"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/", "<rootDir>/cypress/"],
};
