// For a detailed explanation regarding each configuration property and type check, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: 'coverage',
  transform: {
    '.(js|ts)': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
  reporters: ['default'],
  coverageReporters: ['text', 'cobertura']
}
