angular.module('itApp.examples').component('examples', {
    templateUrl: 'app/js/examples/examples.html',
    controller: function() {
        this.testData = ['a', 'b', 'c']
    }
});