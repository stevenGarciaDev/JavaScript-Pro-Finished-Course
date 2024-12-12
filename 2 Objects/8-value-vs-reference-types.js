// Lesson

// Primitive Types: Passed by Value (by copy)
let a = 10;
let b = a;

a = 20;

console.log( a );
console.log( b );

// Reference Types: Passed by reference
a = { value: 20 };
b = a;

a.value = 100;

console.log( a );
console.log( b );


