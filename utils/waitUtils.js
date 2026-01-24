async function waitForElement(page, locator) {
  await page.waitForSelector(locator, { timeout: 5000 });
}

module.exports = { waitForElement };
