const { test, expect } = require('@playwright/test');

test('Assertions Test', async ({ page }) => {

  // 1️⃣ Open URL
  await page.goto('https://demo.nopcommerce.com/register');

  // 2️⃣ URL assertion
  await expect(page).toHaveURL(/register/);

  // 3️⃣ Title assertion
  await expect(page).toHaveTitle('nopCommerce demo store. Register');

  // 4️⃣ Element visible
  const logo = await page.locator('.header-logo');
  await expect(logo).toBeVisible();

  // 5️⃣ Element enabled
  const searchBox = await page.locator('#small-searchterms');
  await expect(searchBox).toBeEnabled();

  // -------------------------
  // RADIO BUTTON
  // -------------------------
  const maleRadio = await page.locator('#gender-male');
  await maleRadio.check();
  await expect(maleRadio).toBeChecked();

  // -------------------------
  // CHECKBOX
  // -------------------------
  

//   const newsletterCheckbox = page.locator('#Newsletter');

//   await newsletterCheckbox.check({ force: true });  
//   await expect(newsletterCheckbox).toBeChecked();

  // -------------------------
  // ATTRIBUTE
  // -------------------------
  const registerButton = await page.locator('#register-button');
  await expect(registerButton).toHaveAttribute('type', 'submit');

  // -------------------------
  // TEXT ASSERTIONS
  // -------------------------
  await expect(page.locator('.page-title h1')).toHaveText('Register');//full test
  await expect(page.locator('.page-title h1')).toContainText('Reg');//partial test

  // -------------------------
  // INPUT VALUE
  // -------------------------
  const emailInput = await page.locator('#Email');
  await emailInput.fill('test@demo.com');
  await expect(emailInput).toHaveValue('test@demo.com');

  // -------------------------
  // COUNT
  // -------------------------
//   const options = await page.locator('select[name="DateOfBirthMonth"] option');
//   await expect(options).toHaveCount(13);

});
