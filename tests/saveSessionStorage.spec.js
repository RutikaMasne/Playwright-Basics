const {test, expect} = require('@playwright/test');

const fs = require('fs');

test('Save and reuse session storage', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  // ✅ Use a real site with login fields
  await page.goto('https://www.saucedemo.com/');

  // ✅ Fill correct locators
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Wait for login success (dashboard to appear)
  await page.waitForURL('**/inventory.html');

  // ✅ Save sessionStorage after successful login
  const sessionData = await page.evaluate(() => JSON.stringify(sessionStorage));
  fs.writeFileSync('session.json', sessionData);

  console.log('✅ Session saved!');
  await context.close();
});
