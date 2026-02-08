const { test, expect } = require('@playwright/test');

test('Handle checkboxes', async ({ page }) => {

  await page.goto('https://itera-qa.azurewebsites.net/home/automation');

  // -------------------------
  // Single checkbox
  // -------------------------
  await page.locator("//input[@id='monday' and @type='checkbox']").check();
  // await page.check("//input[@id='monday' and @type='checkbox']");

  await expect(
    page.locator("//input[@id='monday' and @type='checkbox']")
  ).toBeChecked();

  await expect(
    await page
      .locator("//input[@id='monday' and @type='checkbox']")
      .isChecked()
  ).toBeTruthy();
  await expect(
    await page
      .locator("//input[@id='sunday' and @type='checkbox']")
      .isChecked()
  ).toBeFalsy();


  // -------------------------
  // Multiple checkboxes
  // -------------------------
  const checkboxLocators = [
    "//input[@id='monday' and @type='checkbox']",
    "//input[@id='sunday' and @type='checkbox']",
    "//input[@id='saturday' and @type='checkbox']"
  ];

  // select multiple checkboxes
  for (const locator of checkboxLocators) {
    await page.locator(locator).check();
  }

  // unselect multiple checkboxes which are already selected
  for (const locator of checkboxLocators) {
    if (await page.locator(locator).isChecked()) {
      await page.locator(locator).uncheck();
    }
  }

  await page.waitForTimeout(5000); // pausing code
});


test('multiple checkboxes handling', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    

let  checkboxes=await page.$$('//*[@class="form-check form-check-inline"]//following-sibling::input[@type="checkbox"]');
  
   
   for (const checkbox of checkboxes) {

    if (await checkbox.isChecked()) {
      await checkbox.uncheck();   // already checked → uncheck
    } else {
      await checkbox.check();     // not checked → check
    }
   }

})
test('radio button handling', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const radios = await page.$$(
    '//*[@class="form-check form-check-inline"]//input[@type="radio"]'
  );

  for (let i = 0; i < radios.length; i++) {

    if (await radios[i].isChecked()) {
      // If already checked, select next radio (if exists)
      if (i + 1 < radios.length) {
        await radios[i + 1].check();
      }
    } else {
      // If not checked, check it
      await radios[i].check();
    }
    
  }

});
test('check specific checkboxes', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const checkboxes = await page.$$(
    '//*[@class="form-check form-check-inline"]//following-sibling::input[@type="checkbox"]'
  );

  // method 1st
  await checkboxes[0].check();                      // 1st
  await checkboxes[3].check();                      // 4th
  await checkboxes[checkboxes.length - 1].check(); // last


  //method 2nd

//   const checkboxes = await page.locator(
//     '//*[@class="form-check form-check-inline"]//following-sibling::input[@type="checkbox"]'
//   );
//    await checkboxes.first().check();   // 1st
//   await checkboxes.nth(3).check();    // 4th (index starts at 0)
//   await checkboxes.last().check();    // last

 
  
});
