/**
 * Created by christiancueni on 12/03/16.
 */

//BookDetailController.$inject = ['$log', '$rootRouter', 'BookService'];
//
//function BookDetailController($log, $rootRouter, bookService) {
//    var $ctrl = this;
//
//    $ctrl.book = null;
//    $ctrl.collapsed = true;
//
//    $ctrl.$routerOnActivate = function(next) {
//        $log.debug('$routerOnActivate', next);
//
//        var bookId = parseInt(next.params.id, 10);
//        return bookService.getBookDetailsById(bookId).then(function(book) {
//            if(book) {
//                $ctrl.book = book;
//            }
//            else {
//                $rootRouter.navigate(['Books']);
//            }
//        });
//    };
//}

class BookDetailController {

    static $inject = ['$log', '$rootRouter', 'BookService', 'NoteService'];

    private book:IBook;
    private notes:INote[] = [];
    private note:Object;
    private formActive:Boolean = true;

    constructor(private $log, private $rootRouter, private bookService,
                private noteService) {

        this.resetNote();
        console.log("sone")
    }

    $routerOnActivate = function(next) {
        let $ctrl = this;

        console.log('$routerOnActivate', next);

        let bookId = parseInt(next.params.id, 10);
        let detailPromise =  this.bookService.getBookDetailsById(bookId).then(function (book) {
                if (book) {
                    $ctrl.book = book;
                }
                else {
                    this.$rootRouter.navigate(['Books']);
                }
        });

        let notesPromise = new Promise((resolve) => {
            this.notes = this.noteService.listNotes(bookId);
            console.log("notes", this.notes);
            resolve(true);
        });
        return Promise.all([detailPromise, notesPromise]);
    };


    private saveNote(form) {
        this.notes = this.noteService.saveNote(this.book.id, form.noteTitle, form.noteAuthor, form.noteText);
        this.resetNote();
        this.formActive = false;
        setTimeout(()=> this.formActive=true, 0);
    }

    private deleteNote(noteId) {
        this.notes = this.noteService.deleteNote(noteId);
    }

    private resetNote() {
        this.note = {
            author: "",
            title: "",
            note: ""
        }
    }

}

let BookDetailComponent = {
    templateUrl: 'app/js/books/books.detail.component.html',
    controller: BookDetailController
};

export default BookDetailComponent;
