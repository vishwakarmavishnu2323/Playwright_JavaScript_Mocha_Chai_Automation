/*
page.getByAltText()     -> to locate an element (usually image) by its alt text
page.getByPlaceholder() -> to locate an input by placeholder attribute
page.getByRole()        -> to locate by explicit and implicit accessibility attributes
page.getByText()        -> to locate by text content
page.getByLabel()       -> to locate a form control by associated label text
page.getByTitle()       -> to locate an element by its title attribute
page.getByTestId()      -> to locate an element based on data-testid attribute
*/

const { test, expect } = require('@playwright/test');

test('Built-in Locators', async ({ page }) => {

  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );

  // page.getByAltText() – locate logo image
  const logo = await page.getByAltText('company-branding');
  await expect(logo).toBeVisible();

  // page.getByPlaceholder() – locate inputs by placeholder
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  // page.getByRole() – click login button
  await page.getByRole('button', { name: ' Login ' }).click();

  // verify logged-in user name
  const name = await page
    .locator("//p[@class='oxd-userdropdown-name']")
    .textContent();

  await expect(await page.getByText(name)).toBeVisible();

});
