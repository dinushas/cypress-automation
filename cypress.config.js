
const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
dotenv.config();

module.exports = defineConfig({
  allowCypressEnv: true,
  defaultCommandTimeout: 6000,

  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
     video: true, 
  },

  env: {},

  e2e: {
    setupNodeEvents(on, config) {
      config.env.username = process.env.USERNAME;
      config.env.password = process.env.PASSWORD;
      config.env.baseUrl = process.env.BASE_URL;

      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
  },
});