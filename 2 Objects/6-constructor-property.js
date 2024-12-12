// Lesson
function Programmer(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;
}

const newProgrammer = new Programmer('Alice', 'JavaScript');
console.log(newProgrammer.constructor);

