const {test, expect } = require('@playwright/test');
test('Launch and Screenshot Test', async ({page}) =>{
    // Step1 : goto website
    await page.goto('https://playwright.dev');
   
})