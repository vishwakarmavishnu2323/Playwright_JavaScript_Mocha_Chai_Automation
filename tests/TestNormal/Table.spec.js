const { test, expect } = require('@playwright/test');

test('Handle Static Web Table', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const rows = page.locator('table[name="BookTable"] tbody tr');

  const rowCount = await rows.count();

  for (let i = 0; i < rowCount; i++) {
    const cells = rows.nth(i).locator('td');
    const text = await cells.allTextContents();
    console.log(text);
  }

  //Get specific cell value (e.g., Book = Learn Selenium)
const bookRow = page.locator(
  'table[name="BookTable"] tbody tr',
  { hasText: 'Learn Selenium' }
);

const price = await bookRow.locator('td').nth(3).textContent();
console.log('Price:', price);
});


test('Handle Dynamic Web Table', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const rows = page.locator('#productTable tbody tr');
  const rowCount = await rows.count();

  for (let i = 0; i < rowCount; i++) {
    const rowText = await rows.nth(i).textContent();
    console.log(rowText);
  }

  //Click checkbox for a specific product
const productRow = page.locator('#productTable tbody tr', {
  hasText: 'Laptop'
});

await productRow.locator('input[type="checkbox"]').check();
});


test('Handle Pagination Web Table', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  while (true) {

    const rows = page.locator('#paginationTable tbody tr');
    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {
      console.log(await rows.nth(i).textContent());
    }

    const nextBtn = page.locator('#paginationTable_next');

    // ✅ correct exit condition
    if (!(await nextBtn.isVisible())) {
      break;
    }

    await nextBtn.click();
    await page.waitForTimeout(1000);
  }
});
