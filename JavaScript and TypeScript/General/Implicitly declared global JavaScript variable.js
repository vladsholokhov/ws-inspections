// default - ON

// check 'assignments in global scope' to validate it in global scope
function functionForGlobalVar() {
    globalVarTest = 50; //global variable

    function innerFunction(){
        console.log(globalVarTest);
    }
}

// TODO: why do we need 'assignments in global scope' checkbox?