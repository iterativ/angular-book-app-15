/**
 * Created by christiancueni on 12/03/16.
 // */

class BookListController {

    private books = [];
    static $inject = ['$log', '$scope', 'bookService'];

    constructor ($log, $scope, bookService) {

        let $ctrl = this;

        $log.debug('BookListController activated');

        bookService.getBooks().then(function(books) {
            $ctrl.books = books;
        });

        $scope.$on('$destroy', function() {
            $log.debug('BookListController destroyed');
        });
    }
}

let BookListComponent = {
        templateUrl: 'app/js/books/books.list.component.html',
        controller: BookListController
};

export default BookListComponent;