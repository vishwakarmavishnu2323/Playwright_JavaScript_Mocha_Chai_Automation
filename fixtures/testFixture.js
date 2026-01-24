
const base = require('@playwright/test');

exports.test = base.test.extend({
  loggedInPage: async ({ page }, use) => {
    // SETUP
    await page.goto('/login');
    await page.fill('#username', 'admin');
    await page.fill('#password', 'admin123');
    await page.click('#login');

    // PROVIDE FIXTURE
    await use(page);

    // TEARDOWN (optional)
    await page.close();
  }
});

exports.expect = base.expect;
