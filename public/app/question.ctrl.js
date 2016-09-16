/**
 * Created by Jorge on 26/08/2016.
 */
(function (ng) {
    var mainModule = ng.module('questionModule', []);

    mainModule.controller('questionController', ['$scope', "$location", '$http', '$routeParams', function ($scope, $location, $http, $routeParams) {


        $scope.answer="";
        $scope.saveAnswer = function (estado) {

            if ($scope.answer != "") {
                q= new Object();
                q.id="";
                q.question=$("#question").text();
                q.answer=$scope.answer;
                $http({
                    method: "POST",
                    url: "/saveAnswer",
                    data: q,
                    headers: {'Content-Type': 'application/json'}
                }).success(function () {
                    //swal("Gracias por tu interés!", "Te mantendremos informado!", "success");
                    $location.path(estado);
                }).error(function () {
                    alert("Upsss!", "Intentalo de nuevo!", "error");
                });
            }
            else {
                alert("Gracias por tu interés!", "Ingresa tu correo electrónico para informarte!", "info");
            }
        };







    }]);
})(window.angular);