const fetch = require('node-fetch');

// npm install node-fetch
// npm install express 

fetch('http://127.0.0.1:3000/')
    .then(res => res.json())
    .then(data => console.log(data));

