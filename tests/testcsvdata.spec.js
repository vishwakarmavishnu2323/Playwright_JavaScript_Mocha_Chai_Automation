const { test, expect } = require('@playwright/test');
const { readCSV } = require('../utils/csvReader.js');

let testData = [];

test.beforeAll(async () => {
  testData = await readCSV('testdata/loginData.csv');
});

testData.forEach((data) => {
  test(`Login test for ${data.username}`, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await page.fill('input[name="username"]', data.username);
    await page.fill('input[name="password"]', data.password);
    await page.click('button[type="submit"]');
  });
});
