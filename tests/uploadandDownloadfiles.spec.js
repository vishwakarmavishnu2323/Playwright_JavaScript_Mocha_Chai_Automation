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


const path = require('path');

test('file download using click', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/download');

  // First download
  const [download1] = await Promise.all([
    page.waitForEvent('download'),
    page.click('a[href="download/some-file.txt"]')
  ]);

  //await download1.saveAs('some-file.txt');

  await download1.saveAs(
    path.join(__dirname, '..', 'uploadFiles', 'some-file.txt')
  );

  // Second download
  const [download2] = await Promise.all([
    page.waitForEvent('download'),
    page.click('a[href="download/Cypress Intro.pdf"]')
  ]);

  //await download2.saveAs('Cypress Intro.pdf');
  await download2.saveAs(
    path.join(__dirname, '..', 'uploadFiles', 'Cypress Intro.pdf')
  );
});

//Use filechooser only when file input is hidden or triggered by a button.
test("Practice File Upload 2", async ({ page }) => {

  await page.goto("https://the-internet.herokuapp.com/upload");

  const fileChooserPromise = page.waitForEvent('filechooser');

  await page.locator('#file-upload').click();

  const fileChooser = await fileChooserPromise;

  await fileChooser.setFiles('to-upload/file3.docx');

  await page.click('#file-submit');

});




