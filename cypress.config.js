const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9i7e6j',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    base_url:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
   
  },

  

});

