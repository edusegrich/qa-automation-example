import { DesiredCapabilities } from '@wdio/types/build/Capabilities';

let _driver: WebdriverIO.Browser;

export const appBundle = `io.span.${process.env.PLATFORM}.installer`;
const appPath = (browser.capabilities as DesiredCapabilities).app as string;

export const driverSingleton = async () => {
	if (!_driver) _driver = browser;
	else {
		if (!(await _driver.isAppInstalled(appBundle))) {
			await _driver.installApp(appPath);
			await _driver.activateApp(appBundle);
		}
	}
	return _driver;
};
export const driverTeardown = async () => {
	await _driver.deleteSession();
};

export const inputRandomizer = (
	isEmail: boolean,
	isNumber: boolean,
	length?: number,
) => {
	let result = '';
	const _length = length ? length : 10;
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;

	if (isNumber) {
		for (let i = 0; i < _length; i++) {
			result += Math.floor(Math.random() * 10);
		}
	} else {
		for (let i = 0; i < _length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
	}
	if (isEmail) {
		result += '@test.com';
	}

	return result;
};

export const delay = (n: number) => {
	return new Promise(function (resolve) {
		setTimeout(resolve, n * 1000);
	});
};
