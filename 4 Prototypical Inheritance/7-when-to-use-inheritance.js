function Employee(name) {
    this.name = name;
}

const canCode = {
    code() {
        console.log(`${this.name} is coding`);
    }
};

const canReview = {
    review() {
        console.log(`${this.name} is reviewing code.`);
    }
}

function Programmer(name) {
    Employee.call(this, name);
    // Composing the object with necessary functionalities
    Object.assign(this, canCode, canReview);
}

function Manager(name) {
    Employee.call(this, name);
}

const steven = new Programmer('Steven');
steven.code();
steven.review();
