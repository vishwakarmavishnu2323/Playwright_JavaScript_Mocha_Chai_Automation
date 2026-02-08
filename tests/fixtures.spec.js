const { test,expect ,chromium ,firefox,webkit} = require('@playwright/test');

//==========================1️⃣ Browser –Launching and closing a browser manually===========

test('Chromium browser test', async () => {
  const browser = await chromium.launch({ headless: false });
   console.log('Chromium Browser launched');

  await browser.close();
});

test('Firefox browser test', async () => {
  const browser = await firefox.launch({ headless: false });
  console.log('firefox Browser launched');

  await browser.close();
});

test('WebKit browser test', async () => {
  const browser = await webkit.launch({ headless: false });
  console.log('WebKit Browser launched');

  await browser.close();
});
 //==========================2️⃣ Browser Context -->Creating an isolated user session (like Incognito)===========
 

test('Browser Context test',async () => {
  const browser = await chromium.launch({ headless: false });

  // Create a new browser context
  const context = await browser.newContext();
  console.log('New browser context created');
  await browser.close();
});

//===================3️⃣ Page---> Opening a tab and interacting with a website===============


test('Page test',async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();

  // Create a page (tab)
  const page = await context.newPage();

  await page.goto('https://example.com');



  console.log('Page actions completed');
  await browser.close();
});
// =============== 2️⃣ Browser fixture example===========================

test('browser example', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
//========================3️⃣ Browser Context fixture============

test('browser context example', async ({ context }) => {
  const page = await context.newPage();

  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
//================1️⃣ Page fixture example===================

test('page example', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
//=============== Create browser context with options========================

test('browser context with baseURL and options', async ({ browser }) => {
  // Create browser context with options
  const context = await browser.newContext({
    baseURL: 'https://www.google.com',
    viewport: { width: 1280, height: 720 },
    locale: 'en-US',
    permissions: ['geolocation'],
    colorScheme: 'light',
  });

  // Create page from context
  const page = await context.newPage();

  // baseURL is automatically used
  await page.goto('/search?q=test');

  

  await context.close();
});
