describe('In walkthroug trough the Best-Practice App a user can', function() {

    it('see the start page', function() {
        browser.get('/');
        var logo = element(by.css('a.navbar-brand'));
        logo.click().then(function() {
            var title = element(by.tagName('h1'));
            expect(title.getText()).toBe('Books');
        });
    });

    it('can select a book', function() {
        element.all(by.repeater('book in $ctrl.books')).get(0).element(by.tagName('a')).click();

        var noteAuthorInput = element(by.model('$ctrl.noteAuthor'));
        noteAuthorInput.sendKeys('Hans');

        var noteTextInput = element(by.model('$ctrl.noteText'));
        noteTextInput.sendKeys('Hello World');

        var saveButton = element(by.buttonText('Save'));
        saveButton.click();

        var firstNote = element.all(by.repeater('note in $ctrl.notes')).get(0);
        expect(firstNote.getText()).toBe('Hans: Hello World');

        //browser.pause();
    });
});
