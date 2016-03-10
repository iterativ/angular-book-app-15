'use strict';

angular.module('itApp.books').component('bookDetail', {
    templateUrl: 'app/js/books/books.detail.component.html',
    controller: 'BookDetailController'
});

angular.module('itApp.books').controller('BookDetailController', BookDetailController);

function BookDetailController($log, bookService) {
    var $ctrl = this;

    $ctrl.book = null;
    $ctrl.collapsed = true;

    $ctrl.$routerOnActivate = function(next) {
        $log.debug('$routerOnActivate', next);

        var bookId = next.params.id;
        return bookService.getBookDetailsById(bookId).then(function(book) {
            $ctrl.book = book;
        });
    };

    /*
    vm.clickImage = function() {
        vm.collapsed = !vm.collapsed;
    };
    */
}
