const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

const asyncFiles = fs.readdir('./', (err, files) => {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});

console.log(asyncFiles);