


import { test } from "@playwright/test";

test("Practice Keyboard Actions", async ({ page }) => {

  await page.goto("https://testpages.eviltester.com/styled/basic-html-form-test.html");

  const commentTextArea = page.locator('[name="comments"]');
  await commentTextArea.click();

  await commentTextArea.press("Control+A");
  await commentTextArea.press("Backspace");
  await commentTextArea.press("A+B+C");
  await commentTextArea.press("Control+A+X");

  const usernameInput = page.locator('[name="username"]');
  await usernameInput.click();

  await usernameInput.press("Control+V");
  await usernameInput.press("ArrowLeft+ArrowLeft+ArrowLeft");

  await page.keyboard.press("PageDown");
  await page.keyboard.press("PageUp");

});

test("Fill Press and PressSeq Practice", async ({ page }) => {

  await page.goto("https://www.google.com");

  const searchBox = page.locator('#APjFqb');
  //await searchBox.click();

  await searchBox.pressSequentially("Playwright", { delay: 1000 });
//await searchBox.press("Backspace")
  await searchBox.press("ArrowDown+ArrowDown+ArrowDown");
  await searchBox.press("Enter")
  

});