const _language = new WeakMap();
const _work = new WeakMap();

class ProgrammerImplementation {
    constructor(name, language) {
        this.name = name;

        // Store language in a WeakMap with 'this' as the key
        _language.set(this, language);

        // Store a private method in a WeakMap
        _work.set(this, () => {
            console.log(`${this.name} is coding in ${_language.get(this)}`);
        });
    }

    code() {
        // Access and invoke the private method
        _work.get(this)();
    }
}

const privateProps = new WeakMap();

class Programmer {
    constructor(name, language) {
        privateProps.set(this, {
            name: name,
            language: language,
            work: () => {
                console.log(`${privateProps.get(this).name} is coding in ${privateProps.get(this).language}`);
            }
        });
    }

    code() {
        privateProps.get(this).work();
    }
}

const programmer = new ProgrammerImplementation('Steven', 'JavaScript');
programmer.code();

