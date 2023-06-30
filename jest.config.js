/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^modern-treasury$': '<rootDir>/src/index.ts',
    '^modern-treasury/_shims/(.*)$': '<rootDir>/src/_shims/$1.node',
    '^modern-treasury/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/ecosystem-tests/', '<rootDir>/dist/'],
};
