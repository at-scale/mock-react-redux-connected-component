/* eslint-disable no-magic-numbers */
module.exports = {
    bail: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.js',
        '!**/node_modules/**'
    ],
    coverageReporters: [
        'text'
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    moduleNameMapper: {
        '^.+\\.(scss)$': '<rootDir>/test/utils/css-hooks.js'
    },
    setupTestFrameworkScriptFile: '<rootDir>/test/utils/enzyme-config.js',
    transformIgnorePatterns: [
        'node_modules/(?!(@at-scale)/)'
    ]
};
