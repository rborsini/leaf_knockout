var overview = function () {

    var viewModel = null;

    $('#wiew-toggle').on('click', function () {

        viewModel.viewType(viewModel.viewType() == 'list-item' ? 'grid-item' : 'list-item');
    });

    return {
        init: function (url, divId) {
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
                }

                if (viewModel == null) {
                    viewModel = ko.mapping.fromJS(js);
                    viewModel.viewType = ko.observable('list-item');
                    viewModel.searchField = ko.observable('');

                    viewModel.filteredElements = ko.computed(function () {
                        return ko.utils.arrayFilter(viewModel.plants(), function (rec) {
                            return (
                                      (viewModel.searchField().length == 0 || rec.Name().toLowerCase().indexOf(viewModel.searchField().toLowerCase()) > -1)
                                   )
                        });
                    });


                    ko.applyBindings(viewModel, $(divId).get(0));
                } else {
                    ko.mapping.fromJS(js, viewModel);
                }

            }
        });
    }

}();