const { defaults } = require('jest-config');

const esModules = ['@ionic', '@ionic-native'].join('|');

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/app/**/*.ts', '!src/**/*.module.ts'],
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@env/(.*)$': '<rootDir>/src/environments/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@unit/(.*)$': '<rootDir>/src/tests/$1',
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
};
