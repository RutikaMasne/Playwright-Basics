# Playwright Learning Project

A simple Playwright test suite for learning browser automation.

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm

## 🚀 Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install browsers:**
   ```bash
   npx playwright install
   ```

3. **Run tests:**
   ```bash
   npm test
   ```

## 🧪 Available Tests

This project includes 3 example tests:

1. **check page title** - Verifies page title
2. **click link and verify navigation** - Tests link clicking
3. **type and check input value** - Tests form input

## 📝 Available Commands

```bash
# Run all tests (headless)
npm test

# Run with browser visible
npm run test:headed

# Interactive UI mode (recommended for learning!)
npm run test:ui

# Debug mode (step through tests)
npm run test:debug

# Run specific test file
npm run test:specific

# Test on specific browsers
npm run test:chrome
npm run test:firefox
npm run test:webkit

# View last test report
npm run report

# Code generator (record your actions to create tests)
npm run codegen
```

## 🎓 Learning Resources

- **Playwright UI Mode:** Best way to see tests running and debug
  ```bash
  npm run test:ui
  ```

- **Code Generator:** Record your browser actions to generate test code
  ```bash
  npm run codegen https://example.com
  ```

## 📚 Official Documentation

- [Playwright Docs](https://playwright.dev)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)

## 🔍 Test Examples Explained

### Example 1: Page Title Check
```typescript
test("check page title", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await expect(page).toHaveTitle("Practice Page");
});
```

### Example 2: Navigation Test
```typescript
test("click link and verify navigation", async ({ page }) => {
  await page.goto("https://playwright.dev");
  await page.getByRole("link", { name: "Get started" }).click();
  await expect(page.getByRole("heading", { name: "Installation" })).toBeVisible();
});
```

### Example 3: Form Input
```typescript
test("type and check input value", async ({ page }) => {
  await page.goto("https://www.w3schools.com/html/html_forms.asp", {
    waitUntil: "domcontentloaded"
  });
  const input = page.locator("input[name='fname']").first();
  await input.fill("Rutika");
  await expect(input).toHaveValue("Rutika");
});
```

## 💡 Tips

- Use `waitUntil: "domcontentloaded"` for faster page loads on ad-heavy sites
- Use `.first()`, `.last()`, or `.nth(index)` when multiple elements match
- Screenshots and videos are automatically captured on test failures
- Check `test-results/` folder for debugging artifacts

## 🐛 Troubleshooting

**Tests timing out?**
- Check your internet connection
- Try using `waitUntil: "domcontentloaded"` instead of default "load"
- Increase timeout in `playwright.config.ts`

**Multiple elements found?**
- Use `.first()`, `.last()`, or more specific selectors
- Use `getByRole()` for better targeting

**Browser not opening?**
- Run `npx playwright install` to download browsers
- Check if you're using headless mode (default)

---

Happy Testing! 🎭 
