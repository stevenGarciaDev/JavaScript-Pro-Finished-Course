console.log('before');
console.log('after');

console.log('before');
setTimeout(() => {
    // Simulate a call to the database
    console.log('Reading a grocery item from a database...');
}, 2000);
console.log('after');