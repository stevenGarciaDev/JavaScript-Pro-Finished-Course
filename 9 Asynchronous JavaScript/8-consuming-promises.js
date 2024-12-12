console.log('Before');
getGroceryList(1, (list) => {
  getGroceryItems(list.name, (items) => {
    checkItemAvailability(items[0], (availability) => {
      console.log('Availability:', availability);
    });
  });
});
console.log('After');

function getGroceryList(id, callback) {
  setTimeout(() => {
    console.log('Fetching grocery list from the database...');
    callback({ id: id, name: 'Weekly Groceries' });
  }, 2000);
}

function getGroceryItems(listName, callback) {
  setTimeout(() => {
    console.log('Fetching grocery items...');
    callback(['Milk', 'Bread', 'Eggs']);
  }, 2000);
}

function checkItemAvailability(item, callback) {
  setTimeout(() => {
    console.log('Checking item availability...');
    callback({ item: item, available: true });
  }, 2000);
}

const getItem = getGroceryList(1);
getItem.then(item => console.log(item));

console.log('Before');

getGroceryList(1)
    .then(list => getGroceryItems(list.name))
    .then(items => checkItemAvailability(items[0]))
    .then(availability => console.log('Availability:', availability))
    .catch(err => console.error('Error:', err.message));

console.log('After');