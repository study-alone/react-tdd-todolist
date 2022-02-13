const tsconfig = require('./tsconfig.json')
const tsconfigPaths = require('tsconfig-paths-jest')(tsconfig)

module.exports = {
	preset: 'ts-jest',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testMatch: [
		'<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
		'<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
	],
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		...tsconfigPaths,
		'\\.(css|sass|scss)$': 'identity-obj-proxy',
		'^.+\\.svg$': 'jest-svg-transformer',
	},
}
