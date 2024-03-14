import type { PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
  testMatch: [
    "test/weather.spec.ts"
  ],
  webServer: {
    command: 'npm run dev', // Start your local dev server
    url: 'http://localhost:5174/',
    //reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,

  },
  reporter: [
    ['list'],
    ['json', { outputFile: 'test-results.json'}]
  ]
}

export default config;