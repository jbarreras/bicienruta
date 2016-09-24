/**
 * Created by Jorge on 26/08/2016.
 */
(function (ng) {
    var mainModule = ng.module('questionModule', []);

    mainModule.controller('questionController', ['$scope', "$location", '$http', '$routeParams', function ($scope, $location, $http, $routeParams) {

        $scope.answer = "";
        $scope.saveAnswer = function (estado) {

            if ($scope.answer != "") {
                q = new Object();
                q.id = "";
                q.question = $("#question").text();
                q.answer = $scope.answer;
                $http({
                    method: "POST",
                    url: "/saveAnswer",
                    data: q,
                    headers: {'Content-Type': 'application/json'}
                }).success(function () {
                    //alert("Gracias por su apoyo!");
                }).error(function () {
                    alert("Intentalo de nuevo!");
                });
            }

            $location.path(estado);

        };

    }]);

})(window.angular);