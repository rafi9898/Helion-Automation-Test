export default class Base {
    async pauseShort() {
        await browser.pause(3000);
    }

    async pauseMedium() {
        await browser.pause(5000);
    }

    async pauseLong() {
        await browser.pause(8000);
    }

    async setDesktopSize() {
        await browser.setWindowSize(1920, 1080);
    }

    async setMobileSize() {
        await browser.setWindowSize(375, 667);
    }

}