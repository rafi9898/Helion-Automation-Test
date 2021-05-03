import App from '../../../page-objects/App';
import ProductPage from '../../../page-objects/pages/ProductPage';
import CartPage from '../../../page-objects/pages/CartPage';
import { loginUrl, productUrl, cartUrl } from '../../../lib/Main';
import { infoRemovedProduct } from '../../../lib/ProductConfig';

describe('E2E Test - Product Functionality', () => {

    let titleProduct:string = "";
    let priceProduct:string = "";

    before(() => {
        App.setDesktopSize();
    })
    
    it("Should navigate on product page and verify visiblity important elements" , async () => {
        App.openProductPage();
        await ProductPage.bookImageIsVisible();
        await ProductPage.bookTitleIsVisible();
        await ProductPage.bookPriceIsVisible();
        await ProductPage.addToCartEbookIsVisible();
        const currentTitle:WebdriverIO.Element = await ProductPage.bookTitle;
        const currentPrice:WebdriverIO.Element = await ProductPage.bookPrice;
        titleProduct = await currentTitle.getText();
        priceProduct = await currentPrice.getText();
    })

    it("Should click on buy now button and verify message", async () => {
        await ProductPage.clickOnBuyNowBtn();
        await ProductPage.buyNowInfoIsVisible();
    })

    it("Should click on add opinion button", async () => {
        await ProductPage.clickOnAddOpinionBtn();
        await expect(browser).toHaveUrlContaining(loginUrl);
        await browser.back();
        await expect(browser).toHaveUrlContaining(productUrl);
    })

    it("Should add product to cart and verify details", async () => {
        await ProductPage.clickAddToEbookCart();
        await expect(browser).toHaveUrlContaining(cartUrl);
        await CartPage.verifySuccessMessage(titleProduct);
        await CartPage.verifyBookTitle(titleProduct);
        await CartPage.verifyBookPrice(priceProduct);
    })

    it("Should click on remove selected books button and dismiss removing process", async () => {
        await CartPage.selectProduct();
        await CartPage.clickOnRemoveSelected();
        await browser.isAlertOpen();
        await browser.dismissAlert(); 
        await CartPage.verifyBookTitle(titleProduct);
    })

    it("Should click on remove selected btn and accept removing process", async () => {
        await CartPage.clickOnRemoveSelected();
        await browser.isAlertOpen();
        await browser.acceptAlert();
        await CartPage.verifyInfoMessage(infoRemovedProduct);
        await CartPage.bookTitleIsNotVisible();
    })

})
