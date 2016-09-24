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
            .when('/video1', {
                templateUrl: 'views/video1.tpl.html',
                controller: 'questionController'
            })
            .when('/video2', {
                templateUrl: 'views/video2.tpl.html',
                controller: 'questionController'
            })
            .when('/video3', {
                templateUrl: 'views/video3.tpl.html',
                controller: 'questionController'
            })
            .when('/video4', {
                templateUrl: 'views/video4.tpl.html',
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