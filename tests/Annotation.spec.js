const { test, expect } = require('@playwright/test');

// ---------------- ONLY ----------------
// Run only this test
/*
test.only('test1', async ({ page }) => {
  console.log('this is test1');
});
*/

// ---------------- SKIP ----------------
// Skip this test completely
test.skip('test2', async ({ page }) => {
  console.log('this is test2');
});

// ---------------- CONDITIONAL SKIP ----------------
test('test3', async ({ page, browserName }) => {
  console.log('this is test3');

  if (browserName === 'chromium') {
    test.skip();
  }
});

// ---------------- FIXME ----------------
// Test is marked as todo (not ready yet)
test('test4', async ({ page }) => {
  test.fixme();
  console.log('this is test4');
});

// ---------------- FAIL (Expected failure) ----------------
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

// Slow Test / Custom Timeout

test('test7', async ({ page }) => {
 test.slow(); // OR page.setTimeout(5000)

  await page.goto('https://www.demoblaze.com/index.html')
  console.log('this is test 7...')
});