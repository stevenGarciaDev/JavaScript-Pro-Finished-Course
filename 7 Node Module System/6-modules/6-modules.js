global.console.log('This is a global console call');
setTimeout(() => {
    console.log('This happens after a timeout');
}, 1000);

let message = 'Hello World';
console.log(global.message);

function updateTime() {
    const now = new Date();
    console.log(`Current time: ${now.toLocaleDateString()}`);
}

// Set an interval to run updateTime every second (1000 milliseconds)
const intervalId = setInterval(updateTime, 1000);

// Stop the interval after 5 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval cleared, no more time updates.');
}, 5000);