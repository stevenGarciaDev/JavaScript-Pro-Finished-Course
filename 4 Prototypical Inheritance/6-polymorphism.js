function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Programmer(name) {
    this.name = name;
}

Programmer.prototype.work = function() {
    console.log(`${this.name} is working on programming tasks.`);
};

function FrontEndProgrammer(name) {
    Programmer.call(this, name);
}

function BackEndProgrammer(name) {
    Programmer.call(this, name);
}

extend(FrontEndProgrammer, Programmer);
extend(BackEndProgrammer, Programmer);

FrontEndProgrammer.prototype.work = function() {
    console.log(`${this.name} is designing and coding the frontend.`);
}

BackEndProgrammer.prototype.work = function() {
    console.log(`${this.name} is developing server-side logic.`);
}

const steven = new FrontEndProgrammer('Steven');
const alice = new BackEndProgrammer('Alice');

const programmers = [
    steven,
    alice
];

for (let programmer of programmers)
    programmer.work();