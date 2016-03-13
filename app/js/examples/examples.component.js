angular.module('itApp.examples').component('examples', {
    template: '<div class="container-fluid"><h1>Hello Examples</h1></div>',
    controller: function() {
        this.testData = ['a', 'b', 'c']
    }
});