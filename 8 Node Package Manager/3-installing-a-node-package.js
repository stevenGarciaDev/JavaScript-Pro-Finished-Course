const _ = require('underscore');

const isEven = _.some([1, 2, 3, 4, 5], num => num % 2 === 0);
console.log(isEven);
