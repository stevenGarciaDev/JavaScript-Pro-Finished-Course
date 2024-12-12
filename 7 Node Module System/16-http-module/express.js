// Note you need to do run, npm init --yes, in your terminal to 
// create the package.json file. Then run, npm install express, 
// before you can execute this file.
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.json([1, 2, 3]);
});

app.listen(3000, () => console.log('Listening on port 3000'));