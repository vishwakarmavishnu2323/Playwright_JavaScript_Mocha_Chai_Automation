const { test, expect } = require('@playwright/test');

test('handle radio button', async ({ page }) => {

  await page.goto('https://demoqa.com/radio-button');

  // Radio button
  await page.locator('#yesRadio').check({ force: true });
  // await page.check('#yesRadio');

  await expect(
    await page.locator('#yesRadio')
  ).toBeChecked();

  await expect(
    await page.locator('#yesRadio').isChecked()
  ).toBeTruthy(); // Yes

  await expect(
    await page.locator('#impressiveRadio').isChecked()
  ).toBeFalsy(); // Impressive

  await page.waitForTimeout(5000); // pausing code
});
