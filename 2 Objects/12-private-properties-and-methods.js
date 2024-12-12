// Lesson
function Programmer(name, preferredLanguage) {
    // Private property
    let privateName = name;

    // Public property
    this.preferredLanguage = preferredLanguage;

    // Public method
    this.writeCode = function() {
        console.log(`${privateName} codes in ${this.preferredLanguage}`);
    }

    // Private method
    let drinkCoffee = function() {
        console.log('Gulp...');
    }

    // Public method that uses a closure
    this.startDay = function() {
        drinkCoffee();
    }
}

const programmer = new Programmer('Alice', 'JavaScript');
programmer.writeCode();
programmer.startDay();
console.log('---------------------\nExercise\n');

// Exercise
function BankAccount(initialBalance) {
    let balance = initialBalance; // Private variable to store balance

    // Private method to validate the amount
    const isValidAmount = function(amount) {
        return typeof amount === 'number' && amount > 0;
    }

    // Public method to deposit money
    this.deposit = function(amount) {
        if (isValidAmount(amount)) {
            balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log('Invalid deposit amount');
        }
    };

    // Public method to withdraw money
    this.withdraw = function(amount) {
        if (isValidAmount(amount)) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrew: $${amount}`);
            } else {
                console.log('Insufficient funds');
            }
        } else {
            console.log('Invalid withdraw amount');
        }
    };

    // Public method to get the current balance
    this.getBalance = function() {
        return balance;
    }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(30);
console.log(myAccount.getBalance());
