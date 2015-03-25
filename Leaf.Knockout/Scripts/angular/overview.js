var app = angular.module('leaf', []);

app.controller('monitorCtrl', function ($scope, $http) {
    $http.get('http://localhost:49299/api/Monitor')
    .success(function (response) {
        $scope.items = response;
    });

    $scope.filterByTypology = function (element) {
        if ($scope.isPV == $scope.isHydro ||
            ($scope.isPV && element.Type == 'Photovoltaic') ||
            ($scope.isHydro && element.Type == 'Hydroelectric')) {
            return true;
        }
        return false;
    };
});
