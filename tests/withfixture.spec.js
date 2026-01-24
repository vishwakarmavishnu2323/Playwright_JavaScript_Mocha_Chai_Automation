const { test, expect } = require('../fixtures/testFixture');
//Fixture = reusable test setup & teardown
//Teardown = cleanup actions that run after a test finishes

//without pom design
test('Dashboard test using fixture', async ({ loggedInPage }) => {
  await loggedInPage.goto('/dashboard');
  await expect(loggedInPage.locator('h1')).toContainText('Dashboard');
});


//with pom design
test('Login using fixture + POM', async ({ loginPage }) => {
  await loginPage.login('admin', 'admin123');
});
