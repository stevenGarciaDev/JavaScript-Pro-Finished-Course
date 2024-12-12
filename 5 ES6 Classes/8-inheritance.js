class Programmer {
    constructor(name) {
        this.name = name;
    }

    code() {
        console.log(`${this.name} starts coding.`);
    }
}

class FrontEndProgrammer extends Programmer {
    constructor(name, tools) {
        // Call the superclass constructor with the name
        super(name); 
        // Additional property specific to FrontEndProgrammers
        this.tools = tools;
    }

    code() {
        super.code(); // Call the generic code method from Programmer
        console.log(`${this.name} codes with ${this.tools}.`);
    }

    design() {
        console.log(`${this.name} also designs the user interfaces.`);
    }
}

const frontEndDev = new FrontEndProgrammer('Steven', 'React');
frontEndDev.code(); 
frontEndDev.design();