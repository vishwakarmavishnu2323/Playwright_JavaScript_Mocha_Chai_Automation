const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage1');

exports.test = base.test.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await use(loginPage);
  }
});
