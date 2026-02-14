const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1250,
    viewportHeight: 660,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://test.mdr.thelattice.org/",
    "defaultCommandTimeout": 15000,
  },

  env:  {

    Mobile_Num: '9999999999',
    Password: 'Pass@123',
      }
});
