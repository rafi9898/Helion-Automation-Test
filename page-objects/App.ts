import { homeUrl, productUrl } from '../lib/Main';
import Base from './Base';

class App extends Base {
    async openHomePage() {
        browser.url(homeUrl);
        await expect(browser).toHaveUrl(homeUrl)
    }

    async openProductPage() {
        browser.url(productUrl);
        await expect(browser).toHaveUrl(productUrl);
    }
}

export default new App();