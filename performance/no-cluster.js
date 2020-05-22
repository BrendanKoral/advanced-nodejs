
const cluster = require('cluster')
const crypto = require('crypto')
    //I'm a child and am going to act like a server 
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hi there');
        })
    });
    
    app.get('/fast', (req, res) => {
        res.send('I\'m fast');
    });

    app.listen(3000);
    