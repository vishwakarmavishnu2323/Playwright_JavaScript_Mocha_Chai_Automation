const { waitForPageLoad } = require('../utils/helper');


class LoginPage {
  constructor(page) {
   this.page = page;
    this.loginLink = "#login2";
    this.usernameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButton = "//button[normalize-space()='Log in']";
  }

  async navigate() {
    await this.page.goto("https://www.demoblaze.com/index.html");
  }

  async login(username, password) {
    await this.page.locator(this.loginLink).click();
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
    await waitForPageLoad(this.page);
  }
}

module.exports = { LoginPage };
