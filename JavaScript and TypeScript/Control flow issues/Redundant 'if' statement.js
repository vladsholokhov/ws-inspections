// default - ON

function testRedundantIf() {
    if (foo()) // redundant IF
    {
        return true;
    } else {
        return false;
    }

}
