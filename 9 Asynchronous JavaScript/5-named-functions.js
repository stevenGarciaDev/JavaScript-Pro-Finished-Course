function handleGroceryItems(list) {
    getGroceryItems(list.id, handleItemAvailability);
}

function handleItemAvailability(items) {
    checkItemAvailability(items[0], displayAvailability);
}
  
function displayAvailability(availability) {
    console.log('Availability:', availability);
}

console.log('Before');
getGroceryList(1, handleGroceryItems);
console.log('After');
  
function getGroceryList(id, callback) {
    setTimeout(() => {
        // Simulate a call to the database
        console.log('Fetching grocery list from the database...');
        callback({ id: id, name: 'Weekly Groceries' });
    }, 2000);
}
  
function getGroceryItems(listId, callback) {
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

console.log('Before');
getGroceryList(1)
  .then(list => getGroceryItems(list.id))
  .then(items => checkItemAvailability(items[0]))
  .then(availability => console.log('Availability:', availability))
  .catch(err => console.error(err));
console.log('After');

function getGroceryList(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Fetching grocery list from the database...');
      resolve({ id: id, name: 'Weekly Groceries' });
    }, 2000);
  });
}

function getGroceryItems(listId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Fetching grocery items...');
      resolve(['Milk', 'Bread', 'Eggs']);
    }, 2000);
  });
}

function checkItemAvailability(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Checking item availability...');
      resolve({ item: item, available: true });
    }, 2000);
  });
}