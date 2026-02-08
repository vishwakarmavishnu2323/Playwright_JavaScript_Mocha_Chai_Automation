const { test, expect } = require('@playwright/test');

test('Dashboard test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  await expect(page.locator('h6')).toHaveText('Dashboard');
});


// Disable auth only for this file //method2
test.use({ storageState: undefined });

test('public page test', async ({ page }) => {
  await page.goto('https://example.com');
});
//=============or==========================
//Use tags + config //method 3 for  disable auth
test('public page test using tag', { tag: '@noauth' }, async ({ page }) => {
  await page.goto('https://example.com');
});

