import { LoginScreenSelectors } from '.';
import PageObject from '../PageObject';

interface LoginScreenElements {
	title: WebdriverIO.Element;
	emailField: WebdriverIO.Element;
	passwordField: WebdriverIO.Element;
	loginButton: WebdriverIO.Element;
}

class LoginScreen extends PageObject {
	private title: WebdriverIO.Element;
	private emailField: WebdriverIO.Element;
	private passwordField: WebdriverIO.Element;
	private loginButton: WebdriverIO.Element;

	constructor(driver: WebdriverIO.Browser, elems: LoginScreenElements) {
		super(driver);
		this.title = elems.title;
		this.emailField = elems.emailField;
		this.passwordField = elems.passwordField;
		this.loginButton = elems.loginButton;
	}

	static async intializeScreenElements(driver: WebdriverIO.Browser) {
		const elems: LoginScreenElements = {
			title: await driver.$(LoginScreenSelectors.title),
			emailField: await driver.$(LoginScreenSelectors.emailField),
			passwordField: await driver.$(LoginScreenSelectors.passwordField),
			loginButton: await driver.$(LoginScreenSelectors.loginButton)
		};

		return elems;
	}

	static async build(driver: WebdriverIO.Browser) {
		const elems = await LoginScreen.intializeScreenElements(driver);
		return new LoginScreen(driver, elems);
	}

	private async setEmailField(email: string) {
		await this.emailField.addValue(email);
	}

	private async setPasswordField(password: string) {
		await this.passwordField.addValue(password);
	}

	async loginAction(email: string, password: string) {
		await this.setEmailField(email);
		await this.setPasswordField(password);
		await this.loginButton.click();
	}
}

export default LoginScreen;
