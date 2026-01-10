const { test, expect } = require('@playwright/test');

test("Handle Alert", async ({ page }) => {

  await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

  page.on('dialog', async (d) => {

    expect(d.type()).toContain('alert')

    expect(d.message()).toContain('I am a JS Alert')

    await d.accept()
  })

  await page.locator("//button[text()='Click for JS Alert']").click()
})

test("Handle confirm box", async ({ page }) => {

  await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

  page.on('dialog', async (d) => {

    expect(d.type()).toContain('confirm')

    expect(d.message()).toContain('I am a JS Confirm')

    //await d.accept()
    await d.dismiss()
  })

  await page.locator("//button[text()='Click for JS Confirm']").click()
})

test("Handle prompt box", async ({ page }) => {

  await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

  page.on('dialog', async (d) => {

    expect(d.type()).toContain('prompt')

    expect(d.message()).toContain('I am a JS prompt')

    await d.accept("vishnu")
    
  })

  await page.locator("//button[text()='Click for JS Prompt']").click()
})
