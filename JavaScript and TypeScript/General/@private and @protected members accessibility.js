// default - ON
class ClassWithPrivateStaticField {
    static #PRIVATE_STATIC_FIELD
}

const privateStaticTest = ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD; // Private member is not accessible.

// But this inspection is probably for JSDoc @private and @protected