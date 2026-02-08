

//waiting timeout
async function waitForElement(page, locator) {
  await page.waitForSelector(locator, { timeout: 5000 });
}

//get random email
function getRandomEmail() {
  return `user_${Date.now()}@test.com`;
}
//page load 
async function waitForPageLoad(page) {
  await page.waitForLoadState('networkidle');
}

async function takeScreenshot(page, name) {
  await page.screenshot({ path: `screenshots/${name}.png` });
}

//take full page screenshot
async function takefullScreenshot(page, testName) {
  await page.screenshot({
    path: `screenshots/${testName}.png`,
    fullPage: true
  });
}

module.exports = {
  waitForPageLoad,
  takeScreenshot,waitForElement,getRandomEmail,takefullScreenshot
};









