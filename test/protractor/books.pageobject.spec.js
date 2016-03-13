function BookDetailPage(bookId) {
    this.get = function() {
        browser.get('/#/books/' + bookId);
    };

    this.addNote = function(author, text) {
        var noteAuthorInput = element(by.model('$ctrl.noteAuthor'));
        noteAuthorInput.sendKeys(author);

        var noteTextInput = element(by.model('$ctrl.noteText'));
        noteTextInput.sendKeys(text);

        var saveButton = element(by.buttonText('Save'));
        saveButton.click();
    };

    this.getNoteText = function(noteIndex) {
        return element.all(by.repeater('note in $ctrl.notes')).get(noteIndex).getText();
    }
}

describe('book detail page', function() {

    it('can select a book and add a note', function() {
        bookPage = new BookDetailPage(2);

        bookPage.get();

        bookPage.addNote('Daniel', 'Hallo');
        var firstNoteText = bookPage.getNoteText(0);

        expect(firstNoteText).toBe('Daniel: Hallo');
    });
});
