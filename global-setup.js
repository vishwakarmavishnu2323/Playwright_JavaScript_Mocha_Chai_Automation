
//method1 
// const { chromium } = require('@playwright/test');
// //Skip Login in Playwright 🚀 | Save & Reuse Authentication State
// module.exports = async () => {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();

//   await page.goto('https://opensource-demo.orangehrmlive.com/');

//   await page.fill('input[name="username"]', 'Admin');
//   await page.fill('input[name="password"]', 'admin123');
//   await page.click('button[type="submit"]');

//   // wait for dashboard
//   await page.waitForURL('**/dashboard');

//   // save authentication state
//   await page.context().storageState({ path: '.auth/user.json' });

//   await browser.close();
// };
