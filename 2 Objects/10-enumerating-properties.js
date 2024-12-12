// Lesson
let numbers = [1, 2, 3, 4, 5];
for (const element of numbers)
    console.log(element);

const dog = {
    name: 'Max',
    age: 5,
    eyeColor: 'blue'
};
for (const key in dog)
    console.log(dog[key]);

const keys = Object.keys(dog);
for (const key of keys)
    console.log(key);

const values = Object.values(dog);
for (const value of values)
    console.log(value);

const entries = Object.entries(dog);
for (const entry of entries)
    console.log(`Key: ${entry[0]} => Value: ${entry[1]}`);

// Exercise
function GroceryItem(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.display = function() {
        console.log(`${this.quantity} x ${this.name}`);
    }
}

const newItem = new GroceryItem('Banana', 5);

for (const key of Object.keys(newItem))
    console.log(key);

for (const value of Object.values(newItem))
    console.log(value);

for (const entry of Object.entries(newItem))
    console.log(entry);