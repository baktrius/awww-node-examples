const { stderr } = require('node:process');
const busy_wait = require('./busy_wait.js');

function process(char = '.') {
    for (let i = 0; i < 20; ++i) {
        busy_wait(100);
        stderr.write(char);
    }
    console.error()
}

process();

setTimeout(process.bind(null, '1'), 0);
setTimeout(process.bind(null, '2'), 0);
