import { test, expect } from '@playwright/test';

test('search playwright tutorial on youtube', async ({ page }) => {
  await page.goto("https://www.youtube.com");
  await page.locator('input[name="search_query"]').fill("playwright tutorial");
  await page.keyboard.press("Enter");
   await page.waitForTimeout(3000); 
  await page.screenshot({ path: 'youtube_playwright.png' });
});
