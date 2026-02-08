const { test, expect } = require('@playwright/test');

/* =====================================================
   1️⃣ Simple input fill (Direct value entry)
   ===================================================== */
// test('Date Picker - simple input', async ({ page }) => {
//   await page.goto('https://testautomationpractice.blogspot.com/');
//   await page.fill('#datepicker', '03/15/2024');
//   await page.waitForTimeout(3000);
// });


/* =====================================================
   2️⃣ Date Picker using loop (Year / Month / Date)
   ===================================================== */


//const { test } = require('@playwright/test');

test('Date Picker - using while loop', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const year = '2024';
  const month = 'March';
  const date = '15';

  await page.click('#datepicker');

  let attempts = 0; // safety counter

  while (attempts < 12) {
    const currentYear = (await page.locator('.ui-datepicker-year').textContent()).trim();
    const currentMonth = (await page.locator('.ui-datepicker-month').textContent()).trim();

    if (currentYear === year && currentMonth === month) {
      break;
    }

    await page.locator('.ui-datepicker-next').click();
    attempts++;
    
  }

  const dates = await page.$$("//a[@class='ui-state-default']");

  for (const dt of dates) {
    if ((await dt.textContent()).trim() === date) {
      await dt.click();
      break;
    }
  }

  await page.waitForTimeout(3000);
});

/* =====================================================
   3️⃣ Date selection WITHOUT loop (Single statement)
  
 ===================================================== */
 /*
test('Date Picker - without loop', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const date = '15';

  await page.click('#datepicker');
  await page.click(`//a[@class='ui-state-default' and text()='${date}']`);

  await page.waitForTimeout(5000);
});
*/