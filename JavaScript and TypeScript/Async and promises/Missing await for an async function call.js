// default - ON

async function foo(x) {
    bar(x); // missing await
}

async function bar(x) {}

// https://eslint.org/docs/rules/require-await#top
