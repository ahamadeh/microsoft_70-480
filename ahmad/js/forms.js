/**
 * Created by ahmad.hamadeh on 06/04/2017.
 */

console.log("formsManinpage")

function testsubmit() {
    var r = /b{2}/g

    if(r.test(firstname.value.match(r))){
        alert("ahmad is a match")
    }else {
        alert("ahmad is not a match")
    }
    return false;
}
