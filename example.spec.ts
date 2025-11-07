import { test, expect } from "@playwright/test";

test("check page title", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await expect(page).toHaveTitle("Practice Page");
});

test("click link and verify navigation", async ({ page }) => {
  await page.goto("https://playwright.dev");
  await page.getByRole("link", { name: "Get started" }).click();
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});

//getByRole() is the smart locator finds elements on the page using their accessibility role -
//like button, link, textbox, heading, checkbox, etc.
//toBeVisible() is the assertion to verify if the element is actually visible on the page, screen.

test("type and check input value", async ({ page }) => {
  // Wait only for HTML to load (not ads/images) - much faster!
  await page.goto("https://www.w3schools.com/html/html_forms.asp", {
    waitUntil: "domcontentloaded",
  });

  // Use .first() because there are multiple inputs with name='fname' on the page
  const input = page.locator("input[name='fname']").first();
  await input.fill("Rutika");
  await expect(input).toHaveValue("Rutika");
});

//fill() = [Type inside box]
//toHaveValue() = [Assertion to verify the value inside the input box] = Checks what's typed inside.


test ('verify google title', async ({page})=>{
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});
