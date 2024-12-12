const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

emitter.emit('messageLogged', { id: 1, url: 'stevencodecraft.com'});
