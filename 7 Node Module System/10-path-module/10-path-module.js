(function (exports, require, module, __filename, __dirname) {
    // Your module code lives here
    const x = 'hello';
    console.log(x);
})

const path = require('path');
const pathObject = path.parse(__filename);

console.log(pathObject);
