// default - ON

Promise.reject("something bad happened");

Promise.reject(5);

Promise.reject();

new Promise(function(resolve, reject) {
    reject("something bad happened");
});

new Promise(function(resolve, reject) {
    reject();
});

// https://eslint.org/docs/rules/prefer-promise-reject-errors
