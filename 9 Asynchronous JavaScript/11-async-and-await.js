async function displayItemAvailability() {
    const list = await getGroceryList(1);
    const items = await getGroceryItems(list.name);
    const availability = await checkItemAvailability(items[0]);
    console.log('Availability:', availability);
}

displayItemAvailability();

async function displayItemAvailability() {
    try {
      const list = await getGroceryList(1);
      const items = await getGroceryItems(list.name);
      const availability = await checkItemAvailability(items[0]);
      console.log('Availability:', availability);
    } catch (err) {
      console.log('Error', err.message);
    }
}