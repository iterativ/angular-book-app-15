angular.module('itApp.examples').component('examples', {
    templateUrl: 'app/js/examples/examples.html',
    controller: function($rootScope) {
        this.testData = ['a', 'b', 'c'];

        this.startAnimation = function(animationValue) {
            $rootScope.$broadcast('START_CUSTOM_ANIMATION', animationValue);
        }
    }
});