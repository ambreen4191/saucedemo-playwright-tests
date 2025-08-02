import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  outputDir: './test-results', // Output directory for test results
  reporter: [
    ['html', { outputFolder: './test-results/reports' }], // Output directory for HTML reports
    ['list'], // Optional: Also output to the console
  ],
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: false, // Set to false to see the browser actions
    trace: 'on', // Enable tracing for debugging
  },
};

export default config;