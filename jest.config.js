module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    window: {},
  },
  moduleDirectories: [
    'node_modules',
    '<rootDir>/src',
  ],
};
