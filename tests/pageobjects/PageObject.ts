abstract class PageObject {
	protected driver: WebdriverIO.Browser;

	constructor(driver: WebdriverIO.Browser) {
		this.driver = driver;
	}

	protected getDriver() {
		return this.driver;
	}
}

export default PageObject;
