// default - OFF

function overlyLongFunction() // set limit to 4
{
    function bar()
    {
        if(1)
            console.log(1);
        if(2)
            console.log(1);
    }
    if(1)
        a = b;
    if(2)
        a = b;
    if(3)
        a = b;
}
overlyLongFunction();

// https://eslint.org/docs/rules/max-statements
