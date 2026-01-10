const { test, expect } = require('@playwright/test');

test('Verify Application Title', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');

  // Type text in search box
  await page.locator('textarea[name="q"]').type('Mukesh Otwani');

  // Wait for auto-suggestion list
  await page.waitForSelector('//li[@role="presentation"]');

  // Navigate suggestions using keyboard
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');

  // Select suggestion
  await page.keyboard.press('Enter');

  // Optional: verify title contains searched text
  await expect(page).toHaveTitle(/Mukesh Otwani/);
});




test('Verify Application Title Using Loop', async ({ page }) => {
  // Open Google
  await page.goto('https://www.google.com');

  // Type search keyword
  await page.locator('textarea[name="q"]').type('Mukesh Otwani');

  // Wait for auto-suggestions
  await page.waitForSelector("//li[@role='presentation']");

  // Capture all suggestions
  const elements = await page.$$("//li[@role='presentation']");

  for (let i = 0; i < elements.length; i++) {

    const text = await elements[i].textContent()

    if (text.includes('youtube')) {

      await elements[i].click()
      break
    }
  }

  // Optional assertion
  await expect(page).toHaveTitle(/youtube/i);
});
