const { test, expect } = require('@playwright/test');

test("Handle Frames", async ({ page }) => {

  await page.goto("https://docs.oracle.com/javase/8/docs/api/")

  const iframe = await page.frameLocator("//frame[@name='packageListFrame']")

  await iframe.locator("//a[text()='java.applet']").click()

  //await page.pause()
})


test('frames approach 1', async ({ page }) => {

  await page.goto('https://ui.vision/demo/webtest/frames/');

  // total frames
  const allframes = await page.frames();
  console.log("Number of frames:", allframes.length);

  // approach 1: using name or url
  // const var = await page.frame('name'); // if name is present
  const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
  await frame1.fill('[name="mytext1"]', 'Hello');

});


test('frames approach 2', async ({ page }) => {

  await page.goto('https://ui.vision/demo/webtest/frames/');

  // total frames
  const allframes = await page.frames();
  console.log("Number of frames:", allframes.length);

  // approach 2 – using frame locator
  const inputbox = await page
    .frameLocator("frame[src='frame_1.html']")
    .locator("[name='mytext1']");

  await inputbox.fill("Hello");

  await page.waitForTimeout(5000);

});

//Inner / Nested Frames)
test('Inner frames ', async ({ page }) => {

  await page.goto('https://ui.vision/demo/webtest/frames/');

  const frame3 = await page.frame({ 
    url: 'https://ui.vision/demo/webtest/frames/frame_3.html' 
  });

  await frame3.locator("input[name='mytext3']").fill('welcome');

  await page.waitForTimeout(5000);

});

//(Nested frame handling)
/*
test('Inner frames with Nested frame handling', async ({ page }) => {

  await page.goto('https://ui.vision/demo/webtest/frames/');

  await page
    .frameLocator("frame[src='frame_3.html']")   // parent frame
    .frameLocator("iframe")                      // inner frame
    .locator("#i5 div:nth-child(3) div")         // clickable checkbox DIV
    .click();

  await page.waitForTimeout(5000);
});
*/
