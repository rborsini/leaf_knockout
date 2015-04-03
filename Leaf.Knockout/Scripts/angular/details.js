var app = angular.module('leaf', ["highcharts-ng"]);

app.controller('detailsCtrl', function ($scope, $interval, $http, $location) {

    var id = $location.search()['id'];

    $scope.Name = '';
    $scope.Power = '';
    $scope.Energy = '';
    refresh();
    $interval(function () {
        refresh();
    }, 3000);

    function refresh() {
        $http.get('http://localhost:49299/api/monitor/' + id)
        .success(function (response) {

            $scope.Name = response.Name;
            $scope.Power = response.Power + ' kW';
            $scope.Energy = response.Energy + ' kWh';

            $scope.highchartsNG.series[0].data = response.Values;

        });
    }


    $scope.highchartsNG = {
        series: [{
            data: []
        }],
        loading: false
    }

});