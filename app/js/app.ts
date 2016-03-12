import examples from './examples/examples.module';
import books from './books/books.module';


var itApp = angular.module('itApp', [
    'ngSanitize',
    'ngComponentRouter',
    examples.name,
    books.name
]);

itApp.value('$routerRootComponent', 'app');

itApp.component('app', {
    template: '<nav>\n' +
    '</nav>\n' +
    '<ng-outlet></ng-outlet>\n',
    $routeConfig: [
        {path: '/books/...', name: 'Books', component: 'booksComponent', useAsDefault: true},
        {path: '/examples', name: 'Examples', component: 'examplesComponent'}
    ]
});

angular.bootstrap(document.documentElement, ['itApp']);

