import App from "../../page-objects/App";
import LoginPage from '../../page-objects/pages/LoginPage';

describe('E2E Tests - Login / Logout Flow', () => {

    it("Should not login with invalid credentials", async () => {
        App.openHomePage();
        await LoginPage.clickLoginInBtn();
        await expect(browser).toHaveUrl("http://zero.webappsecurity.com/login.html");
        await browser.waitAndTypeText("input[name='user_login']", "admin");
        await browser.waitAndTypeText("input#user_password", "test");
        // const submitBtn = await $("input[type='submit']");
        // submitBtn.waitForExist();
        // await submitBtn.click();
        await browser.waitAndClick("input[type='submit']");

        const alertError = await $("div.alert-error");
        alertError.waitForExist();
        await expect(alertError).toHaveText("Login and/or password are wrong.")
    })

})
