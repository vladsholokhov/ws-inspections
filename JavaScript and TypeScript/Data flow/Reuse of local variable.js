// default - OFF

function reuseOfLocalVarTest() {
    let x = 3;
    for (let i = 0; i < 4; i++) {
        x = 4;
        console.log(x);
    }
    x = 4; // reuse of local variable
    console.log(x);
}
