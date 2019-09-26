var http = require('http');
console.log('My first js');

// The code tells the computer to write "Hello World!" if web browser
// tries to access your computer on port 8080. http://localhost:8080
// Use the createServer() method to create an HTTP server:

// The function passed into the http.createServer() method, will be executed when
// someone tries to access the computer on port 8080.
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);