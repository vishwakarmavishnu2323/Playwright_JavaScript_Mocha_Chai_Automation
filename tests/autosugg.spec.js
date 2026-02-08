const { test, expect } = require('@playwright/test');
/*
test('Verify Application Title', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');

  // Type text in search box
  await page.locator('textarea[name="q"]').fill('Vishnu vishwakarma');

  // Wait for auto-suggestion list
  await page.waitForSelector("//li[@data-attrid='AutocompletePrediction']");

  // Navigate suggestions using keyboard
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown')

  // Select suggestion
  await page.keyboard.press('Enter');

  // Optional: verify title contains searched text
  await expect(page).toHaveTitle(/Vishnu vishwakarma/);
});  
*/



test('Verify Application Title Using Loop', async ({ page }) => {
  // Open Google
  await page.goto('https://www.google.com');

  // Type search keyword
  await page.locator('textarea[name="q"]').type('Vishnu vishwakarma');

  // Wait for auto-suggestions
  await page.waitForSelector("//li[@data-attrid='AutocompletePrediction']");

  // Capture all suggestions
  const elements = await page.$$("//li[@data-attrid='AutocompletePrediction']");

  for (let i = 0; i < elements.length; i++) {

    const text = await elements[i].textContent()

    if (text.includes('twitter')) {

      await elements[i].click()
      break
    }
  }

  // Optional assertion
  await expect(page).toHaveTitle(/twitter/i);
});

test('Verify Application Title Using for...of Loop', async ({ page }) => {
  // Open Google
  await page.goto('https://www.google.com');

  // Type search keyword
  await page.locator('textarea[name="q"]').type('Vishnu vishwakarma');

  // Wait for auto-suggestions
  await page.waitForSelector("//li[@data-attrid='AutocompletePrediction']");

  // Capture all suggestions
  const elements = await page.$$("//li[@data-attrid='AutocompletePrediction']");

  for (const element of elements) {
    const text = await element.textContent();

    if (text && text.includes('twitter')) {
      await element.click();
      break; // exit loop once matched
    }
  }

  // Assertion
  await expect(page).toHaveTitle(/twitter/i);
});
