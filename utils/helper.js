// ---------------- WAIT UTILITIES ----------------

// Wait for element
async function waitForElement(page, locator, timeout = 5000) {
  await page.waitForSelector(locator, { timeout });
}

// Wait for page load
async function waitForPageLoad(page) {
  await page.waitForLoadState('networkidle');
}

// Static wait (use only if needed)
async function wait(page, time = 2000) {
  await page.waitForTimeout(time);
}

// ---------------- INPUT UTILITIES ----------------

// Enter text
async function enterText(page, locator, value) {
  await page.fill(locator, value);
}

// Clear and type
async function clearAndType(page, locator, value) {
  await page.fill(locator, '');
  await page.type(locator, value);
}

// ---------------- CLICK UTILITIES ----------------

// Click element
async function clickElement(page, locator) {
  await page.click(locator);
}

// Force click
async function forceClick(page, locator) {
  await page.click(locator, { force: true });
}

// ---------------- DROPDOWN UTILITIES ----------------

// Select by value
async function selectByValue(page, locator, value) {
  await page.selectOption(locator, value);
}

// Select by label
async function selectByLabel(page, locator, label) {
  await page.selectOption(locator, { label });
}

// ---------------- ASSERTION UTILITIES ----------------

// Verify text
async function verifyText(page, locator, expectedText) {
  await expect(page.locator(locator)).toHaveText(expectedText);
}

// Verify element visible
async function verifyVisible(page, locator) {
  await expect(page.locator(locator)).toBeVisible();
}

// ---------------- SCREENSHOT UTILITIES ----------------

// Normal screenshot
async function takeScreenshot(page, name) {
  await page.screenshot({ path: `screenshots/${name}.png` });
}

// Full page screenshot
async function takeFullScreenshot(page, name) {
  await page.screenshot({
    path: `screenshots/${name}.png`,
    fullPage: true
  });
}

// ---------------- BROWSER UTILITIES ----------------

// Scroll to element
async function scrollToElement(page, locator) {
  await page.locator(locator).scrollIntoViewIfNeeded();
}

// Scroll to bottom
async function scrollToBottom(page) {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
}

// ---------------- DATA UTILITIES ----------------

// Generate random email
function getRandomEmail() {
  return `user_${Date.now()}@test.com`;
}

// Generate random number
function getRandomNumber() {
  return Math.floor(Math.random() * 10000);
}

// ---------------- WINDOW / ALERT UTILITIES ----------------

// Handle alert
async function handleAlert(page) {
  page.on('dialog', async dialog => {
    await dialog.accept();
  });
}

// ---------------- EXPORTS ----------------

module.exports = {
  // waits
  waitForElement,
  waitForPageLoad,
  wait,

  // input
  enterText,
  clearAndType,

  // clicks
  clickElement,
  forceClick,

  // dropdowns
  selectByValue,
  selectByLabel,

  // assertions
  verifyText,
  verifyVisible,

  // screenshots
  takeScreenshot,
  takeFullScreenshot,

  // browser
  scrollToElement,
  scrollToBottom,

  // data
  getRandomEmail,
  getRandomNumber,

  // alerts
  handleAlert
};
