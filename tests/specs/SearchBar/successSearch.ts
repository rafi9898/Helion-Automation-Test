import App from '../../../page-objects/App';
import SearchBar from '../../../page-objects/components/SearchBar';
import {correctSearchValue1, correctSearchValue2, searchUrl1, searchUrl2} from '../../../lib/SearchBarConfig';

describe('TEST E2E - Success Search Product', () => {
    it("Should enter on home page and verify display of searchbar", async () => {
        await App.setDesktopSize();
        await App.openHomePage();
        await SearchBar.verifyDisplayOfSearchBar();
        await SearchBar.verifyPlaceholder();
    })

    it("Enter correct book name and verify search popup result", async () => {
        await SearchBar.typeSearchValue(correctSearchValue1);
        await SearchBar.resultPopupIsVisible();
        await SearchBar.TitleBookIsVisible();
        await SearchBar.AuthorBookIsVisible();
    })

    it("Should click on search button", async () => {
        await SearchBar.clickOnSearchBtn();
        await expect(browser).toHaveUrl(searchUrl1);
        await SearchBar.booksAreVisible();
    })

    it("Should clear input value", async () => {
        await SearchBar.clearSearchInput();
    })

    it("Should click on search button without value", async () => {
        await SearchBar.clickOnSearchBtn();
        await expect(browser).toHaveUrl(searchUrl1);
    })

    it("Should type correct value and click on see all button", async () => {
        await SearchBar.typeSearchValue(correctSearchValue2);
        await SearchBar.resultPopupIsVisible();
        await SearchBar.clickOnSeeAllBtn();
        await expect(browser).toHaveUrl(searchUrl2);
    })
})
