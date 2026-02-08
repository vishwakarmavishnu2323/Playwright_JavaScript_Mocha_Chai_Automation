import { test, expect } from '@playwright/test';

// --------------------
// Group 1 – Simple Tests
// --------------------
test.describe('Group1', () => {

  test('Test1', async ({ page }) => {
    console.log('this is test 1....');
  });

  test('Test2', async ({ page }) => {
    console.log('this is test 2....');
  });

});

// --------------------
// Group 2 – Hooks with Tests
// --------------------
test.describe('Group2', () => {

  test.beforeAll(async () => {
    console.log('this is beforeAll Hook......');
  });

  test.afterAll(async () => {
    console.log('this is afterAll Hook......');
  });

  test.beforeEach(async () => {
    console.log('this is beforeEach Hook......');
  });

  test.afterEach(async () => {
    console.log('this is afterEach Hook......');
  });

  test('Test3', async ({ page }) => {
    console.log('this is test 3....');
  });

  test('Test4', async ({ page }) => {
    console.log('this is test 4....');
  });

});
