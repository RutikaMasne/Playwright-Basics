import { test, expect } from '@playwright/test';

test('Google Search Test', async ({ page }) => {
  // Step 1: Open Google
  await page.goto('https://www.google.com');
  // Step 2: Get title
  const title = await page.title();
  console.log('Page title is:', title);
  // Step 3: Verify title
  await expect(page).toHaveTitle(/Google/);
});
_________________________________________________________

import {test, expect } from '@playwright/test';

test ('Google Search Test', async ({page}) =>{
    // Step1 : Open google
    await page.goto('https://www.google.com');
    // Step2 : Get Title
    const title = await page.title();
    console.log('Page title is:', title);
    //Step 3 : Verify Title
    await expect(page).toHaveTitle(/Google/);

});


