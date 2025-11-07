import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Reporter options
  reporter: [
    ["html"], // HTML report for viewing results
    ["list"], // List results in terminal
  ],

  timeout: 60000, // Global test timeout: 60 seconds

  use: {
    // Base URL if you want to use relative URLs in tests
    // baseURL: 'http://localhost:3000',

    trace: "on-first-retry", // Capture trace on first retry
    screenshot: "only-on-failure", // Take screenshot on failure
    video: "retain-on-failure", // Record video on failure
    navigationTimeout: 60000, // Navigation timeout: 60 seconds
  },

  // Test against multiple browsers
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // Uncomment to test on other browsers:
    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },
    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },
  ],
});
