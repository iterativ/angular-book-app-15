import BookService from './books.service';
import BooksEmptyComponent from './books.empty.component';
import BooksComponent from './books.component';
import BookListComponent from './books.list.component';
import BookDetailComponent from './books.detail.component';

export default angular.module('itApp.books', [])
            .factory('bookService', BookService)
            .component('booksComponent', BooksComponent)
            .component('booksEmpty', BooksEmptyComponent)
            .component('bookList', BookListComponent)
            .component('bookDetail', BookDetailComponent);