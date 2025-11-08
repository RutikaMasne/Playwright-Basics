const {test, expect} = require('@playwright/test');


test('Assertion test', async ({page}) =>{

await page.goto("https://www.saucedemo.com/");

//Title Assertion
await expect(page).toHaveTitle(/Swag Labs/);

// URL Assertion
await expect(page).toHaveURL('https://www.saucedemo.com/');

//Element Assertion - Check if username field is visible
const username = page.locator('#user-name');
const password = page.locator('#password');
 const loginButton = page.locator('#login-button');

await expect(username).toBeVisible();
await expect(password).toBeVisible();
await expect(loginButton).toBeEnabled();


//Enter credentials and login

await username.fill('standard_user');
await password.fill('secret_sauce');
await loginButton.click();

// Verify successful login (Products page)

await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

console.log(" Assertions for Title, URL, and Elements passed successfully!");


});