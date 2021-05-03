import App from '../../../page-objects/App';
import SearchBar from '../../../page-objects/components/SearchBar';
import {unCorrectSearchUrl, unCorrectSearchValue} from '../../../lib/SearchBarConfig';

describe('TEST E2E - Unsuccessful Search Product', () => {
    it("Should enter on home page and verify display of searchbar", async () => {
        await App.setDesktopSize();
        await App.openHomePage();
        await SearchBar.verifyDisplayOfSearchBar();
    })

    it("Should type uncorrect value and verify result", async () => {
        await SearchBar.typeSearchValue(unCorrectSearchValue);
        await SearchBar.clickOnSearchBtn();
        await expect(browser).toHaveUrl(unCorrectSearchUrl);
        await SearchBar.notFoundMessageIsVisible();
    })

})
