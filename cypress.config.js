const { defineConfig } = require("cypress");

const ENV = process.env.ENV || 'dev';

 // URL e credenciais de acesso para os ambientes de desenvolvimento e produção
const urls = {
  dev: '',
  prod: ''
};

 // Credenciais de acesso para os ambientes de desenvolvimento e produção 
const users = {
  dev: {
    username: '',
    password: ''
  },
  prod: {
    username: '',
    password: ''
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