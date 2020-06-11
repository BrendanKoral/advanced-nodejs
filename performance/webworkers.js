
const crypto = require('crypto')
const Worker = require('worker_threads')

//I'm a child and am going to act like a server 
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const worker = new Worker(function () {
        this.onmessage = function() {
            let counter = 0
            while (counter < 1e9) counter++

            postMessage(counter)
        }
    })

    worker.onmessage = function(myCounter) {
        console.log(myCounter)
    }

    worker.postMessage()
});

app.get('/fast', (req, res) => {
    res.send('I\'m fast');
});

app.listen(3000);
