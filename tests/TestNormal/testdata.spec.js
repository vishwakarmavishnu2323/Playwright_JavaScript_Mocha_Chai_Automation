//const { test, expect } = require('@playwright/test');
//const testdata = require('../testdata.json');
//import testdata from '../testdata.json';

import { test, expect } from '@playwright/test';

const testdata= JSON.parse(JSON.stringify(require('../../testdata/testjsondata/testdata.json')))

test('Login To Application', async ({ page }) => {

  await page.goto('https://freelance-learn-automation.vercel.app/login');

  //await page.locator('//input[@id="email1"]').fill(testdata.profile.username);
 // await page.locator('//input[@id="email1"]').fill(testdata.profile.address.area);
  await page.locator('//input[@id="email1"]').fill(testdata.profile.interest[0]);
  await page.locator('//input[@id="password1"]').fill(testdata.profile.password);

});

/*
// test multiple same data from json
test.describe('Data Driven Login Test', () => {

  for (const data of testdata.users) {

    test.describe(`Login with user ${data.id}`, () => {

      test('Login To Application', async ({ page }) => {

        await page.goto('https://freelance-learn-automation.vercel.app/login');

        await page.locator('//input[@id="email1"]').fill(data.username);

        await page.locator('//input[@id="password1"]').fill(data.password);

        await page.pause(); // debugging

      });

    });

  } 
});
*/



 //=========== OR ===========

test.describe('Data Driven Login Test', () => {

  for (const data of testdata.users) {

    test(`Login with user ${data.id}`, async ({ page }) => {

      await page.goto('https://freelance-learn-automation.vercel.app/login');

      await page.locator('#email1').fill(data.username);

      await page.locator('#password1').fill(data.password);

      await page.pause();

    });

  }
});
    

