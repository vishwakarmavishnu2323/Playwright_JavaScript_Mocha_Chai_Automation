async function takeScreenshot(page, testName) {
  await page.screenshot({
    path: `screenshots/${testName}.png`,
    fullPage: true
  });
}

module.exports = { takeScreenshot };
