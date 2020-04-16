module.exports = {
  coverageDirectory: "coverage",

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ["json", "text", "lcov", "clover"],
  collectCoverage: true,
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  notify: true,
  roots: ["<rootDir>/src", "<rootDir>/app"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    "^.+\\.[j]sx?$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  transformIgnorePatterns: ["/node_modules/"],
  verbose: true,
};
