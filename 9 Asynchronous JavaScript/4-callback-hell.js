console.log('Before');
getGroceryList(1, (list) => {
  getGroceryItems(list.id, (items) => {
    checkItemAvailability(items[0], (availability) => {
      console.log('Availability', availability);
    });
  });
});
console.log('After');

console.log('Before');
getGroceryList(1, (groceryList) => {
    getGroceryItems(groceryList.id, (items) => {
        getItemDetails(items[0], (details) => {
            console.log('Item Details:', details);
        });
    });
});
console.log('After');

console.log('Before');
getGroceryList(1)
  .then(list => getGroceryItems(list.id))
  .then(items => checkItemAvailability(items[0]))
  .then(availability => console.log('Availability', availability))
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

console.log('Before');
async function displayAvailability() {
  try {
    const list = await getGroceryList(1);
    const items = await getGroceryItems(list.id);
    const availability = await checkItemAvailability(items[0]);
    console.log('Availability', availability);
  } catch (err) {
    console.error(err);
  }
}
displayAvailability();
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