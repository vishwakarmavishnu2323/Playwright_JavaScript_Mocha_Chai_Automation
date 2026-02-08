import { test, expect } from '@playwright/test';

test("Handle Multiple Environments",async({page})=>{

await page.goto(process.env.URL);
await page.locator('[data-test="username"]').fill(process.env.USERNAME);
  await page.locator('[data-test="password"]').fill(process.env.PASSWORD);

  await page.waitForTimeout(7000);

})

