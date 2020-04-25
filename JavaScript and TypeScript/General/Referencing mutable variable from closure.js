// default - ON

function getJson() {}

for (let i = 0; i < 100; i++) {
    var mutableVar = 'file';
    getJson(function() {
        if (mutableVar !== undefined) {} // Mutable variable is accessible from closure
    });
}

// TODO: probably outdated inspection