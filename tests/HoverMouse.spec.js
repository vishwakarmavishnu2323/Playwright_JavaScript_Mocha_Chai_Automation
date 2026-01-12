const { test, expect } = require('@playwright/test');

test('Mouse hover', async ({ page }) => {

  await page.goto('https://www.globalsqa.com/demo-site/');

  const testerHub = page.locator("//a[normalize-space()='Tester’s Hub']").first();
  const demoTesting = page.locator("//span[normalize-space()='Demo Testing Site']").first();

  // mouse hover
  await testerHub.hover();
  await demoTesting.hover();

  await page.waitForTimeout(5000);
});

test('Mouse Right Click', async ({ page }) => {

  await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');

  const button = await page.locator("//span[normalize-space()='right click me']");

  // right click action
  await button.click({ button: 'right' });

  await page.waitForTimeout(5000);
});
test('Mouse Double Click', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const btnCopy = await page.locator("//button[normalize-space()='Copy Text']");

  // double click
  await btnCopy.dblclick();

  const f2 = await page.locator('#field2');
  await expect(f2).toHaveValue('Hello World!');

  await page.waitForTimeout(5000);
});
test('Drag And Drop - Approach 1', async ({ page }) => {

  await page.goto('https://jqueryui.com/droppable/');

  const frame = await page.frameLocator('.demo-frame');
  const drag = await frame.locator('#draggable');
  const drop = await frame.locator('#droppable');

  await drag.hover();
  await page.mouse.down();

  await drop.hover();
  await page.mouse.up();

  await page.waitForTimeout(5000);
});

test('Drag And Drop - Approach 2', async ({ page }) => {

  await page.goto('https://jqueryui.com/droppable/');

  const frame = await page.frameLocator('.demo-frame');
  const drag = await frame.locator('#draggable');
  const drop = await frame.locator('#droppable');

  await drag.dragTo(drop);

  await page.waitForTimeout(5000);
});



test('Keyboard actions', async ({ page }) => {

  await page.goto('https://demoqa.com/text-box');

  // type text in first input
  await page.type('#userName', 'welcome to automation');

  // Ctrl + A → select all text
  await page.keyboard.press('Control+A');

  // Ctrl + C → copy
  await page.keyboard.press('Control+C');

  // TAB → move to next field
  await page.keyboard.press('Tab');

  // Ctrl + V → paste
  await page.keyboard.press('Control+V');

  await page.waitForTimeout(5000);
});
