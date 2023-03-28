export const parseTestID = (id: string) =>
	process.env.PLATFORM === 'android'
		? `android=new UiSelector().resourceId("${id}")`
		: `~${id}`;

export const waitForTimeout = async (driver: WebdriverIO.Browser, timeout: number) => {
	try {
		await driver.$('non-existing-id').waitForDisplayed({ timeout: timeout });
	} catch {
		console.log('Timeout exceeded.');
	}
};

export const tapByCoordinates = async (driver: WebdriverIO.Browser, x: number, y: number) => {
	await driver.touchAction({
		action: 'tap',
		x: x,
		y: y
	});
};

export const doubleTapByCoordinates = async (driver: WebdriverIO.Browser, x: number, y: number) => {
	await driver.touchAction({
		action: 'tap',
		x: x,
		y: y
	});
	await driver.touchAction({
		action: 'tap',
		x: x,
		y: y
	});
};

export const scrollDown = async (driver: WebdriverIO.Browser, y1 = process.env.PLATFORM === 'android' ? 1700 : 700, y2 = 200) => {
	await driver.touchAction(([
		{ action: 'longPress', x: 200, y: y1 },
		{ action: 'moveTo', x: 200, y: y2 },
		'release'
	]));
};

export const scrollUp = async (driver: WebdriverIO.Browser, y1 = 200, y2 = 1700) => {
	process.env.PLATFORM === 'android'
		? await driver.touchAction(([
			{ action: 'longPress', x: 200, y: y1 },
			{ action: 'moveTo', x: 200, y: y2 },
			'release'
		]))
		: await driver.execute('mobile: scroll', { direction: 'up' });
};
