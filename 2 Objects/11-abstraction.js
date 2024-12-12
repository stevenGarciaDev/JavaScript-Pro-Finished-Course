// Lesson
function Programmer(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;

    // Public method
    this.writeCode = function() {
        console.log(`${this.name} writes ${this.preferredLanguage} code.`);
    }

    // Private method
    const drinkCoffee = function() {
        console.log(`${this.name} drinks coffee.`);
    }.bind(this);

    // Public method
    this.startDay = function() {
        drinkCoffee();
    }
}

const programmer = new Programmer("Steven", "JavaScript");
// programmer.writeCode();
// programmer.startDay();
// console.log('----------------\nExercise\n');

// Exercise
function GroceryItem(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.display = function() {
        console.log(`${this.quantity} x ${this.name}`);
    };
}

function GroceryList() {
    const items = []; // Private array to store items

    // Private method
    const calculateTotalQuantity = function() {
        return items.reduce((total, item) => total + item.quantity, 0);
    }

    this.addItem = function(name, quantity) {
        const item = new GroceryItem(name, quantity);
        items.push(item);
    }

    this.displayItems = function() {
        items.forEach(item => item.display());
    }

    this.getTotalQuantity = function() {
        return calculateTotalQuantity();
    }
}

const myList = new GroceryList();
myList.addItem('Banana', 5);
myList.addItem('Apple', 3);
// myList.displayItems();
console.log(`Total quantity: ${myList.getTotalQuantity()}`);