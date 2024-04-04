# Sprint 7 project

Prerequisites for the entire project:

1) Node.js is installed on your computer: Make sure you have the latest version of Node.js installed. You can download and install it from the official Node.js website.
2) Required dependencies installed: You must have the required dependencies installed for your project, including fetch, as well as any other dependencies required for the test to run. You can install them by running npm install.
3) The config.js file exists: Make sure you have a config.js file that exports the API_URL object and INVALID_API_URL object. This file must be in the same directory as your test file.
4) tests are run using the command: npx jest

Once these prerequisites are met, you can run the test by following these instructions:



Task 1: Tests for GET requests

Test name 'status should be 200' for endpoint /api/v1/warehouses.

1) Open a terminal in VS code.
2) Run the test: Type the following command 'npx jest' in a terminal and press Enter.
3) Wait for the test to complete: The test will run and you will see the execution results in your terminal or command line. If the test is successful, you will see a test completion message. If the test fails, you will see an error message to help you understand what went wrong.

This code checks the expected value of the code (200) with the actual value obtained in the 'actualStatus' variable. If the response status code is not 200, the test will fail.

Test name 'response body contains name Everything You Need' for endpoint /api/v1/warehouses.

1) Open a terminal in VS code.
2) Run the test: Type the following command 'npx jest' in a terminal and press Enter.
3) Wait for the test to complete: The test will run and you will see the execution results in your terminal or command line. If the test is successful, you will see a test completion message. If the test fails, you will see an error message to help you understand what went wrong.

This test verifies that the body of the request response contains information about warehouses and at least one of them has a name containing the phrase "Everything You Need".
This uses the expect function, which checks that the name of the first warehouse in the response body contains the phrase "Everything You Need". The toContain method is used to check if a specified substring exists in a string.

Test name 'status should be 404 if using invalid api url' for endpoint /api/v1/warehouses.

1) Open a terminal in VS code.
2) Run the test: Type the following command 'npx jest' in a terminal and press Enter.
3) Wait for the test to complete: The test will run and you will see the execution results in your terminal or command line. If the test is successful, you will see a test completion message. If the test fails, you will see an error message to help you understand what went wrong.

This test verifies that when using an INVALID API URL, the response status code will be 404 (Not Found).
This is where a request is made to an INVALID API URL. If the request is successful, the response status code is stored in the actualStatus variable. If an error occurs while executing the request (for example, the specified URL cannot be connected), the error is caught and printed to the console.

Test name 'response body contains name Fresh Food' for endpoint /api/v1/warehouses.

This test verifies that the body of the request response contains information about warehouses and at least one of them has a name containing the phrase "Fresh Food".
Here the expect function is used, which checks that the name of the second warehouse (indexing starts from 0) in the response body contains the phrase "Fresh Food". The toContain method is used to check the presence of the specified substring in the warehouse name string.



Task 2: Tests for POST requests

Test name 'status should be 200' for endpoint /api/v1/warehouses/check.

For post-request tests, a request body is defined that will be sent along with the POST request. It contains an array of 'products' objects with information about the products.

1) Open a terminal in VS code.
2) Run the test: Type the following command 'npx jest' in a terminal and press Enter.
3) Wait for the test to complete: The test will run and you will see the execution results in your terminal or command line. If the test is successful, you will see a test completion message. If the test fails, you will see an error message to help you understand what went wrong.

This test verifies that when sending a POST request to a specific URL (${config.API_URL}/api/v1/warehouses/check) with a specific request body (requestBody), the response status code will be 200.
The 'expect' function checks that the response's actual status code (actualStatus) is equal to the expected value of 200. If the status code is not 200, the test will fail.

Test name 'status should be 200' for endpoint /api/v1/warehouses/check.

1) Open a terminal in VS code.
2) Run the test: Type the following command 'npx jest' in a terminal and press Enter.
3) Wait for the test to complete: The test will run and you will see the execution results in your terminal or command line. If the test is successful, you will see a test completion message. If the test fails, you will see an error message to help you understand what went wrong.

This test verifies that the request response body contains information that includes the phrase "Everything You Need."
The expectedResponseString variable will contain the actualResponseBody object converted to a string using the JSON.stringify() method. This is done for ease of comparison with the expected string.
The 'expect' function checks that the expectedResponseString contains the substring "Everything You Need". The 'toContain' method is used to check if a specified substring exists in a string.



Task 3: Tests for PUT requests

Test name 'status should be 200' for endpoint /api/v1/kits/5.

1) Open a terminal in VS code.
2) Run the test: Type the following command 'npx jest' in a terminal and press Enter.
3) Wait for the test to complete: The test will run and you will see the execution results in your terminal or command line. If the test is successful, you will see a test completion message. If the test fails, you will see an error message to help you understand what went wrong.

This test makes a PUT request to a specific URL using a specific request body and then checks that the response status code is 200.
The request body is written in the 'requestBody' variable, which will be sent along with the PUT request. It contains a name and a list of products.
The 'expect' function checks that the response's actual status code (actualStatus) is equal to the expected value of 200. If the status code is not 200, the test will fail.

Test name 'response body should contain ok true' for endpoint /api/v1/kits/5.

1) Open a terminal in VS code.
2) Run the test: Type the following command 'npx jest' in a terminal and press Enter.
3) Wait for the test to complete: The test will run and you will see the execution results in your terminal or command line. If the test is successful, you will see a test completion message. If the test fails, you will see an error message to help you understand what went wrong.

This test verifies that the body of the request response contains an object with the key 'ok' whose value is 'true'.
The 'expect' function checks that the value of the 'ok' key in the 'actualStatus' object is true. If this condition is not met, the test will fail.
So this test makes sure that the response to the request contains an object with the key 'ok' whose value is true.



Task 4: Tests for DELETE requests

Test name 'status should be 200' for endpoint /api/v1/kits/7.

1) Open a terminal in VS code.
2) Run the test: Type the following command 'npx jest' in a terminal and press Enter.
3) Wait for the test to complete: The test will run and you will see the execution results in your terminal or command line. If the test is successful, you will see a test completion message. If the test fails, you will see an error message to help you understand what went wrong.

This code is a test that makes a DELETE request to a specific URL and then checks that the response status code is 200.
This uses the expect function to check that the actual status code of the response (actualStatus) is equal to the expected value of 200. If the status code is not 200, the test will fail.
So this test verifies that when a DELETE request is made to a specific URL, the response status code will be 200.

Test name 'response body should contain ok true' for endpoint /api/v1/kits/7.

This test sends a DELETE request to a specific URL and checks that the response body contains an object with the key 'ok' whose value is true.
The 'expect' function checks that the value of the 'ok' key in the actualStatus object is true. If this condition is not met, the test will fail.
So this test makes sure that the response to the request contains an object with the key 'ok' whose value is true.