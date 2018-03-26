function hasOddNumber(arr) {
    return arr.some(function (item) {
        if (item % 2 !== 0) {
            return true;
        }
    });
}

console.log(hasOddNumber([1, 2, 2, 2, 2, 2, 4]));

console.log(hasOddNumber([2, 2, 2, 2, 2, 4]));

//=====================================================================

function hasAZero(num) {
    return num.toString().split('').some(function (item) {
        return item === '0';
    });
}

console.log(hasAZero(3332123213101232321));

console.log(hasAZero(1212121));

//=====================================================================

function hasOnlyOddNumbers(arr) {
    return arr.every(function (item) {
        return (item % 2 !== 0);
    });
}

console.log(hasOnlyOddNumbers([1, 3, 5, 7]));
console.log(hasOnlyOddNumbers([1, 2, 3, 5, 7]));

//=====================================================================

function hasNoDuplicates(arr) {
    return arr.every(function (item) {
        return arr.indexOf(item) === arr.lastIndexOf(item);
    });
}

console.log(hasNoDuplicates([1, 2, 3, 1]));
console.log(hasNoDuplicates([1, 2, 3]));

//=====================================================================

function hasCertainKey(arr, key) {
    return arr.every(function (item) {
        return key in item;
    });
}

var arr = [
    {
        title: "Instructor",
        first: 'Elie',
        last: "Schoppik"
    },
    {
        title: "Instructor",
        first: 'Tim',
        last: "Garcia",
        isCatOwner: true
    },
    {
        title: "Instructor",
        first: 'Matt',
        last: "Lane"
    },
    {
        title: "Instructor",
        first: 'Colt',
        last: "Steele",
        isCatOwner: true
    }
    ];

console.log(hasCertainKey(arr, 'first')); // true
console.log(hasCertainKey(arr, 'isCatOwner')); // false

//=====================================================================

function hasCertainValue(arr, key, searchValue) {
    return arr.every(function (item) {
        return item[key] === searchValue;
    });
}

var arr = [
    {
        title: "Instructor",
        first: 'Elie',
        last: "Schoppik"
    },
    {
        title: "Instructor",
        first: 'Tim',
        last: "Garcia",
        isCatOwner: true
    },
    {
        title: "Instructor",
        first: 'Matt',
        last: "Lane"
    },
    {
        title: "Instructor",
        first: 'Colt',
        last: "Steele",
        isCatOwner: true
    }
    ];

console.log(hasCertainValue(arr, 'title', 'Instructor')); // true
console.log(hasCertainValue(arr, 'first', 'Elie')); // false
