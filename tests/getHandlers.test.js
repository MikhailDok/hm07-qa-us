// eslint-disable-next-line no-undef
const config = require('../config');

test('status should be 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});



test('response body contains name Everything You Need', async () => {
	let actualResponsebody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponsebody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponsebody[0].name).toContain('Everything You Need');
});



test('status should be 404 if using invalid api url', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.INVALID_API_URL}/api/v1/warehouses`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(404);
});



test('response body contains name Fresh Food', async () => {
	let actualResponsebody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponsebody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponsebody[1].name).toContain('Fresh Food');
});