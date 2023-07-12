const { defineConfig } = require("cypress");
const { queryTestDb } = require("./cypress/plugins/index");

module.exports = defineConfig({
  projectId: "3kx7zk",
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        // Define your task function here
          // Replace this with your actual database query logic
          // For demonstration purposes, we'll just return a dummy response
          queryDb: query => {
            return queryTestDb(query, config);
          }
      });
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
      products: "/products",
      db: {
        "host": "127.0.0.1",
        "user": "root",
        "password": "root123.",
        "database": "classicmodels"
      }
    },
    
  },
});
