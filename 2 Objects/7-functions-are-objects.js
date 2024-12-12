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

function add(num1, num2) {
    return num1 + num2;
}

const n = add;
console.log( n(2, 2) );
console.log( add.length );

const ProgrammerFunc = new Function('name', `
    this.name = name;
    this.writeCode = function() {
        console.log('Code in JavaScript');
    }
`);

const programmer = new ProgrammerFunc('Steven');
programmer.writeCode();

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

function calculatePrice(groceryItem, price) {
    return price * groceryItem.quantity;
}
const performCalculation = calculatePrice;
console.log( performCalculation(newItem, 0.25) );
