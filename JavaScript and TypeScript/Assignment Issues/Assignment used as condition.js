// default - ON

function setHeight(someNode) {
    "use strict";
    do {
        someNode.height = "100px";
    } while (someNode = someNode.parentNode);
}


// https://eslint.org/docs/rules/no-cond-assign
