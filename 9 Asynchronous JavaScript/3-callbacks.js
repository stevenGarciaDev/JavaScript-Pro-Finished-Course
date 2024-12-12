console.log('before');
const groceryList = getGroceryList(1); // CANNOT get grocery list like this
console.log(groceryList); // will get undefined
console.log('after');

function getGroceryList(id, callback) {
    setTimeout(() => {
        // simulate a call to the database
        console.log('Fetching grocery list from the database...');
        callback({ id: id, items: ['apples', 'bananas', 'bread'] });
    }, 2000);
}

console.log('before');
getGroceryList(1, function(groceryList) {
    console.log('Grocery List:', groceryList);
});
console.log('after');

function getGroceryList(id, callback) {
    setTimeout(() => {
        // simulate a call to the database
        console.log('Fetching grocery list from the database...');
        callback({ id: id, items: ['apples', 'bananas', 'bread'] });
    }, 2000);
}

// Accessing Nested Asynchronous Data
console.log('before');
getGroceryList(1, (groceryList) => {
    console.log('Grocery List:', groceryList);

    // get the grocery list items
    getGroceryListItems(groceryList.id, (items) => {
        console.log('Items:', items);
    });
});
console.log('after');

function getGroceryList(id, callback) {
    setTimeout(() => {
        // simulate a call to the database
        console.log('Fetching grocery list from the database...');
        callback({ id: id, items: ['apples', 'bananas', 'bread'] });
    }, 2000);
}

function getGroceryListItems(listId, callback) {
    setTimeout(() => {
        console.log('Fetching items from the grocery list...');
        callback(['apples', 'bananas', 'bread']);
    }, 2000);
}