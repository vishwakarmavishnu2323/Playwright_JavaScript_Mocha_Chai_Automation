const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage1');
const { DashboardPage } = require('../pages/DashboardPage');
const testData = require('../utils/testData');
const { getRandomEmail } = require('../utils/randomData');
//const { waitForPageLoad } = require('../utils/helper');

// test('Dashboard load test', async ({ page }) => {
//   await page.goto('/dashboard');
//   await waitForPageLoad(page);
// });


// const email = getRandomEmail();
// //await page.fill('#email', email);
// console.log(email)


// test('Valid Login Test', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   const dashboardPage = new DashboardPage(page);

//   await loginPage.navigate();
//   await loginPage.login('admin', 'admin123');

//   const text = await dashboardPage.getWelcomeText();
//   expect(text).toContain('Welcome');
// });




test('Login using utils test data', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login(
    testData.users.valid.username,
    testData.users.valid.password
  );

  await expect(page).toHaveURL(/dashboard/);
});
