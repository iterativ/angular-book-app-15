/**
 * Created by christiancueni on 12/03/16.
 // */

BookListController.$inject = ['$log', '$scope', 'BookService'];

function BookListController($log, $scope, bookService) {
    var $ctrl = this;
    $ctrl.books = [];

    activate();

    function activate() {
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