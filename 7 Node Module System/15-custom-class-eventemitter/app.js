const Logger = require('./logger');
const logger = new Logger();

// Registering a listener for the 'messageLogged' event
logger.on('messageLogged', (arg) => {
    console.log('Listener received: ', arg);
});

// Calling the log method, which will trigger the 'messageLogged' event
logger.log('Hello World');