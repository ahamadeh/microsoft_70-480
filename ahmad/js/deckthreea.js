/**
 * Created by ahmad.hamadeh on 05/04/2017.
 */
/*
console.log(navigator.appName)

if (1 + 2 === 3) {
    console.log("A")
} else {
    console.log("B")
}

if (0.1 + 0.2 === 0.3) {
    console.log("A")
} else {
    console.log("B")
}

var c = 5 / 0;

console.log(c);
console.log(Math.round(2.5))
console.log(Math.round(3.5))


function parseDate(input) {
    var parts = input.split('-');
    console.log(parts[1])
    return new Date(parts[0], parts[1] - 1, parts[2])

}
console.log(parseDate('2017-04-05'));

var date = new Date();
//console.log(date.now())
console.log(date.getYear());
console.log(date.getFullYear());
console.log(date.getDay());

Number.prototype.ahmadsAge = function () {
    return this - 1985
};

var year = 2011;
console.log(year.ahmadsAge());
*/

/*
var json ={ name:"John", age:30, car:null };
console.log(json);
console.log(JSON.stringify(json));
console.log(JSON.parse(JSON.stringify(json)));

var i = 42;
console.log(typeof i);
*/

function alpha(name, age) {
    console.log(arguments.length)
    console.log(arguments[0])
    console.log(name)

}

alpha("bob")
alpha()