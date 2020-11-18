const http = require('http');

const host = '127.0.0.1';
const port = '3000';
const server = http.createServer((req, res) => {
    var reply = {};
    reply.name = "Karl Karsson";
    reply.email = "kalle@kalle.com";
    reply.mobile = "070100200";
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(reply));
});

server.listen(port, host, () => {
    console.log(`RestAPI server: http://${host}:${port}/`);
});

