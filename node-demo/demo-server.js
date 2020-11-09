// demo-server.js
const http = require('http');

// http 80 8080
// https 443
// ftp 21 
-q
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello EC JavaScript</h1>');
});

server.listen(port, hostname, () => {
    console.log("Server started");
});