

const { test ,expect} = require('../pages/fixtures/testFixture');

import loginPage from '../pages/LoginPage.js';
//Fixture = reusable test setup & teardown
//Teardown = cleanup actions that run after a test finishes

//without pom design
test('Dashboard test using fixture', async ({ loginPage  }) => {
  await loginPage.goto('/dashboard');
  await expect(loginPage .locator('h1')).toContainText('Dashboard');
});


//with pom design
test('Login using fixture + POM', async ({ loginPage }) => {
  await loginPage.login('admin', 'admin123');
});
