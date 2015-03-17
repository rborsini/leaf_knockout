var details = function () {

    var viewModel = null;
    var chart = null;
    var emptyModel = {
        Name: '-',
        Power: '-',
        Energy: '-',
        YValues: new Array()
    };

    return {
        init: function (url, divId) {

            chart = initHighcharts();
            viewModel = ko.mapping.fromJS(emptyModel);

            viewModel.YValues.subscribe(refreshChart, null, 'change');

            ko.applyBindings(viewModel, $(divId).get(0));

            ajaxRequest(url, divId);

            setInterval(function () {
                ajaxRequest(url, divId);
            }, 3013);

        }
    };

    function refreshChart(newValues) {
        console.log("change");
        chart.series[0].setData(newValues);
    }

    function ajaxRequest(url, divId) {

        $.ajax({
            type: "GET",
            url: url,
            dataType: 'json',
            success: function (result) {
                ko.mapping.fromJS(result, viewModel);
            }
        });
    }

    function initHighcharts() {
        
        return new Highcharts.Chart({
            chart: {
                renderTo: 'chart'
            },
            series: [{
                data: {}
            }]
        })

    };

}();