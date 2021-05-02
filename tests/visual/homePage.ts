const { percySnapshot } = require('@percy/percy-webdriverio')

describe('VISUAL REGRESSION - TEST', () => {
   
    before(() => {
        browser.setWindowSize(1920, 1080)
    })

  it('should verify homepage', async () => {
    browser.url('https://webdriver.io');
    await percySnapshot(browser, 'Homepage');
  });
});