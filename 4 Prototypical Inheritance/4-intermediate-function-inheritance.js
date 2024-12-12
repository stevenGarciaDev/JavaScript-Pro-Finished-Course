function Programmer(name) {
    this.name = name;
}

Programmer.prototype.code = function() {
    console.log(`${this.name} starts coding.`);
};

function FrontEndProgrammer(name) {
    Programmer.call(this, name);
}

function BackEndProgrammer(name) {
    Programmer.call(this, name);
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

extend(FrontEndProgrammer, Programmer);
extend(BackEndProgrammer, Programmer);

const steven = new FrontEndProgrammer('Steven');
const alice = new BackEndProgrammer('Alice');

steven.code();
alice.code();
