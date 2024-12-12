class Programmer {
    constructor(name) {
        this.name = name;
    }

    work() {
        console.log(`${this.name} is solving problems.`);
    }
}

class FrontEndProgrammer extends Programmer {
    constructor(name) {
        super(name); // Initialize the base class part of the object
    }

    work() {
        super.work(); // Calls the base class method
        console.log(`${this.name} is also designing and implementing UI Components`);
    }
}

const steven = new FrontEndProgrammer('Steven');
steven.work();