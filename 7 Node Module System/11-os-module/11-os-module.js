const os = require('os');

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);
