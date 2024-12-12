let person = {
    name: 'Steven'
};

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: true
});

for (let key in person)
    console.log(key);

console.log(Object.keys(person));

let objectBase = Object.getPrototypeOf(person);
const propertyDescriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(propertyDescriptor);
