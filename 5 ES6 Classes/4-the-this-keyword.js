'use strict';

function ProgrammerFunc(name) {
    this.name = name;
    this.code = function() {
        console.log(this);
    }
}

class Programmer {
    constructor(name) {
        this.name = name;
    }

    code() {
        console.log(this);
    }
}

const programmer = new Programmer('Steven');
programmer.code();

const detachedCode = programmer.code;
detachedCode();
