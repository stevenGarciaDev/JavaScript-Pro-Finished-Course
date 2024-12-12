const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        // Logic to log an HTTP request or any message
        console.log(message);

        // Emitting an event when the log method is called
        this.emit('messageLogged', { id: 1, url: 'stevencodecraft.com'});
    }
}

module.exports = Logger;