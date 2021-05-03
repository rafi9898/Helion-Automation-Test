import Base from "../Base";
import {placeholderValue, notFoundMessageValue} from "../../lib/SearchBarConfig";

class SearchBar extends Base {
    get searchInput() {
        return $("input#inputSearch");
    }

    get searchBtn() {
        return $("a > button");
    }

    get booksPopup() {
        return $("fieldset > div.suggest-list");
    }

    get seeAllBooksBtn() {
        return $("//a[contains(text(), 'Zobacz wszystkie')]");
    }

    get bookTitle() {
        return $$("li.suggest-ksiazka > a > h3 > strong");
    }

    get bookAuthor() {
        return $$("li.suggest-ksiazka > a > p.name");
    }

    get numberOfBooks() {
        return $$("fieldset > div.suggest-list > ol.item-list > li")
    }

    get bookItemsOnSeachPage() {
        return $$("ul.list > li");
    }

    get notFoundMessage() {
        return $("div.not-found");
    }


    async verifyDisplayOfSearchBar() {
        await expect(this.searchInput).toBeVisible();
    } 

    async verifyPlaceholder() {
        await expect(this.searchInput).toHaveAttributeContaining("placeholder", placeholderValue);
    }

    async typeSearchValue(value:string) {
        
        this.searchInput.setValue(value);
        browser.pause(1300)
    }

    async resultPopupIsVisible() {
        await expect(this.booksPopup).toHaveAttributeContaining("style", "block");
        await expect(this.seeAllBooksBtn).toBeVisible();
    }

    async TitleBookIsVisible() {
        await expect(this.numberOfBooks).toBeVisible();
        const nB:WebdriverIO.ElementArray = await this.numberOfBooks;
        const nT:WebdriverIO.ElementArray = await this.bookTitle;
        await expect(nB.length - 1).toEqual(nT.length);
    }

    async AuthorBookIsVisible() {
        await expect(this.numberOfBooks).toBeVisible();
        const nB:WebdriverIO.ElementArray = await this.numberOfBooks;
        const nA:WebdriverIO.ElementArray = await this.bookAuthor;
        await expect(nB.length - 1).toEqual(nA.length);
    }

    async clickOnSearchBtn() {
        const searchbtn:WebdriverIO.Element = await this.searchBtn;
        await searchbtn.click();
    }

    async booksAreVisible() {
        await expect(this.bookItemsOnSeachPage).toBeVisible();
    }

    async clearSearchInput() {
        await this.searchInput.clearValue();
        await expect(this.searchInput).toHaveValue("");
    }

    async clickOnSeeAllBtn() {
        const btn:WebdriverIO.Element = await this.seeAllBooksBtn;
        await btn.click();
    }

    async notFoundMessageIsVisible() {
        await expect(this.notFoundMessage).toHaveText(notFoundMessageValue);
    }

}

export default new SearchBar();