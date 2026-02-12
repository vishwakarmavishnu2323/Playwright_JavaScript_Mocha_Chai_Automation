
//method2
const { test } = require('@playwright/test');
import fs from 'fs';
//Skip Login in Playwright 🚀 | Save & Reuse Authentication State
test('Login and save session', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // Wait for dashboard
 // await page.waitForURL('**/dashboard');

    // Ensure folder exists
  fs.mkdirSync('.auth', { recursive: true });

  // Save authentication state
  await page.context().storageState({ path: '.auth/user.json' });
});




