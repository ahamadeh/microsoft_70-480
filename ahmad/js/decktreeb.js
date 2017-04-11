/**
 * Created by ahmad.hamadeh on 05/04/2017.
 */

console.log("formJS")
console.log(firstname.value)
firstname.setAttribute("value", "nyttverdi")
console.log(firstname.value)
console.log(document.getElementById('firstname').value);


var copy = a.cloneNode(true);

copy.id ="a2";
b.appendChild(copy);

a.addEventListener('click', function () {
    alert('a')
})

$("p").click(function () {

this.style.color = "red";
});

function getRuterHeartBeat() {

    $.getJson("http://reisapi.ruter.no/Heartbeat/Index", function (response) {

        $.each(response, function(i, field){
            $("div").append(field + " ");
        });
    })

}