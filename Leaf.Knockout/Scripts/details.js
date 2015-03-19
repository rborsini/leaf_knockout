var details = function () {

    var viewModel = null;
    var chart = null;
    var emptyModel = {
        Name: '-',
        Power: '-',
        Energy: '-',
        Values: new Array()
    };

    return {
        init: function (url, divId) {

            // chart init
            chart = initHighcharts();

            // create view model
            viewModel = ko.mapping.fromJS(emptyModel);

            // subscribe values changes for update chart
            viewModel.Values.subscribe(refreshChart, null, 'change');

            // binding viewmodel and html
            ko.applyBindings(viewModel, $(divId).get(0));

            // first ajax request
            ajaxRequest(url, divId);

            // automatic refresh
            setInterval(function () {
                ajaxRequest(url, divId);
            }, 3013);

        }
    };

    // Update chart values
    function refreshChart(newValues) {
        chart.series[0].setData(newValues);
    }

    // Details http request
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

    // Chart initialization
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