// default - OFF

function foo() {
    bar();

    let s = 'string'; // Var statement is not at the scope start
}

// TODO: Var statement is not at the scope start - change the message?

// https://eslint.org/docs/rules/vars-on-top
