// default - ON

B: for (let i = 0; i < 10; ++i) {
    break B; // unnecessary label on break
}

// https://eslint.org/docs/rules/no-extra-label
