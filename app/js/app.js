'use strict';

var itApp = angular.module('itApp', [
    'ngSanitize',
    'ngComponentRouter',

    'itApp.books',
    'itApp.examples'
]);

itApp.value('$routerRootComponent', 'app');

itApp.component('app', {
    template: '<nav>\n' +
    '</nav>\n' +
    '<ng-outlet></ng-outlet>\n',
    $routeConfig: [
        {path: '/books/...', name: 'Books', component: 'books', useAsDefault: true},
        {path: '/examples', name: 'Examples', component: 'examples'}
    ]
});
