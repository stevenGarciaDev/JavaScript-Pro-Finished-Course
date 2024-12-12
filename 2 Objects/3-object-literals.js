// Video Lesson
let programmer = {
    name: 'Steven',
    preferredLanguage: 'JavaScript',
    writeCode: function() {
        console.log(`${this.name} writes ${preferredLanguage} code.`);
    },
    drinkCoffee() {
        console.log(`${this.name} drinks coffee.`);
    },
}

programmer.writeCode();

/* ------------------
Exercise
------------------- */
const groceryItem = {
    name: 'Apples',
    quantity: 4,
    display() {
        console.log(`${this.quantity} x ${this.name}`);
    }
};

groceryItem.display();