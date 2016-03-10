'use strict';

angular.module('itApp.books').component('bookDetail', {
    templateUrl: 'app/js/books/books.detail.component.html',
    controller: 'BookDetailController'
});

angular.module('itApp.books').controller('BookDetailController', BookDetailController);

function BookDetailController($log, $rootRouter, bookService) {
    var $ctrl = this;

    $ctrl.book = null;
    $ctrl.collapsed = true;

    $ctrl.$routerOnActivate = function(next) {
        $log.debug('$routerOnActivate', next);

        var bookId = parseInt(next.params.id, 10);
        return bookService.getBookDetailsById(bookId).then(function(book) {
            if(book) {
                $ctrl.book = book;
            }
            else {
                $rootRouter.navigate(['Books']);
            }
        });
    };

    /*
    vm.clickImage = function() {
        vm.collapsed = !vm.collapsed;
    };
    */
}
