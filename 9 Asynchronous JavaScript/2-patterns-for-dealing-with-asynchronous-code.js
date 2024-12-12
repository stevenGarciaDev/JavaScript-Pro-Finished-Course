console.log('before');
const groceryItem = getGroceryItem(1); // CANNOT get grocery item like this
console.log(groceryItem); // will get undefined
console.log('after');

function getGroceryItem(id) {
    setTimeout(() => {
        // Simulate a call to the database
        console.log('Reading a grocery item from a database...');
        return { id: id, name: 'Apples' };
    }, 2000);
}

// Callbacks
console.log('before');
getGroceryItem(1, (groceryItem) => {
    console.log(groceryItem);
});
console.log('after');

function getGroceryItem(id, callback) {
    setTimeout(() => {
        console.log('Reading a grocery item from a database...');
        callback({ id: id, name: 'Apples' });
    }, 2000);
}

// Promises
console.log('before');
getGroceryItem(1)
    .then(item => console.log(item))
    .catch(err => console.error(err));
console.log('after');

function getGroceryItem(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a grocery item from a database...');
            resolve({ id: id, name: 'Apples' });
        }, 2000);
    });
}

// Using Async/Await
console.log('before');
async function displayGroceryItem() {
    const groceryItem = await getGroceryItem(1);
    console.log(groceryItem);
}
displayGroceryItem();
console.log('after');

function getGroceryItem(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a grocery item from a database...');
            resolve({ id: id, name: 'Apples' });
        }, 2000);
    });
}