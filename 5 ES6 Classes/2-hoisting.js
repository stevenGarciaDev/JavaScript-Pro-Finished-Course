// Will result in a reference error
const dev = new Programmer('Steven', 'JavaScript');

class Programmer {
    constructor(name, preferredLanguage) {
        this.name = name;
        this.preferredLanguage = preferredLanguage;
    }

    code() {
        console.log(`${this.name} is coding in ${this.preferredLanguage}.`);
    }
}

// Will result in a reference error
const programmer = new MyProgrammerClass('Steven', 'JavaScript');
programmer.code();

const MyProgrammerClass = class {
    constructor(name, preferredLanguage) {
        this.name = name;
        this.preferredLanguage = preferredLanguage;
    }

    code() {
        console.log(`${this.name} is coding in ${this.preferredLanguage}.`);
    }
}

// Will execute successfully as function declarations are hoisted
greet();

function greet() {
    console.log('Hello World');
}

// Will result in a reference error
sayGoodbye();

const sayGoodbye = function() {
    console.log('Goodbye');
}