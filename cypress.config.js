const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3kx7zk",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    video: false,
    baseUrl: 'https://www.automationexercise.com/',
    chromeWebSecurity: false,
    epxerimentalSessionAndOrigin: true,
    // excludeSpecPattern:'cypress/e2e/products.ts',
    pageLoadTimeout: 12000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
    retries: {
      runMode: 0,
      openMode: 0
    },
    env: {
      products: "/products"
    }
  },
});
