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
  testPathIgnorePatterns: [
    '<rootDir>/public',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub',
  },
};
