

async function waitForPageLoad(page) {
  await page.waitForLoadState('networkidle');
}

async function takeScreenshot(page, name) {
  await page.screenshot({ path: `screenshots/${name}.png` });
}

module.exports = {
  waitForPageLoad,
  takeScreenshot
};

