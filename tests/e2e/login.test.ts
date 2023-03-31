import { appBundle } from '../Utils/appiumUtils';
import LoginScreen from '../pageobjects/LoginScreen';
import HomeScreen from '../pageobjects/HomeScreen';

let loginScreen: LoginScreen;

describe('Login', () => {
	beforeEach(async () => {
		await driver.activateApp(appBundle);
		loginScreen = await LoginScreen.build(driver);
	});

	afterEach(async () => {
		await driver.terminateApp(appBundle);
	});

	after(async () => {
		await driver.removeApp(appBundle);
	});

	const email = 'user';
	const password = '1234';

	it.skip('should not login', async () => {
		const result = await loginScreen.loginAction(email, '4321');
		expect(result).not.toBeInstanceOf(HomeScreen);
	});

	it.skip('should login successfully', async () => {
		const newScreen = await loginScreen.loginAction(email, password);
		expect(newScreen).toBeInstanceOf(HomeScreen);
	});

	it('should logout', async () => {
		const homeScreen = (await loginScreen.loginAction(email, password) as HomeScreen);
		const settingsScreen = await homeScreen.settingsAction();
		expect(await settingsScreen.getTitle()).toBe('Settings');
		const newScreen = await settingsScreen.logoutAction();
		expect(newScreen).toBeInstanceOf(LoginScreen);
	});
});
