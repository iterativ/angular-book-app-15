/**
 * Created by christiancueni on 12/03/16.
 */

BookDetailController.$inject = ['$log', '$rootRouter', 'BookService']

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
}

let BookDetailComponent = {
    templateUrl: 'app/js/books/books.detail.component.html',
    controller: BookDetailController
};

export default BookDetailComponent;
