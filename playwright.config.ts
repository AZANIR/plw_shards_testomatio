import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration with Testomat.io reporter
 * Supports sharded runs in CI/CD pipelines
 */
export default defineConfig({
  testDir: './tests',
  
  // Timeout settings
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  
  // Run tests in parallel (can be overridden in CI)
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  
  // Reporter configuration
  reporter: [
    ['list'], // Console reporter
    ['@testomatio/reporter/playwright', {
      apiKey: process.env.TESTOMATIO,
      // Optional: set run name from env or use default
      run: process.env.TESTOMATIO_RUN,
      // Optional: set project ID if needed
      projectId: process.env.TESTOMATIO_PROJECT_ID,
    }],
  ],
  
  // Shared settings for all projects
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment to add more browsers
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});

