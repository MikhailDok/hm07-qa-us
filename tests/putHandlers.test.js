// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"name": "My modified kit",
	"productsList": [
		{
			"id": 1,
			"quantity": 4
		},
		{
			"id": 5,
			"quantity": 2
		},
		{
			"id": 3,
			"quantity": 1
		},
		{
			"id": 4,
			"quantity": 1
		}
	]
}

test('status should be 200', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
		expect(actualStatus).toBe(200);
	} catch (error) {
		console.error(error);
	}
});




test('response body should contain ok true', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus['ok']).toBe(true);
});
