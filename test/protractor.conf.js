exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['protractor/books.pageobject.spec.js'],
    rootElement: 'html',
    onPrepare: function() {
        browser.manage().window().setSize(1200, 800);
    },
    baseUrl: 'http://localhost:9122/',
    capabilities: {
        'browserName': 'chrome'
    }
};

