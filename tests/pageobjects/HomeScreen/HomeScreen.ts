import { HomeScreenSelectors } from '.';
import PageObject from '../PageObject';

interface HomeScreenElements {
	title: WebdriverIO.Element;
	homeButton: WebdriverIO.Element;
	mailButton: WebdriverIO.Element;
	settingsButton: WebdriverIO.Element;
}

class HomeScreen extends PageObject {
	private title: WebdriverIO.Element;
	private homeButton: WebdriverIO.Element;
	private mailButton: WebdriverIO.Element;
	private settingsButton: WebdriverIO.Element;

	constructor(driver: WebdriverIO.Browser, elems: HomeScreenElements) {
		super(driver);
		this.title = elems.title;
		this.homeButton = elems.homeButton;
		this.mailButton = elems.mailButton;
		this.settingsButton = elems.settingsButton;
	}

	static async initializeScreenElements(driver: WebdriverIO.Browser) {
		const elems: HomeScreenElements = {
			title: await driver.$(HomeScreenSelectors.title),
			homeButton: await driver.$(HomeScreenSelectors.homeBtn),
			mailButton: await driver.$(HomeScreenSelectors.mailBtn),
			settingsButton: await driver.$(HomeScreenSelectors.settingsBtn),
		};
		return elems;
	}

	static async build(driver: WebdriverIO.Browser) {
		const elems = await HomeScreen.initializeScreenElements(driver);
		return new HomeScreen(driver, elems);
	}
}

export default HomeScreen;
