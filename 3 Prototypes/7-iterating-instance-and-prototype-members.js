function Programmer(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage
}

const programmer = new Programmer('Steven', 'JavaScript');

Programmer.prototype.writeCode = function() {
    console.log(`${this.name} writes code in ${this.preferredLanguage}`)
};

programmer.writeCode();

for (let key in programmer)
    console.log(key);

console.log(programmer.hasOwnProperty('name'));
console.log(programmer.hasOwnProperty('writeCode'));