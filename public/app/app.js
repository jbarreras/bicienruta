/**
 * Created by Jorge on 26/08/2016.
 */
(function (ng) {
    var app = ng.module('bicienruta', ['ngRoute', 'questionModule']);
    app.filter('urlencode', function() {
        return function(input) {
            return window.encodeURIComponent(input);
        }
    });

    app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $routeProvider
            .when('/', {
                templateUrl: 'views/problem.tpl.html',
                controller: 'questionController'
            })
            .when('/safeRoutes', {
                templateUrl: 'views/safeRoutes.tpl.html',
                controller: 'questionController'
            })
            .when('/interestPoints', {
                templateUrl: 'views/interestPoints.tpl.html',
                controller: 'questionController'
            })
            .otherwise('/');
    }


    ]);
})(window.angular);