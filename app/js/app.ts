import upgradeAdapter from './upgradeAdapter';
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

class AppComponent implements ng.IComponentOptions {
    public template:string;
    public $routeConfig:Object[];

    constructor() {
        this.template = `
        <nav></nav>
        <ng-outlet></ng-outlet>
    `;
        this.$routeConfig = [
            {path: '/books/...', name: 'Books', component: 'booksComponent', useAsDefault: true},
            {path: '/examples', name: 'Examples', component: 'examplesComponent'}
        ]
    }
}

itApp.component('app', new AppComponent()).component('topmenu', topmenu);

/* works as well, but throws a typescript warning
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
 */


upgradeAdapter.bootstrap(document.documentElement, ['itApp']);
