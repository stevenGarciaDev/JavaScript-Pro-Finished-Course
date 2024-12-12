
const canEat = {
    eat: function() {
        this.hunger--;
        console.log(`${this.name} is eating.`);
    }
};

const canWalk = {
    walk: function() {
        console.log(`${this.name} is walking.`);
    }
};

const canCode = {
    code: function() {
        console.log(`${this.name} is coding.`);
    }
};

function Programmer(name) {
    this.name = name;
    this.hunger = 10; // Default hunger level
}

// Mixin functionalities into Programmer's prototype
// Object.assign(Programmer.prototype, canEat, canWalk, canCode);

const programmer = new Programmer('Steven');

mixin(programmer, canEat, canWalk, canCode);

console.log(programmer);
programmer.eat();
programmer.walk();
programmer.code();