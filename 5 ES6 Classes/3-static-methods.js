class Programmer {
    constructor(name, preferredLanguage) {
        this.name = name;
        this.preferredLanguage = preferredLanguage;
    }
    
    code() {
        console.log(`${this.name} is coding in ${this.preferredLanguage}.`);
    }

    static compareSkill(programmer1, programmer2) {
        return programmer1.preferredLanguage === programmer2.preferredLanguage;
    }
}

const dev = new Programmer('Steven', 'JavaScript');
const dev2 = new Programmer('Alice', 'JavaScript');
console.log(Programmer.compareSkill(dev, dev2));

/* --------------
Exercise
-------------- */
class GroceryItem {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    display() {
        console.log(`${this.name} x ${this.quantity}`);
    }

    static compareQuantities(item1, item2) {
        if (item1.quantity > item2.quantity) {
            console.log(`${item1.name} has more quantity than ${item2.name}`);
        } else if (item1.quantity < item2.quantity) {
            console.log(`${item2.name} has more quantity than ${item1.name}`);
        } else {
            console.log(`${item1.name} and ${item2.name} have the same quantity`);
        }
    }
}

const apple = new GroceryItem('Apple', 7);
const banana = new GroceryItem('Banana', 7);
console.log(GroceryItem.compareQuantities(apple, banana));