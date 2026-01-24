class DashboardPage {
  constructor(page) {
    this.page = page;
    this.welcomeText = 'h1';
    this.logoutBtn = '#logout';
  }

  async getWelcomeText() {
    return await this.page.textContent(this.welcomeText);
  }

  async logout() {
    await this.page.click(this.logoutBtn);
  }
}

module.exports = { DashboardPage };
