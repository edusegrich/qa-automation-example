import { appBundle, driverSingleton, inputRandomizer } from '../Utils/appiumUtils';
import LoginScreen from '../pageobjects/LoginScreen';
import HomeScreen from '../pageobjects/HomeScreen';

let loginScreen: LoginScreen;
let homeScreen: HomeScreen;

describe('Login', () => {
	beforeEach(async () => {
		loginScreen = await LoginScreen.build(browser);
	});

	afterEach(async () => {
		await browser.terminateApp(appBundle);
	});

	after(async () => {
		await browser.removeApp(appBundle);
	});

	const email = 'user@mail.com';
	const password = '1234';

	it('should fill email field', async () => {
		homeScreen = await loginScreen.loginAction(email, password);
		expect(homeScreen).toBeInstanceOf(HomeScreen);
	});
});

// describe('Logout', () => {
// 	beforeEach(async () => {
// 		loginScreen = await LoginScreen.build(await driverSingleton());
// 	});

// 	afterEach(async () => {
// 		await (await driverSingleton()).terminateApp(appBundle);
// 	});

// 	after(async () => {
// 		await (await driverSingleton()).removeApp(appBundle);
// 	});

// 	const email = 'user@mail.com';
// 	const password = '1234';

// 	it('should fill email field', async () => {
// 		homeScreen = await loginScreen.loginAction(email, password);
// 		expect(homeScreen).toBeInstanceOf(HomeScreen);
// 	});
// });
