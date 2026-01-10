import { test, expect } from '@playwright/test';

test('Select Values From Dropdown', async ({ page }) => {

  await page.goto('https://freelance-learn-automation.vercel.app/signup');

  // Select by label
  await page.locator('#state').selectOption({ label: 'Goa' });
  await page.waitForTimeout(1000);

  // Select by value
  await page.locator('#state').selectOption({ value: 'Himachal Pradesh' });
  await page.waitForTimeout(1000);

  // Select by index
  await page.locator('#state').selectOption({ index: 4 });
  await page.waitForTimeout(3000);

  const value = await page.locator('#state').textContent();
  console.log('All dropdown values:', value);




  // Get the dropdown
const state = page.$('#state');

let ddStatus = false;

// Get all option elements
//const allElements = await state.locator('option').all();
const allElements = await state.$$('option')

// Loop through options
for (let i = 0; i < allElements.length; i++) {
  const value = await allElements[i].textContent();
  console.log('Value from dropdown using for loop:', value);

   if (value.includes('Rajasthan')) {
    ddStatus = true;
    break;
  }
}
await expect(ddStatus).toBeTruthy();



await page.locator('#hobbies').selectOption([
  { label: 'Playing' },
  { label: 'Swimming' },
]);

await page.waitForTimeout(3000);



});
