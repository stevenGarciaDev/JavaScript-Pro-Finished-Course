const _language = new WeakMap();

class Programmer {
    constructor(name, language) {
        this.name = name;
        _language.set(this, language);
    }

    getLanguage() {
        return _language.get(this);
    }
}

const programmer = new Programmer('Steven', 'JavaScript');
console.log(programmer.getLanguage());  // Outputs: JavaScript

class ProgrammerUsingObjectDefineProperty {
    constructor(name, language) {
        this.name = name;
        _language.set(this, language);

        Object.defineProperty(this, 'language', {
            get: function() {
                return _language.get(this);
            }
        });
    }
}

const programmer2 = new ProgrammerUsingObjectDefineProperty('Steven', 'JavaScript');
console.log(programmer2.skills);  // Outputs: JavaScript

// get and set operators
class ProgrammerUsingGettersAndSetters {
    constructor(name, language) {
        this.name = name;
        _language.set(this, language);
    }

    // Getter
    get language() {
        return _language.get(this);
    }

    // Setter
    set languge(newLanguage) {
        if (!newLanguage) throw new Error('Skills cannot be empty');
        _language.set(this, newLanguage);
    }
}

const programmer3 = new ProgrammerUsingGettersAndSetters('Steven', 'JavaScript');
console.log(programmer3.skills);  // Outputs: JavaScript
programmer3.skills = 'Python';
console.log(programmer3.skills);  // Outputs: Python