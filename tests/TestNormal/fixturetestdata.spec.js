const { test ,expect} = require('../../fixtures/pagetestFixture.js');

test('Multiple login tests', async ({ page, loginPage }) => {
  for (const data of loginPage) {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.fill('input[name="username"]', data.username);
    await page.fill('input[name="password"]', data.password);
    await page.click('button[type="submit"]');
  }
});
