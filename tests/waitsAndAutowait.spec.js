const {test, expect} = require('@playwright/test')


test('Waits and Auto-wait', async ({ page }) =>{
	
await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

const startButton = page.locator('button');

await startButton.click();

const finishText = page.locator('#finish h4');

await expect(finishText).toBeVisible({timeout:10000});

await expect(finishText).toHaveText('Hello World!');

console.log("Auto-wait and explicit wait handleed successfully !");

});