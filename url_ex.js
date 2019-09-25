var url = require('url')
var http = require('http')
var html = require('./create_html.js')
var fs = require('fs')

var file = html();
console.log('HTML file name is ' + file);

// Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:
// req url: http://localhost:8080/1.html
// q.pathname : 1.html
// filename: ./1.html

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    console.log(filename)

    try{
        if (!fs.existsSync(filename)) {
            var file = html();
            console.log('HTML file name is ' + file);
        }
    }
    catch(err) {
        console.error(err)
    }

    fs.readFile(filename, function(err, data){
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 not found');
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    });
}).listen(8080);
