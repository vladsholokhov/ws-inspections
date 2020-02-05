// default - ON

async function foo() {
    await await bar(); // redundant await

    // TODO: bug 'await await' is show twice
}
