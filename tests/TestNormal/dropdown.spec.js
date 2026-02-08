import { test, expect } from '@playwright/test';

test('Select values from dropdown', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/signup');

  // Select by label
  await page.locator('#state').selectOption({ label: 'Goa' });
  await page.waitForTimeout(1000);

  // Select by value
  await page.locator('#state').selectOption({ value: 'Himachal Pradesh' });
  await page.waitForTimeout(1000);

  // Select by index
  await page.locator('#state').selectOption({ index: 4 });
  await page.waitForTimeout(2000);

  // Print all dropdown values
  const values = await page.locator('#state option').allTextContents();
  console.log('All dropdown values:', values);
});

test('Select multiple options from dropdown', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/signup');
  // Multi-select dropdown
  await page.locator('#hobbies').selectOption([
    { label: 'Playing' },
    { label: 'Swimming' },
  ]);

  await page.waitForTimeout(3000);
});

test('Verify value exists in dropdown', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/signup');

  const state = await page.locator('#state').click({force:true});

  const allElements = await page.$$('option');

  let ddStatus = false;

  for (const element of allElements) {
    const value = await element.textContent();
    console.log('Dropdown value:', value);

    if (value.includes('Sikkim')) {
      ddStatus = true;
      console.log('Dropdown ddStatusvalue:', ddStatus);
      break;
    }
  }

  await expect(ddStatus).toBeTruthy();

})
