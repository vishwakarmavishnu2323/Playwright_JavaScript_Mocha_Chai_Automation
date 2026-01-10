import { test, expect } from '@playwright/test';

test('Verify file upload', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/upload');

  await page.locator('#file-upload').setInputFiles('./uploadFiles/image1.png');

  await page.locator('#file-submit').click();

  await expect(page.locator('h3')).toHaveText('File Uploaded!');

});
