// default - ON

const unfilteredObject = function () {}

let arr;
let i;

for (i in arr) {
    unfilteredObject(arr[i]); // unfiltered
}

// https://eslint.org/docs/rules/guard-for-in