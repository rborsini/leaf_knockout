var details = function () {

    var viewModel = null;

    return {
        init: function (url, divId) {

            ajaxRequest(url, divId);

            setInterval(function () {
                ajaxRequest(url, divId);
            }, 3000);

        }
    };

    function ajaxRequest(url, divId) {

        $.ajax({
            type: "GET",
            url: url,
            dataType: 'json',
            success: function (result) {

                console.log("result", result);

                if (viewModel == null) {
                    viewModel = ko.mapping.fromJS(result);
                    ko.applyBindings(viewModel, $(divId).get(0));
                } else {
                    ko.mapping.fromJS(result, viewModel);
                }

                $('#chart').highcharts({
                    title: {
                        text: 'Monthly Values',
                        x: -20 //center
                    },
                    xAxis: {
                        categories: result.XValues
                    },
                    yAxis: {
                        title: {
                            text: 'Energy (kWh)'
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                    },
                    tooltip: {
                        valueSuffix: 'kWh'
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        borderWidth: 0
                    },
                    series: [{
                        name: result.Name,
                        data: result.YValues
                    }]
                });

            }
        });
    }

}();