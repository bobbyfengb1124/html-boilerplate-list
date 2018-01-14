var arr = [1, 2, 3, 4, 5, 6];

function double(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i] * 2);
    }
}

double(arr);

//callback example

function forEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

function findIndex(arr, callBack) {
    var ret = -1;

    for (var i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr)) {
            return i;
        }
    }

    return ret;
}

//count Down exercise

function countDown(seconds) {
    var int = setInterval(function () {
        if (seconds > 0) {
            console.log(seconds);
            seconds--;
        }
        else {
            console.log("Ring Ring Ring!!!");
            clearInterval(int);
        }

    }, 1000);
}

countDown(4);

//Event Queue

function square(n) {
    return n * n;
}



setTimeout(function() {
    console.log("Callback was placed on the queue");
}, 0);

console.log(square(2));



setTimeout(function() {
    console.log("Hello from the timeout!");
}, 0);

for(var i=0; i<1000000000;i++) {
    var x = i * 2;
}
console.log("Done with loop");