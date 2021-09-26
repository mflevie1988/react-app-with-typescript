module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },
  moduleDirectories: [
    'node_modules',
    'utils',
    __dirname,
  ],
  setupFilesAfterEnv: [
    "./jest.setup.ts"
  ],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}"
  ],
  coverageThreshold: {
    global: {
        branches: 0,
        functions: 0,
        lines: 0,
        statements: 0
    }
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "src/utils/",
    "__mocks__/",
    ".stories.tsx"
  ],
};
