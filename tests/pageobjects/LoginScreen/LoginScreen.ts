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

	async static intializeScreenElements(driver: WebdriverIO.Browser) {
		const title = await driver.$('');
	}
}

export default LoginScreen;
