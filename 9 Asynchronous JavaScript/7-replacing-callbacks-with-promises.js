function getGroceryList(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Fetching grocery list from the database...');
        resolve({ id: id, name: 'Weekly Groceries' });
      }, 2000);
    });
}
  
function getGroceryItems(listName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('Fetching grocery items...');
        resolve(['Milk', 'Bread', 'Eggs']);
        }, 2000);
    });
}

function checkItemAvailability(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('Checking item availability...');
        resolve({ item: item, available: true });
        }, 2000);
    });
}

async function displayItemAvailability() {
  try {
    const list = await getGroceryList(1);
    const items = await getGroceryItems(list.name);
    const availability = await checkItemAvailability(items[0]);
    console.log('Availability:', availability);
  } catch (err) {
    console.log('Error:', err.message);
  }
}

displayItemAvailability();

// getGroceryList(1)
//   .then(list => getGroceryItems(list.name))
//   .then(items => checkItemAvailability(items[0]))
//   .then(availability => console.log('Availability:', availability))
//   .catch(err => console.error('Error:', err.message));

console.log('After');