const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage.js');   // fix path if needed

exports.test = base.test.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await use(loginPage);
  }
});
