// default - OFF

if (isSomething(x)) { // duplicate condition
    foo();
} else if (isSomething(x)) { // duplicate condition
    bar();
}

function isSomething() {}

// https://eslint.org/docs/rules/no-dupe-else-if
