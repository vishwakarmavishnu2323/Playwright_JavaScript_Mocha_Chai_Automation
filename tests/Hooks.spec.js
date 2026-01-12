import { test, expect } from '@playwright/test';


// Playwright Hooks

// beforeEach: This hook is executed before each individual test.

// afterEach: This hook is executed after each individual test.

// beforeAll: This hook is executed once before any of the tests start running.

// afterAll: This hook is executed once after all the tests have been run.

/*
let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('https://www.demoblaze.com/index.html');

  // Login
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator("//button[normalize-space()='Log in']").click();
});

test.afterAll(async () => {
  await page.locator('#logout2').click();
});

*/



let page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('https://www.demoblaze.com/index.html');

  // Login
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator("//button[normalize-space()='Log in']").click();
});

test.afterEach(async () => {
  // Logout
  await page.locator('#logout2').click();
  await page.close();
});

test('Home Page Test', async () => {
  const products = await page.$$('.hrefch');
  expect(products.length).toBe(9);
});





