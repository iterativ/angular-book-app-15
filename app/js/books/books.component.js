angular.module('itApp.books').component('books', {
    templateUrl: 'app/js/books/books.component.html',
    $routeConfig: [
        {path: '/', name: 'BookList', component: 'empty', useAsDefault: true},
        {path: '/:id', name: 'BookDetail', component: 'bookDetail'}
    ]
});