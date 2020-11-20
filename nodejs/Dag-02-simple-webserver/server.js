// server.js
const http = require('http');
const router = require('./routes');

const host = '127.0.0.1';
const port = '3000';

//kolla i node-demo-1.js från dag 1

http.createServer(router.handleRequest).listen(port, host, () => {
    console.log(`Server run on: http://${host}:${port}/`);
});


