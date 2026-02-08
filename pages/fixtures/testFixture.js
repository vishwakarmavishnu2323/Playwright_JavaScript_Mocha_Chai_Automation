const base = require('@playwright/test');
const { LoginPage } = require('../LoginPage');   // fix path if needed

exports.test = base.test.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await use(loginPage);
  }
});
