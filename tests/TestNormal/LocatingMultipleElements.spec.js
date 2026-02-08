const { test, expect } = require('@playwright/test');

test('LocateMultipleElements', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/index.html');

  /*
  // Example: get all links
  const links = await page.$$('a');

  for (const link of links) {
    const linkText = await link.textContent();
    console.log(linkText);
  }
  */

  // Locate all product links
  //page.waitForSelector("#tbodyid > div > div > h4 > a")
  const products = await page.$$("#tbodyid > div > div > h4 > a");

  for (const product of products) {
    const productName = await product.textContent();
    console.log(productName);
  }

});
