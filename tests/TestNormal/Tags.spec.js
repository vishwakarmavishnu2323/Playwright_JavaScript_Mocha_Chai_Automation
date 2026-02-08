const { test, expect } = require('@playwright/test');

test('test1 @sanity', async ({ page }) => {
  console.log('this is my test1...');
});

test('test2 @sanity', async ({ page }) => {
  console.log('this is my test2...');
});

test('test3 @reg', async ({ page }) => {
  console.log('this is my test3...');
});

test('test4 @sanity @reg', async ({ page }) => {
  console.log('this is my test4...');
});

// Correct syntax
test('test5', { tags: ['@sanity', '@reg'] }, async ({ page }) => {
  console.log('this is my test5...');
});

test('test6', { tags: '@sanity' }, async ({ page }) => {
  console.log('this is my test6...');
});

test('Login test 7', { tags: ['@sanity'] }, async ({ page }) => {
 console.log('this is my test7...');
});

test('Checkout test 8', { tags: ['@reg'] }, async ({ page }) => {
 console.log('this is my test8...');
});





/*
Run Commands (same as screenshot style)
▶ Run only sanity tests
npx playwright test tests/Tags.spec.js --project=chromium --grep @sanity

▶ Run only regression tests
npx playwright test tests/Tags.spec.js --project=chromium --grep @reg

▶ Run tests having both sanity and reg
npx playwright test tests/Tags.spec.js --project=chromium --grep "@sanity.*@reg"


*/