const { expect } = require('@playwright/test');

// ---------------- ALERT HANDLING ----------------

// Simple alert (OK)
async function handleAlert(page) {
  page.once('dialog', async dialog => {
    await dialog.accept();
  });
}

// Confirm alert (OK / Cancel)
async function handleConfirm(page, accept = true) {
  page.once('dialog', async dialog => {
    accept ? await dialog.accept() : await dialog.dismiss();
  });
}

// Prompt alert (with input)
async function handlePrompt(page, inputText) {
  page.once('dialog', async dialog => {
    await dialog.accept(inputText);
  });
}

// ---------------- MULTIPLE WINDOWS / TABS ----------------

// Switch to new tab
async function switchToNewTab(context) {
  const pages = context.pages();
  return pages[pages.length - 1];
}

// Open link in new tab & switch
async function openNewTabAndSwitch(page, locator) {
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.click(locator)
  ]);
  await newPage.waitForLoadState();
  return newPage;
}

// ---------------- DROPDOWN HANDLING ----------------

// Select dropdown by value
async function selectByValue(page, locator, value) {
  await page.selectOption(locator, value);
}

// Select dropdown by label
async function selectByLabel(page, locator, label) {
  await page.selectOption(locator, { label });
}

// Select dropdown by index
async function selectByIndex(page, locator, index) {
  const options = await page.locator(`${locator} option`).all();
  await options[index].click();
}

// Select dropdown by visible text
async function selectByText(page, locator, text) {
  await page.selectOption(locator, { label: text });
}

// Select multiple values
async function selectMultipleValues(page, locator, valuesArray) {
  await page.selectOption(locator, valuesArray);
}

// Check dropdown contains value or not
async function isOptionPresent(page, locator, value) {
  const options = await page.locator(`${locator} option`).allTextContents();
  return options.includes(value);
}

// Print all dropdown values
async function getAllDropdownValues(page, locator) {
  return await page.locator(`${locator} option`).allTextContents();
}

// ---------------- CHECKBOX & RADIO ----------------

// Check checkbox
async function checkCheckbox(page, locator) {
  if (!(await page.isChecked(locator))) {
    await page.check(locator);
  }
}

// Uncheck checkbox
async function uncheckCheckbox(page, locator) {
  if (await page.isChecked(locator)) {
    await page.uncheck(locator);
  }
}

// Select radio button
async function selectRadio(page, locator) {
  await page.check(locator);
}

// ---------------- MOUSE ACTIONS ----------------

// Mouse hover
async function mouseHover(page, locator) {
  await page.hover(locator);
}

// Double click
async function doubleClick(page, locator) {
  await page.dblclick(locator);
}

// Right click
async function rightClick(page, locator) {
  await page.click(locator, { button: 'right' });
}

// Drag and drop
async function dragAndDrop(page, source, target) {
  await page.dragAndDrop(source, target);
}

// ---------------- EXPORTS ----------------

module.exports = {
  // alerts
  handleAlert,
  handleConfirm,
  handlePrompt,

  // windows
  switchToNewTab,
  openNewTabAndSwitch,

  // dropdowns
  selectByValue,
  selectByLabel,
  selectByIndex,
  selectByText,
  selectMultipleValues,
  isOptionPresent,
  getAllDropdownValues,

  // checkbox & radio
  checkCheckbox,
  uncheckCheckbox,
  selectRadio,

  // mouse actions
  mouseHover,
  doubleClick,
  rightClick,
  dragAndDrop
};
