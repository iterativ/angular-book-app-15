import upgradeAdapter from '../upgradeAdapter';
import BookService from './books.service';
import BooksEmptyComponent from './books.empty.component';
import BooksComponent from './books.component';
import BookListComponent from './books.list.component';
import BookDetailComponent from './books.detail.component';
import {NoteService} from './note.service';

upgradeAdapter.addProvider(NoteService);

export default angular.module('itApp.books', [])
            .factory('BookService', BookService)
            .factory('NoteService', upgradeAdapter.downgradeNg2Provider(NoteService))
            .component('booksComponent', BooksComponent)
            .component('booksEmpty', BooksEmptyComponent)
            .component('bookList', BookListComponent)
            .component('bookDetail', BookDetailComponent);