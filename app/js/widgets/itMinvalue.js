'use strict';

angular.module('itApp.widgets').directive('itMinvalue', [function() {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelController) {
            if(!ngModelController) {
                return;
            }

            var minvalue = 0;

            scope.$watch(attrs.itMinvalue, function ngAttrAliasWatchAction(value) {
                attrs.$set('minvalue', value);
            });

            attrs.$observe('minvalue', function(value) {
                minvalue = parseFloat(value) || 0;
                ngModelController.$validate();
            });

            ngModelController.$validators.minvalue = function(modelValue, viewValue) {
                return ngModelController.$isEmpty(viewValue) || parseFloat(viewValue) >= minvalue;
            };

        }
    };
}]);
