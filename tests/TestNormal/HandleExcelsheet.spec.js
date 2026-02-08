import { test, expect } from '@playwright/test';

// download xlsx using command     npm i xlsx --save-dev

//Import required libraries
const XLSX = require('xlsx');
const path = require('path');

const userDataFile = path.join(__dirname, '../../testdata/uploadFiles/testdata.xlsx');

const workbook = XLSX.readFile(userDataFile); //Read Excel file
  const worksheet = workbook.Sheets['Sheet1'];  //Access Excel sheet
 const users = XLSX.utils.sheet_to_json(worksheet); //Convert Excel → JSON  & // [{email, password}, ...]

// test('Login to application', async ({ page }) => {
//   await page.goto('https://conduit.bondaracademy.com/');
//   await page.getByRole('link', { name: 'Sign in' }).click();
//   await page.getByRole('textbox', { name: 'Email' }).fill(`${users[1].email}`); //Enter Email from Excel
//   await page.getByRole('textbox', { name: 'Password' }).fill(`${users[1].password}`);//Enter Password from Excel
//   await page.getByRole('button', { name: 'Sign in' }).click();
// });



users.forEach((user) => {
  // 👉 skip empty Excel rows
  if (!user.email || !user.password) {
    return;
  }
    test(`test multiple data using excel sheet - ${user.email}`, async ({ page }) => {

      await page.goto('https://conduit.bondaracademy.com/');
      await page.getByRole('link', { name: 'Sign in' }).click();
      await page.getByRole('textbox', { name: 'Email' }).fill(user.email);
      await page.getByRole('textbox', { name: 'Password' }).fill(user.password);
      await page.getByRole('button', { name: 'Sign in' }).click();

      await expect(page.getByText('Your Feed')).toBeVisible();
    });
});




