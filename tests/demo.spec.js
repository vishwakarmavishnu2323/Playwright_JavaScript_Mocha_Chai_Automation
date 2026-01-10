
import { test, expect } from '@playwright/test';

// maximize broswer windows
test.use({
  viewport: { width: 1500, height: 1000 },
});

test('Valid Login & logout', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

console.log(await page.viewportSize().width);
  console.log(await page.viewportSize().height);

  await page.getByPlaceholder('Username').fill('Admin',{delay:200});

  await page.locator('input[name="password"]').fill('admin123');

  await page.locator('//button[@type="submit"]').click();

  await page.waitForTimeout(5000)

  await expect(page).toHaveURL(/dashboard/)

  await page.getByAltText("profile picture").first().click()
  await page.getByText("Logout").click()
  await page.waitForTimeout(3000)
  await expect(page).toHaveURL(/login/)


});

test('Verify Error Message', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByPlaceholder('Username').fill('Admin');

  await page.getByPlaceholder('Password').fill('adminasdas');

  await page.locator('//button[normalize-space()="Login"]').click();

  const errorMessage = await page
    .locator('//p[contains(@class,"alert-content-text")]')
    .textContent();

  console.log('Error message is:', errorMessage);

  //await expect(errorMessage).toContain('Invalid');
  await expect(errorMessage.includes('Invalid')).toBeTruthy()

  //await expect(errorMessage).toBe('Invalid credentials');
   await expect(errorMessage==="Invalid credentials").toBeTruthy()
});




