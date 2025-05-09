const esModules = ['@angular', '@ngrx', 'd3', '@ngx-translate'];
// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
module.exports = {
  verbose: true,
  preset: "jest-preset-angular",
  globalSetup: 'jest-preset-angular/global-setup',
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/app/**/*.ts"],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  coveragePathIgnorePatterns: [
    "setup-jest.ts",
    "public_api.ts",
    ".module.ts",
    ".interface.ts",
    ".utils.ts",
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  modulePaths: [
    "<rootDir>"
  ],
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!.*\\.mjs$|${esModules.join('|')})`],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/', '<rootDir>/cypress/integration'],
};
