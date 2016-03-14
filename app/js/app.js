(function() {
    'use strict';

    var itApp = angular.module('itApp', [
        'ngSanitize',
        'ngComponentRouter',

        'LocalForageModule',

        'itApp.books',
        'itApp.examples',
        'itApp.tasks'
    ]);

    itApp.value('$routerRootComponent', 'app');

    itApp.component('app', {
        template: '<ng-outlet></ng-outlet>\n',
        $routeConfig: [
            {path: '/books/...', name: 'Books', component: 'books', useAsDefault: true},
            {path: '/examples', name: 'Examples', component: 'examples'},
            {path: '/tasks', name: 'Tasks', component: 'tasks'}
        ]
    });
}());

