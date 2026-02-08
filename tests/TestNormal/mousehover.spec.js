import { test, expect } from '@playwright/test';

test('Valid Login', async ({ page }) => {

  await page.goto('https://freelance-learn-automation.vercel.app/login');

  await page.getByPlaceholder('Enter Email').fill('admin@email.com');
  await page.getByPlaceholder('Enter Password').fill('admin@123');

  await page.getByRole('button', { name: 'Sign in' }).click();

  // Hover on Manage
  await page.locator('//span[text()="Manage"]').hover({ force: true });

  // Click on Manage Courses
  await page.locator('//a[normalize-space()="Manage Courses"]').click();

});
