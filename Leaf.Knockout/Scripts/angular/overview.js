var app = angular.module('leaf', []);

app.controller('monitorCtrl', function ($scope, $http) {
    $http.get('http://localhost:49299/api/Monitor')
    .success(function (response) {
        $scope.items = response;
    });

    $scope.isToggle = false;

    $scope.filterByTypology = function (element) {
        if ($scope.isPV == $scope.isHydro ||
            ($scope.isPV && element.Type == 'Photovoltaic') ||
            ($scope.isHydro && element.Type == 'Hydroelectric')) {
            return true;
        }
        return false;
    };

    $scope.toggle = function () {
        $scope.isToggle = !$scope.isToggle;
    };

    $scope.getTemplate = function () {
        return $scope.isToggle ? '../Templates/grid-item.html' : '../Templates/list-item.html';
    }

});
