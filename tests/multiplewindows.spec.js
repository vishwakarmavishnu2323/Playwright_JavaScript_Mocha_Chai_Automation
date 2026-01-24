const { test, expect } = require('@playwright/test');

test('Working with multiple tabs', async ({ browser }) => {

  const context = await browser.newContext()

  const page = await context.newPage();

  await page.goto("https://freelance-learn-automation.vercel.app/login")

  const [newPage] = await Promise.all(
    [
      context.waitForEvent("page"),
      page.locator("(//a[contains(@href,'facebook')])[1]").click()
    ]
  )
  //await newPage.waitForSelector(5000)

  await newPage.locator("(//input[@name='email'])[2]").fill("mukesh@gmail.com")
  //await newPage.waitForSelector(5000)
   await page.locator("#email1").fill("admin@email.com")
   //await page.waitForSelector(5000)



});
test.only('Handle multiple windows or tabs', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://training.rcvacademy.com/");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"), // pending, fulfilled, rejected
    page.locator("(//img)[3]").click()
  ]);

  await newPage.locator("//button[@aria-label='Install']").click();
  await newPage.locator("(//button[contains(text(), 'Cancel')])[2]").click();
  await newPage.close();

  await page.locator("(//*[@id='name'])[1]").fill("RCV Academy & Software");
  await page.close();
});

