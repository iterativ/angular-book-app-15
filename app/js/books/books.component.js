itApp.component('books', {
    templateUrl: 'app/js/books/books.component.html',
    $routeConfig: [
        {path:'/',    name: 'BookList',   component: 'bookList', useAsDefault: true},
        {path:'/:id', name: 'BookDetail', component: 'bookDetail'}
    ]
});