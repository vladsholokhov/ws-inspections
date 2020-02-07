// default - ON


B: for (let i = 0; i < 10; ++i) {
    continue B; // unnecessary label on continue
}

// https://eslint.org/docs/rules/no-extra-label
