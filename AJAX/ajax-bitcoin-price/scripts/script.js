var btn = document.querySelector("button");
var price = document.querySelector("#price");
var currency = "GBP";

//listen for clicks
btn.addEventListener("click", function () {
    //    make the request
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            console.log(JSON.parse(XHR.responseText).bpi.USD.rate);
            var priceValue = JSON.parse(XHR.responseText).bpi[currency].rate;
            price.innerText = priceValue + " " + currency;
        }
    }

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
});

function findIndex(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }

    return -1;
}

function tripleAndFilter(arr) {
    return (arr) => {
        arr.map(var => {
            return var * 3;
        }).filter(var => {
            return var % 5 === 0;
        });
    }
}
