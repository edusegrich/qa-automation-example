import { SettingsScreenSelectors } from '.';
import LoginScreen from '../LoginScreen';
import PageObject from '../PageObject';

interface SettingsScreenElements {
	title: WebdriverIO.Element;
	logoutButton: WebdriverIO.Element;
}

class SettingsScreen extends PageObject {
	private title: WebdriverIO.Element;
	private logoutButton: WebdriverIO.Element;

	constructor(driver: WebdriverIO.Browser, elems: SettingsScreenElements) {
		super(driver);
		this.title = elems.title;
		this.logoutButton = elems.logoutButton;
	}

	static async initializeScreenElements(driver: WebdriverIO.Browser) {
		const elems = {
			title: await driver.$(SettingsScreenSelectors.title),
			logoutButton: await driver.$(SettingsScreenSelectors.logoutButton)
		};
		return elems;
	}

	async getTitle() {
		return this.title.getText();
	}

	async logoutAction() {
		await this.logoutButton.click();
		const elems = await LoginScreen.intializeScreenElements(this.driver);
		return new LoginScreen(this.driver, elems);
	}
}
export default SettingsScreen;
