const capabilities = process.env.PLATFORM === 'android' ?
	[{
		platformName: 'Android',
		platformVersion: '12',
		deviceName: 'Android Emulator',
		app: '/Users/edusegurarichart/Repositorios/Personal/appium-seminar/qa-automation-example/android/app/build/outputs/apk/debug/app-debug.apk',
		automationName: 'UiAutomator2'
	}]
	: [{
		platformName: 'iOS',
		platformVersion: '15.0',
		deviceName: 'iPhone 13',
		app: '/Users/edusegurarichart/Library/Developer/Xcode/DerivedData/RNBoilerPlate-cgjgptwlbixpywdvhfcbhhsuxukq/Build/Products/Debug-iphonesimulator/RNBoilerPlate.app',
		automationName: 'XCUITest'
	}];

export const config = {
	runner: 'local',
	autoCompileOpts: {
		autoCompile: true,
		tsNodeOpts: {
			transpileOnly: true,
			project: 'tsconfig.json'
		},
		tsConfigPathsOpts: {
			baseUrl: './'
		}
	},
	logLevel: 'info',
	filesToWatch: [
		'PageObjects/**'
	],
	baseUrl: 'http://127.0.0.1',
	framework: 'mocha',
	reporters: ['spec'],
	specs: [
		'Tests/**',
	],
	maxInstances: 1,
	waitforTimeout: 100000,
	path: '/wd/hub',
	port: 4723,
	capabilities,
	mochaOpts: {
		timeout: 200000
	}
};
