const { test: base, expect } = require('@playwright/test');

const test = base.extend({
  loggedInPage: async ({ page }, use) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await use(page);
    await page.close();
  },
});

test('Dashboard visible', async ({ loggedInPage }) => {

  await expect(loggedInPage.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

});


