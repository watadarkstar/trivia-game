'use strict';

module.exports = {
  // Only include files directly in __tests__, not in nested folders.
  testRegex: '/__tests__/[^/]*(\\.js|\\.coffee|[^d]\\.ts)$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'coffee', 'ts'],
  rootDir: process.cwd(),
  modulePaths: [
      '<rootDir>/src',
      '<rootDir>/node_modules'
  ],
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!react-navigation|react-native|expo|native-base-shoutem-theme)'
  ]
};
