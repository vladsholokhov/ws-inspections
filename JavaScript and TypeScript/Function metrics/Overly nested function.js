// default - OFF

function overlyNested() {
    for(let i = 0; i < 100; i++) {
        for(let i = 0; i < 100; i++) {
            for(let i = 0; i < 100; i++) {
                for(let i = 0; i < 100; i++) {
                    for(let i = 0; i < 100; i++) {
                        for(let i = 0; i < 100; i++) {

                        }
                    }
                }
            }
        }
    }
}
overlyNested();

// https://eslint.org/docs/rules/max-depth
