import topmenu from './topmenu.component';
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
    template: `
        <nav></nav>
        <ng-outlet></ng-outlet>
    `,
    $routeConfig: [
        {path: '/books/...', name: 'Books', component: 'booksComponent', useAsDefault: true},
        {path: '/examples', name: 'Examples', component: 'examplesComponent'}
    ]
}).component('topmenu', topmenu);

angular.bootstrap(document.documentElement, ['itApp']);
