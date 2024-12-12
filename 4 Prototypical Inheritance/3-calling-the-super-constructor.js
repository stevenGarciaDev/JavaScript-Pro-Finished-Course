function Programmer(name, specialization) {
    this.name = name;
    this.specialization = specialization
}

function FrontEndProgrammer(name, specialization, preferredFramework) {
    Programmer.call(this, name, specialization);
    this.preferredFramework = preferredFramework;
}

const steven = new FrontEndProgrammer('Steven', 'Front-end', 'React');
console.log(steven.name);
console.log(steven.specialization);
console.log(steven.preferredFramework);