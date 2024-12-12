const p = Promise.resolve({ id: 1 });
p.then(result => console.log(result));

const errorPromise = Promise.reject(new Error('reason for rejection...'));
errorPromise.catch(error => console.log(error.message))