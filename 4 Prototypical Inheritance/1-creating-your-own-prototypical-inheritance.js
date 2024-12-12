function Programmer(name) {
    this.name = name;
}

Programmer.prototype.code = function() {
    console.log(`${this.name} starts coding.`);
};

Programmer.prototype.debug = function() {
    console.log(`${this.name} is debugging.`);
};

Programmer.prototype.meeting = function() {
    console.log(`${this.name} is attending meetings.`);
}

const alice = new Programmer('Alice');
const steven = new Programmer('Steven');

alice.code();
steven.code();

console.log(alice.code === steven.code);

function FrontEndProgrammer(name) {
    Programmer.call(this, name);
}

function BackEndProgrammer(name) {
    Programmer.call(this, name);
}

FrontEndProgrammer.prototype = Object.create(Programmer.prototype);
BackEndProgrammer.prototype = Object.create(Programmer.prototype);

FrontEndProgrammer.prototype.constructor = FrontEndProgrammer;
BackEndProgrammer.prototype.constructor = BackEndProgrammer;

const joe = new FrontEndProgrammer('Joe');
joe.code();
joe.debug();
joe.meeting();

const jen = new BackEndProgrammer('Jen');
jen.code();
jen.debug();
jen.meeting();
