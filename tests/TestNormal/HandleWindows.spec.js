const { test, expect, chromium } = require('@playwright/test');

test('Handle Pages/Windows', async () => {

  const browser = await chromium.launch();
  const context = await browser.newContext();

  const page1 = await context.newPage();
  const page2 = await context.newPage();

  const allPages = context.pages();
  console.log('No Of Pages created:', allPages.length);

  await page1.goto('https://opensource-demo.orangehrmlive.com/');
  await expect(page1).toHaveTitle('OrangeHRM');

  await page2.goto('https://www.orangehrm.com/');
  await expect(page2).toHaveTitle(/OrangeHRM/);

  await browser.close();
});



test('Handle Multiple Pages/Windows', async () => {

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await expect(page).toHaveTitle('OrangeHRM');

  const pagePromise = context.waitForEvent('page');
  await page.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

  const newPage = await pagePromise;
  await expect(newPage).toHaveTitle(/Human Resources Management Software | HRMS | OrangeHRM/);

  await browser.close();
});

