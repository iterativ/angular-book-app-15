(function() {
    'use strict';

    angular.module('itApp.widgets').directive('itAnimatedCss', ['$animate', function ($animate) {
        return {
            link: function (scope, element, attrs) {
                var declaredAnimation = attrs.itAnimatedCss || 'bounce';
                var animationStartEvent = attrs.itAnimatedStartEvent || 'IT_ANIMATION_START';

                if(animationStartEvent) {
                    scope.$on(animationStartEvent, function(event, animation) {
                        animation = animation || declaredAnimation;
                        console.log('animation', animation);
                        $animate.addClass(element, 'animated ' + animation).then(function () {
                            $animate.removeClass(element, 'animated ' + animation);
                        });
                    });
                }
            }
        };
    }]);
}());
