var details = function () {

    var viewModel = null;
    var chart = null;

    return {
        init: function (url, divId) {

            chart = initHighcharts();
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

                chart.series[0].setData(result.YValues);

                if (viewModel == null) {
                    viewModel = ko.mapping.fromJS(result);
                    ko.applyBindings(viewModel, $(divId).get(0));
                } else {
                    ko.mapping.fromJS(result, viewModel);
                }


                viewModel.YValues.subscribe(function (newValues) {
                    chart.series[0].setData(newValues);
                });

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