angular.module('itApp.books').component('books', {
    templateUrl: 'app/js/books/books.component.html',
    $routeConfig: [
        {path: '/', name: 'BookList', component: 'empty', useAsDefault: true},
        {path: '/:id', name: 'BookDetail', component: 'bookDetail'}
    ],
    $canActivate: function($timeout) {
        console.log('books $canActivate');

        // can return an async promise
        return $timeout(function() {return true}, 1000);
    }
});