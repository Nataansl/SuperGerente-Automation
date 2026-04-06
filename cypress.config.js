const { defineConfig } = require("cypress");

const ENV = process.env.ENV || 'dev';

const urls = {
  dev: 'https://hmax-api-hub-dev.web.app/#/',
  prod: 'https://supergerente.hmax.com.br/#/'
};

const users = {
  dev: {
    username: 'LOGIN DESENVOLVIMENTO',
    password: 'SENHA DESENVOLVIMENTO'
  },
  prod: {
    username: 'LOGIN PRODUÇÃO',
    password: 'SENHA PRODUÇÃO'
  }
};

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/reports/junit/test-results-[hash].xml",
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: "Relatório de teste",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    }
  },

  chromeWebSecurity: false,

  e2e: {
    baseUrl: urls[ENV],

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },

  env: {
    ...users[ENV]
  }
});