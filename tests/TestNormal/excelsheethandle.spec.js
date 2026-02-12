const { test, expect } = require('@playwright/test');
const XLSX = require('xlsx');
const path = require('path');

const userDataFile = path.join(__dirname, '../../testdata/uploadFiles/testdata.xlsx');


const workbook = XLSX.readFile(userDataFile);
const worksheet = workbook.Sheets['Sheet1'];
const users = XLSX.utils.sheet_to_json(worksheet);

//console.log(users); // debug

//handle single data from excel
// test('Login to application', async ({ page }) => {
//   await page.goto('https://conduit.bondaracademy.com/');
//   await page.getByRole('link', { name: 'Sign in' }).click();
//   await page.getByRole('textbox', { name: 'Email' }).fill(`${users[1].username}`); //Enter Email from Excel
//   await page.getByRole('textbox', { name: 'Password' }).fill(`${users[1].password}`);//Enter Password from Excel
//   await page.getByRole('button', { name: 'Sign in' }).click();
// });


//handle multiple data from excel
users.forEach((user) => {
  if (!user.username || !user.password) return;

  test(`Login test - ${user.username}`, async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(user.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(user.password);
    await page.getByRole('button', { name: 'Sign in' }).click();
  });
});
