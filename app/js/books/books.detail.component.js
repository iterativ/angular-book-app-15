'use strict';

angular.module('itApp.books').component('bookDetail', {
    templateUrl: 'app/js/books/books.detail.component.html',
    controller: 'BookDetailController'
});

angular.module('itApp.books').controller('BookDetailController', BookDetailController);

function BookDetailController($log, $rootRouter, bookService, bookNotesService) {
    var $ctrl = this;

    $ctrl.book = null;
    $ctrl.collapsed = false;
    $ctrl.bookNotes = [];
    $ctrl.noteAuthor = '';
    $ctrl.noteText = '';

    $ctrl.saveNote = saveNote;
    $ctrl.clickImage = clickImage;

    $ctrl.$routerOnActivate = function(next) {
        $log.debug('$routerOnActivate', next);

        var bookId = parseInt(next.params.id, 10);
        return bookService.getBookDetailsById(bookId).then(function(book) {
            if(book) {
                $ctrl.book = book;
                loadBookNotes();
            }
            else {
                $rootRouter.navigate(['Books']);
            }
        });
    };

    function loadBookNotes() {
        bookNotesService.listNotes($ctrl.book.id).then(function(notes) {
            $ctrl.notes = notes;
        });
    }

    function saveNote() {
        bookNotesService.saveNote($ctrl.book.id, {
            author: $ctrl.noteAuthor,
            text: $ctrl.noteText
        }).then(function() {
            $ctrl.noteAuthor = '';
            $ctrl.noteText = '';
            loadBookNotes();
        });
    }

    function clickImage() {
        $ctrl.collapsed = !$ctrl.collapsed;
    };
}
