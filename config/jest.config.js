module.exports = {
  rootDir: '../',
  testURL: 'http://localhost/',
  globals: { },
  testMatch: ['<rootDir>/src/**/__tests__/*.js?(x)', '<rootDir>/src/**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: [
    '<rootDir>/src/index.js'
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['html'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx}'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/index.js',
    '<rootDir>/dist',
    '<rootDir>/coverage',
    '<rootDir>/node_modules'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/config/__init__/setupTests.js',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/__init__/fileMock.js'
  }
}
