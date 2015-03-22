var overview = function () {

    var viewModel = null;

    // View type toggle (grid vs list)
    $('#wiew-toggle').on('click', function () {
        viewModel.viewType(viewModel.viewType() == 'list-item' ? 'grid-item' : 'list-item');
    });

    return {
        init: function (url, divId) {

            // get list length from query string
            url = url + window.location.search;

            // http request
            ajaxRequest(url, divId);
        }
    };

    function ajaxRequest(url, divId) {

        $.ajax({
            type: "GET",
            url: url,
            dataType: 'json',
            success: function (result) {

                var js = { plants: result };

                for (var i = 0; i < js.plants.length; i++) {
                    js.plants[i].link = '/Monitor/Details?id=' + js.plants[i].Id;
                    js.plants[i].typeClass = js.plants[i].Type == 'Photovoltaic' ? 'glyphicon-certificate' : 'glyphicon-tint';
                }

                // create model from json object
                viewModel = ko.mapping.fromJS(js);

                // init viewType to list mode
                viewModel.viewType = ko.observable('list-item');

                // init searchField in viewModel
                viewModel.searchField = ko.observable('');
                viewModel.pvType = ko.observable(false);
                viewModel.hydroType = ko.observable(false);

                viewModel.filteredElements = ko.computed(function () {
                    return ko.utils.arrayFilter(viewModel.plants(), function (rec) {

                        var searchByName = viewModel.searchField().length == 0 || rec.Name().toLowerCase().indexOf(viewModel.searchField().toLowerCase()) > -1;

                        var pv = viewModel.pvType();
                        var hydro = viewModel.hydroType();

                        var searchByType = (!pv && !hydro) || (pv && rec.Type() == 'Photovoltaic') || (hydro && rec.Type() == 'Hydroelectric');

                        return searchByName && searchByType;
                    });
                });

                viewModel.pvClick = function () {
                    viewModel.pvType(!$('#photovoltaic_type').hasClass('active'));
                };

                viewModel.hydroClick = function () {
                    viewModel.hydroType(!$('#hydroelectric_type').hasClass('active'));
                };

                ko.applyBindings(viewModel, $(divId).get(0));

            }
        });
    }

}();