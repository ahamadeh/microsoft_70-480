window.onload = function () {
    LoadFromStorage();
    document.getElementById("btnAdd").onclick = function () {
        localStorage.setItem(document.getElementById("toStorageKey").value,
            document.getElementById("toStorageValue").value);
        LoadFromStorage();
    }
    document.getElementById("btnRemove").onclick = function () {
        localStorage.removeItem(document.getElementById("toStorageKey").value);
        LoadFromStorage();
    }
    document.getElementById("btnClear").onclick = function () {
        localStorage.clear();
        LoadFromStorage();
    }}
function LoadFromStorage() {
    var storageDiv = document.getElementById("storage");
    var tbl = document.createElement("table");
    tbl.id = "storageTable";
    if (localStorage.length > 0) {

        for (var i = 0; i < localStorage.length; i++) {
            var row = document.createElement("tr");
            var key = document.createElement("td");
            var val = document.createElement("td");
            key.innerText = localStorage.key(i);
            val.innerText = localStorage.getItem(key.innerText);
            row.appendChild(key);
            row.appendChild(val);
            tbl.appendChild(row);
        }
    }
    else {
        var row = document.createElement("tr");
        var col = document.createElement("td");
        col.innerText = "No data in local storage.";
        row.appendChild(col);
        tbl.appendChild(row);
    }
    if (document.getElementById("storageTable")) {
        document.getElementById("storageTable").childNodes(tbl);
    }
    else {
        storageDiv.appendChild(tbl);
    }


    var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby',
        'tennis', 'badminton');
    console.log(sports)
    console.log(sports.join(' och '))
    console.log(sports.reverse())
    console.log(sports.splice(1, 3, 'golf', 'curling', 'darts'))
    console.log(sports.shift())
    console.log(sports.pop())

    var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    var squares = numbers.map(squareNumber, numbers);
    console.log(squares)

    function squareNumber(value, position, array) {
        return value * value;
    }
    console.log(numbers)

}
