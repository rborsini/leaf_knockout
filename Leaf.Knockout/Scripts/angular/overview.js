
var app = angular.module('leaf', []);

app.controller('monitorCtrl', function ($scope, $http) {
    $http.get('http://localhost:49299/api/Monitor')
    .success(function (response) {
        $scope.items = response;
        console.log("response", response);
    });
});
