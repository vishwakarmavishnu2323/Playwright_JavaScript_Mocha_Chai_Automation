const { test, expect } = require('@playwright/test');

test('handle inputbox - demoqa', async ({ page }) => {

  await page.goto('https://demoqa.com/text-box');

  // Input box – Full Name
  const fullNameInput = page.locator('#userName');

  await expect(fullNameInput).toBeVisible();
  await expect(fullNameInput).toBeEmpty();
  await expect(fullNameInput).toBeEditable();
  await expect(fullNameInput).toBeEnabled();

  await fullNameInput.fill('John Doe');

  await page.waitForTimeout(5000); // pause to observe
});
