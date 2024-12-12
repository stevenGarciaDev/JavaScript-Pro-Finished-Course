const url = 'http://mylogger.io/log';

function log(message) {
    console.log(message);
}

module.exports.log = log;
module.exports.endpoint = url;
