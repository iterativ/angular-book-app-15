(function() {
    'use strict';

    angular.module('itApp.widgets').directive('itFormField', function() {
        return {
            restrict: 'E',
            require: '^form',
            scope: {
                label: '@',
                debug: '&'
            },
            transclude: true,
            link: function(scope, element, attrs, form) {
                var $input = element.find('input');
                $input.addClass('form-control');
                scope.name = $input.attr('name');
                scope.form = form;
                scope.field = form[scope.name];

                if($input.attr('ng-required')) {
                    scope.required = scope.$parent.$eval($input.attr('ng-required'));
                    scope.$watch(function() {
                        return scope.$parent.$eval($input.attr('ng-required'));
                    }, function(newValue) {
                        scope.required = newValue;
                    });
                }
            },
            templateUrl: '/app/js/widgets/itFormField.html'
        };
    });

}());
