import Base from '../Base';
import {buyNowMessage} from '../../lib/ProductConfig';

class ProductPage extends Base {
    get bookImg() {
        return $('//*[@id="mainBookCover"]/img');
    }

    get bookTitle() {
        return $("div.title-group > h1 > span:nth-child(1)");
    }

    get bookPrice() {
        return $("ins#cena_e");
    }

    get addToBasketEbookBtn() {
        return $("a#addToBasket_zapeja_ebook");
    }

    get addOpinionBtn() {
        return $("a.make-vote-button");
    }

    get buyNowBtn() {
        return $("a#kup_teraz_buttone");
    }

    get buyNowInfo() {
        return $("p.komunikat");
    }

    async bookImageIsVisible() {
        await expect(this.bookImg).toBeVisible();
        const bookimage:WebdriverIO.Element = await this.bookImg;
        const bookSrc:string = await bookimage.getAttribute("src");
        await expect(bookSrc.length).toBeGreaterThanOrEqual(1);
    }

    async bookTitleIsVisible() {
        await expect(this.bookTitle).toBeVisible();
        const title:WebdriverIO.Element =  await this.bookTitle;
        const bookTitleValue: string = await title.getText();
        await expect(bookTitleValue.length).toBeGreaterThanOrEqual(1);
    }

    async bookPriceIsVisible() {
        await expect(this.bookPrice).toBeVisible();
        const price:WebdriverIO.Element = await this.bookPrice;
        const priceValue: string = await price.getText();
        await expect(priceValue.length).toBeGreaterThan(1);
    }

    async addToCartEbookIsVisible() {
        await expect(this.addToBasketEbookBtn).toBeVisible();
    }

    async clickOnBuyNowBtn() {
        const btn:WebdriverIO.Element = await this.buyNowBtn;
        await btn.click();
    }

    async buyNowInfoIsVisible() {
        const p:WebdriverIO.Element = await this.buyNowInfo;
        const info:string = await p.getText();
        await expect(info).toContain(buyNowMessage);
    }

    async clickOnAddOpinionBtn() {
        const btn:WebdriverIO.Element = await this.addOpinionBtn;
        await btn.scrollIntoView();
        await btn.click();
    }

    async clickAddToEbookCart() {
        const btn:WebdriverIO.Element = await this.addToBasketEbookBtn;
        await btn.click();
    }

}

export default new ProductPage();