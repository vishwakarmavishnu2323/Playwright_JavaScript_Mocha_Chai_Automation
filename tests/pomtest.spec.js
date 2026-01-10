import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test('test', async ({ page }) => {

    //login
  const login =new LoginPage(page);

  await login.gotoLoginPage();
  //await login.login('vishnu','test@123');
 await page.waitForTimeout(3000)


  //home
});