
BookService.$inject = ['$http'];

function BookService($http) {

    var googleBooksBaseUrl = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';

        function getBooks() {
            return $http.get('app/js/books/bookdata.json').then(function(response) {
                return response.data;
            });
        }

        function getBookDetailsByIsbn(isbn) {
            var url = googleBooksBaseUrl + isbn;
            return $http.get(url).then(function(response) {
                if(response.data.totalItems > 0) {
                    return response.data.items[0];
                }
                return null;
            });
        }

        function getBookDetailsById(id) {
            return getBooks().then(function(books) {
                var book:any = _.find(books, {id: id});
                if(book) {
                    return getBookDetailsByIsbn(book.isbn);
                }
                return null;
            });
        }

        return {
            getBooks: getBooks,
            getBookDetailsByIsbn: getBookDetailsByIsbn,
            getBookDetailsById: getBookDetailsById
        };
};

export default BookService;
