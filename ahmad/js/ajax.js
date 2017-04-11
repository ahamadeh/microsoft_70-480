/**
 * Created by ahmad.hamadeh on 06/04/2017.
 */
console.log("mainajax");

$(document).ready(function () {
    console.log("ready");

    $("button").click(function () {
        $.getJSON("http://reisapi.ruter.no/Place/GetStop/3010200", function (response) {
            console.log(response)
            var text = JSON.stringify(response);
            $("div").append(text)
        });

    });

});



