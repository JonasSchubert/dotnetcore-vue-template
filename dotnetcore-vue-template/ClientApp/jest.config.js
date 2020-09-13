module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/{!(main|index|*.plugin|registerServiceWorker),}.{ts,vue}'
  ],
  coverageDirectory: './coverage/',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  moduleNameMapper: {
    '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  setupFiles: [
    'jest-localstorage-mock'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  transformIgnorePatterns: [
    "/node_modules(?![\\\\/]vuetify[\\\\/])/"
  ]
};
