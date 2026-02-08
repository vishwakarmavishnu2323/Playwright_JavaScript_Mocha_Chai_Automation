

import { test, expect } from '@playwright/test';
import testdata from '../../testData/testjsondata/logintestdata.json';

testdata.forEach((data) => {
    test('Login To Application'+ data.username, async ({ page }) => {

  await page.goto('https://freelance-learn-automation.vercel.app/login');

  await page.locator('//input[@id="email1"]').fill(data.username);
  await page.locator('//input[@id="password1"]').fill(data.password);

});
});
//=====================or===============================
// testdata.forEach((data) => {
//   test(`Login test for ${data.username}`, async ({ page }) => {
//     await page.goto('https://opensource-demo.orangehrmlive.com/');

//     await page.fill('input[name="username"]', data.username);
//     await page.fill('input[name="password"]', data.password);
//     await page.click('button[type="submit"]');
//   });
// });
//============================or==================================

// for(const data of testdata) {
//     test('Login To Application'+ data.username, async ({ page }) => {

//   await page.goto('https://freelance-learn-automation.vercel.app/login');

//   await page.locator('//input[@id="email1"]').fill(data.username);
//   await page.locator('//input[@id="password1"]').fill(data.password);

// });
// }
