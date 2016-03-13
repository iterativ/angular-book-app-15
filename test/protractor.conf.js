exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['protractor/books.spec.js'],
    rootElement: 'html',
    onPrepare: function() {
        browser.manage().window().setSize(1200, 800);
    },
    baseUrl: 'http://localhost:3001/',
    capabilities: {
        'browserName': 'chrome'
    }
};

