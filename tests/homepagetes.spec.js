const { test, expect } = require('@playwright/test');

test('Home Page', async ({ page }) => {

  // Navigate to URL
  await page.goto('https://www.demoblaze.com/index.html');

  // Get and print page title
  const pageTitle = await page.title();
  console.log('Page title is:', pageTitle);

  // Validate page title
  await expect(page).toHaveTitle('STORE');

  // Get and print page URL
  const pageURL = page.url();
  console.log('Page URL is:', pageURL);

  // Validate page URL
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

  // Close browser
  await page.close();
});
