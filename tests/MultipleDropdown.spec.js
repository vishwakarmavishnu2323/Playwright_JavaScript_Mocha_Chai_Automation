const { test, expect } = require('@playwright/test');

test('Select dropdown by label', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.locator('#country').selectOption({ label: 'India' });

  await page.waitForTimeout(3000);
});



test('Handle dropdowns', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  // Multiple ways to select option from the dropdown

  // await page.locator('#country').selectOption({ label: 'India' });  // label / visible text

  // await page.locator('#country').selectOption('India');            // visible text

  // await page.locator('#country').selectOption({ value: 'uk' });    // by using value

  // await page.locator('#country').selectOption({ index: 1 });       // by using index

  await page.selectOption('#country', 'India');                       // by text

  await page.waitForTimeout(5000);


  

});

test('Check number of options in dropdown', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  // 1️⃣ Check number of options in dropdown – Approach 1
  // const options = await page.locator('#country option');
  // await expect(options).toHaveCount(10);

  // 2️⃣ Check number of options in dropdown – Approach 2
  const options = await page.$$('#country option');
  console.log('Number of options:', options.length);
  await expect(options.length).toBe(10);

  await page.waitForTimeout(5000);

});

test('Check presence value in dropdown', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');


 // 3) check presence of value in the dropdown - Approach1

//   const content = await page.locator('#country').textContent();
//   await expect(content.includes('India')).toBeTruthy();


 // 4) check presence of value in the dropdown - Approach2 (using looping)
 const options = await page.$$('#country option');
  let status = false;

  for (const option of options) {
    console.log(await option.textContent());
    let value = await option.textContent();

    if (value.includes('France')) {
      status = true;
      break;
    }
  }

  expect(status).toBeTruthy();

  await page.waitForTimeout(5000);
});


test('select option from dropdown using loop', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

const options = await page.$$('#country option');

for (const option of options) {
  const text = await option.textContent();
  const value = await option.getAttribute('value');

  if (text.includes('France')) {
    await page.selectOption('#country', value);
    break;
  }
}
await page.waitForTimeout(5000);

});

test('Select multiple options from multi-select dropdown', async ({ page }) => {

// Open application
  await page.goto('https://testautomationpractice.blogspot.com/');

  // ---------------------------------------------------
  // Select multiple options from multi-select dropdown
  // ---------------------------------------------------
  // await page.selectOption('#colors', ['Blue', 'Red', 'Yellow']);

  // ---------------------------------------------------
  // 1) Check number of options using toHaveCount()
  // ---------------------------------------------------
  // const options = page.locator('#colors option');
  // await expect(options).toHaveCount(5);

  // ---------------------------------------------------
  // 2) Check number of options using JS array
  // ---------------------------------------------------
  const options = await page.$$('#colors option');
  console.log('Number of options:', options.length);
  await expect(options.length).toBe(7);

  // ---------------------------------------------------
  // 3) Check presence of value in the dropdown
  // ---------------------------------------------------
  // const content = await page.locator('#colors').textContent();
  // await expect(content.includes('Black')).toBeTruthy();

  // Just to see browser before close
  await page.waitForTimeout(5000);
});




test('Auto suggest dropdown - Google', async ({ page }) => {

  await page.goto('https://www.google.com/');

  await page.locator('textarea[name="q"]').fill('Playwright');

  //await page.waitForSelector("//li[@role='presentation']//span");

  const suggestions = await page.$$("//li[@role='presentation']//span");

  for (let option of suggestions) {
    const value = await option.textContent();

    if (value.includes('playwright tutorial')) {
      await option.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});



/*
test('Bootstrap dropdown', async ({ page }) => {

  // Open application
  await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

  // Click on bootstrap multi-select dropdown
  await page.locator('button.multiselect').click();
    

  // ---------------------------------------------------
  // 1) Check number of options in dropdown
  // ---------------------------------------------------
  // const options = page.locator('ul > li label input');
  // await expect(options).toHaveCount(11);

  // ---------------------------------------------------
  // 2) Check number of options using JS array
  // ---------------------------------------------------
  const options = await page.$$('ul > li label input');
  await expect(options.length).toBe(11);

  // ---------------------------------------------------
  // 3) Select specific options from dropdown
  // ---------------------------------------------------

  const options1 = await page.$$('ul > li label');
  for (let option of options1) {

    const value = await option.textContent();
    // console.log('value is', value);

    if (value.includes('Angular') || value.includes('Java')) {
      await option.click();
    }
  }

  await page.waitForTimeout(5000);
});
*/















