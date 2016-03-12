/**
 * Created by christiancueni on 11/03/16.
 */

let BooksComponent = {
        templateUrl: 'app/js/books/books.component.html',
        $routeConfig: [
            {path: '/', name: 'BookList', component: 'bookList', useAsDefault: true},
            {path: '/:id', name: 'BookDetail', component: 'bookDetail'}
        ]
};

export default BooksComponent;
