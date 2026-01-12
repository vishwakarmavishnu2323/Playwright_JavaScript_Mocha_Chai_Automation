import { test, expect } from '@playwright/test';

test('page screenshot', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.screenshot({
    path: 'tests/screenshots/' + Date.now() + 'HomePage.png'
  });
});

test('Full page screenshot', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.screenshot({
    path: 'tests/screenshots/' + Date.now() + 'FullPage.png',
    fullPage: true
  });
});

test('Element screenshot', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page
    .locator('#login-button')
    .screenshot({
      path: 'tests/screenshots/' + Date.now() + 'LoginButton.png'
    });
});
