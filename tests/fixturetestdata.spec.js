const { test ,expect} = require('../pages/fixtures/testFixture');

test('Multiple login tests', async ({ page, loginData }) => {
  for (const data of loginData) {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.fill('input[name="username"]', data.username);
    await page.fill('input[name="password"]', data.password);
    await page.click('button[type="submit"]');
  }
});
