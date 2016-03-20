/**
 * Created by christiancueni on 12/03/16.
 // */

class BookListController {

    private books = [];
    static $inject = ['$log', '$scope', 'bookService'];

    constructor (private $log, private $scope, private bookService) {

        $log.debug('BookListController activated');

        this.bookService.getBooks().then((books) => {
            this.books = books;
        });

        this.$scope.$on('$destroy', function() {
            $log.debug('BookListController destroyed');
        });
    }
}

let BookListComponent = {
        templateUrl: 'app/js/books/books.list.component.html',
        controller: BookListController
};

export default BookListComponent;