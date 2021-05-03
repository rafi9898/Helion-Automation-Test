import Base from '../Base';

class CartPage extends Base {
    get successMessage() {
        return $("div.successbox > p > b");
    }

    get bookTitle() {
        return $('//*[@id="zapeja_ebook"]/td[2]/div/h2/a');
    }

    get bookPrice() {
        return $("span.cena:nth-child(1)");
    }

    get cartCheckbox() {
        return $("input#delall");
    }

    get cartCheckboxSpan() {
        return $("#koszyk > tbody > tr:nth-child(1) > th.checkbox > div > label > span");
    }

    get removeSelectedBtn() {
        return $("div#usun > p > a");
    }

    get infoMessage() {
        return $("div.infobox > p");
    }

    
    async verifySuccessMessage(value: string) {
        const b:WebdriverIO.Element = await this.successMessage;
        const message:string = await b.getText();
        await expect(message).toContain(value);
    }

    async verifyBookTitle(value: string) {
        const bTitle:WebdriverIO.Element = await this.bookTitle;
        const titleValue:string = await bTitle.getText();
        await expect(titleValue).toContain(value);
    }

    async verifyBookPrice(value:string) {
        const bPrice:WebdriverIO.Element = await this.bookPrice;
        const bPriceValue:string = await bPrice.getText();
        await expect(bPriceValue).toContain(value);
    }

    async selectProduct() {
        const select:WebdriverIO.Element = await this.cartCheckboxSpan;
        await select.scrollIntoView();
        await select.click();
        await expect(this.cartCheckbox).toBeSelected();
    }

    async clickOnRemoveSelected() {
        const btn:WebdriverIO.Element = await this.removeSelectedBtn;
        await btn.click();
    }

    async verifyInfoMessage(value:string) {
        await expect(this.infoMessage).toHaveText(value);
    }

    async bookTitleIsNotVisible() {
        await expect(this.bookTitle).not.toBeVisible();
    }
}

export default new CartPage();