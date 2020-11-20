
// Node Demo 1 - Gör en egen Server 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // måste vara 200
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end('{"name" : "Kalle", "email" : "kalle@kalle.com"}');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
