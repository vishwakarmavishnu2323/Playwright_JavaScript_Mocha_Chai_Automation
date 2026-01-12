import { test, expect } from '@playwright/test';

test('single jpg file upload', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/upload');

  await page.locator('#file-upload').setInputFiles('./uploadFiles/image_1.jpg');

  await page.locator('#file-submit').click();

  await expect(page.locator('h3')).toHaveText('File Uploaded!');

});


test('Single pdf File Upload', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/upload');

  // Upload file
  await page.locator('#file-upload')
    .setInputFiles('./uploadFiles/Testfile1.pdf');

  // Click upload button
  await page.locator('#file-submit').click();

  // Assertion
  await expect(page.locator('#uploaded-files'))
    .toHaveText('Testfile1.pdf');

  await page.waitForTimeout(3000);
});





test('Multiple File Upload', async ({ page }) => {

  await page.goto('https://www.davidwalsh.name/demo/multiple-file-upload.php');

  await page.locator('#filesToUpload').setInputFiles([
    './uploadFiles/Testfile1.pdf',
    './uploadFiles/Testfile2.pdf'
  ]);

  await expect(page.locator('#fileList li:nth-child(1)'))
    .toHaveText('Testfile1.pdf');

  await expect(page.locator('#fileList li:nth-child(2)'))
    .toHaveText('Testfile2.pdf');

  //await page.waitForTimeout(3000);

    // ✅ Remove files
  await page.locator('#filesToUpload').setInputFiles([]);

  await page.waitForTimeout(3000);

  // Validate files removed
  await expect(page.locator('#fileList li'))
    .toHaveText('No Files Selected');
});




