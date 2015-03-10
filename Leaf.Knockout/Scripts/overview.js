jQuery(document).ready(function () {

    $.ajax('http://localhost:49299/api/monitorapi')
    .success(function (result) {
        console.log("result", result);
    });

});