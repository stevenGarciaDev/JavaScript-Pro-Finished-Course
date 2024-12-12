const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response.data))
    .catch(err => console.error('Error: ', err.message));