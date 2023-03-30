import { appBundle, driverSingleton, inputRandomizer } from '../Utils/appiumUtils';
import LoginScreen from '../pageobjects/LoginScreen';
import HomeScreen from '../pageobjects/HomeScreen';

let loginScreen: LoginScreen;

describe('Login', () => {
	beforeEach(async () => {
		loginScreen = await LoginScreen.build(await driverSingleton());
	});

	afterEach(async () => {
		await (await driverSingleton()).terminateApp(appBundle);
	});

	after(async () => {
		await (await driverSingleton()).removeApp(appBundle);
	});

	const email = process.env.EMAIL as string;
	const password = process.env.PASSWORD as string;

	// this test is missing TestRail Case ID
	it('should fill email field', async () => {
		await loginScreen.setEmailField(email);
		expect(await loginScreen.getEmailField()).toEqual(email);
	});


});
