import { test, expect } from '@playwright/test';

// download xlsx using command     npm i xlsx --save-dev

//Import required libraries
const XLSX = require('xlsx');
const path = require('path');

const userDataFile = path.join(__dirname, '../uploadFiles/testdata.xlsx'); //Build Excel file path

test('Login to application', async ({ page }) => {
  const workbook = XLSX.readFile(userDataFile); //Read Excel file
  const worksheet = workbook.Sheets['Sheet1'];  //Access Excel sheet
  const xlsToJson = XLSX.utils.sheet_to_json(worksheet); //Convert Excel → JSON

  await page.goto('https://conduit.bondaracademy.com/');

  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(`${xlsToJson[1].email}`); //Enter Email from Excel
  await page.getByRole('textbox', { name: 'Password' }).fill(`${xlsToJson[1].password}`);//Enter Password from Excel
  await page.getByRole('button', { name: 'Sign in' }).click();
});
