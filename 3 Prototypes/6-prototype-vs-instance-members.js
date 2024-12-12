function Programmer(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;
}

Programmer.prototype.writeCode = function() {
    console.log(`${this.name} writes code in ${this.preferredLanguage}`);
};

Programmer.prototype.toString = function() {
    return `Programmer: ${this.name}, Language: ${this.preferredLanguage}`;
};

const jsProgrammer = new Programmer('Alice', 'JavaScript');
jsProgrammer.writeCode();
