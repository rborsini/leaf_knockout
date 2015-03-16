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

                if (viewModel == null) {
                    viewModel = ko.mapping.fromJS(result);
                    ko.applyBindings(viewModel, $(divId).get(0));
                } else {
                    ko.mapping.fromJS(result, viewModel);
                }

            }
        });
    }

}();