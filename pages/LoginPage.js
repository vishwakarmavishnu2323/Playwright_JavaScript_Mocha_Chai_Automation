exports.LoginPage=
class LoginPage{
    constructor(page)
    {
        this.page=page;
        this.Loginlink=""
        this.usernameInput=""
        this.passwordInput=""
        this.loginButton=""

    }
    async gotoLoginPage(){
        await this.page.goto('https://www.amazon.com/');
    }

    async login(username,password)
    {
         await this.page.locator(this.Loginlink).click();
         await this.page.locator(this.usernameInput).fill(username);
         await this.page.locator(this.passwordInput).fill(password);
         await this.page.locator(this.loginButton).click();


    }

}