// Lesson
function Programmer(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;
    this.writeCode = function() {
        console.log(`${this.name} writes ${this.preferredLanguage} code.`);
    };
    this.drinksCoffee = function() {
        console.log(`${this.name} drinks coffee.`);
    };
}

const newProgrammer = new Programmer('Alice', 'JavaScript');
newProgrammer.writeCode();

/* ------------------
Exercise
------------------- */
function GroceryItem(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.display = function() {
        console.log(`${this.quantity} x ${this.name}`);
    };
}

const newItem = new GroceryItem('Banana', 5);
newItem.display();
