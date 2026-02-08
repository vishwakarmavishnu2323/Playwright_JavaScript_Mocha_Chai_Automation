const { test, expect } = require('@playwright/test');

//---------------grouping-------------


test.describe.only("grouping",async()=>{

  test('test1', async ({ page }) => {
  console.log('this is test2');
});

test('test2', async ({ page }) => {
  console.log('this is test2');
});

test('test3', async ({ page }) => {
  console.log('this is test3');
});
})

test.describe("grouping2", () => {

  // Skip all tests in this describe for Chromium
  test.skip(({ browserName }) => browserName === 'chromium');

  test('test1', async ({ page }) => {
    console.log('this is test1');
  });

  test('test2', async ({ page }) => {
    console.log('this is test2');
  });

  test('test3', async ({ page }) => {
    console.log('this is test3');
  });

});



// ---------------- ONLY ----------------
// Run only this test

test.only('test1', async ({ page }) => {
  console.log('this is test1');
});


// ---------------- SKIP ----------------
// Skip this test completely
test.skip('test2', async ({ page }) => {
  console.log('this is test2');
});

test('test12', async ({ page }) => {
  test.skip();
  console.log('this is test12');
});

// ---------------- CONDITIONAL SKIP ----------------
test('test3', async ({ page, browserName }) => {
  console.log('this is test3');

  if (browserName === 'chromium') {
    test.skip();
  }
});

test('test41', async ({ page, browserName }) => {
  console.log('this is test41');
    test.skip(browserName === 'chromium')
});

test('Skip on Firefox', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Not supported on Firefox');

  await page.goto('https://example.com');
});


// ---------------- FIXME ----------------
// Test is marked as todo (not ready yet)//Temporary skip due to bug.
test('test4', async ({ page }) => {
  test.fixme();
  console.log('this is test4');
});

// ---------------- FAIL (Expected failure)//Used when test is expected to fail. ----------------
test('test5', async ({ page }) => {
  test.fail(); // expected to fail
  console.log('this is test5');
  expect(1).toBe(2);
});

// ---------------- CONDITIONAL FAIL ----------------
test('test6', async ({ page, browserName }) => {
  console.log('this is test6');

  if (browserName === 'chromium') {
    test.fail(); // expected failure only in chromium
  }

  expect(1).toBe(2);
});

// Slow Test / Custom Timeout /Increases timeout automatically.

test('test7', async ({ page }) => {
 test.slow(); // OR page.setTimeout(5000)

  await page.goto('https://www.demoblaze.com/index.html')
  console.log('this is test 7...')
});

//Custom annotation (using testInfo)
//Used for adding bug ID, story, etc.
test('Login test', async ({ page }, testInfo) => {
  testInfo.annotations.push({
    type: 'issue',
    description: 'BUG-101'
  });

  await page.goto('https://example.com');
});
//Annotation at group level
test.describe.skip('Skipped group', () => {

  test('test8', async ({ page }) => {
    await page.goto('https://example.com');
  });

});
