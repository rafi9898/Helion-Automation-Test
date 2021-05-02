import Base from "../Base";

class LoginPage extends Base {
    
    get loginBtn() {
        return $("button#signin_button");
    }

    async clickLoginInBtn() {
         this.loginBtn.waitForExist();
         this.loginBtn.click();
    }
}

export default new LoginPage();