angular.module('itApp.books').component('bookList', {
    templateUrl: 'app/js/books/booklist.component.html',
    controller: 'BookListController'
});

angular.module('itApp.books').controller('BookListController', BookListController);

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