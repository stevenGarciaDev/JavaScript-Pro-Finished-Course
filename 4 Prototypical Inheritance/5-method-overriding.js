function Programmer(name) {
    this.name = name;
}

Programmer.prototype.code = function() {
    console.log(`${this.name} starts coding.`);
};

function FrontEndProgrammer(name) {
    Programmer.call(this, name);
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

extend(FrontEndProgrammer, Programmer);

FrontEndProgrammer.prototype.code = function() {
    Programmer.prototype.code.call(this); // Call the base implementation
    console.log(`${this.name} is coding in HTML/CSS/JavaScript.`);
};

const steven = new FrontEndProgrammer('Steven');
steven.code();