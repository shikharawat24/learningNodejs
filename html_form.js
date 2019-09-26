var http = require('http');
var formi = require('formidable')

// Create a Node.js file that writes an HTML form, with an upload field:
http.createServer(function (req, res) {
    if (req.url == '/fileupload'){
        var form = new formi.IncomingForm();
        form.parse(req, function(err, field, files){
            if (err) throw err;
            res.write('Username is ' + field.username)
            res.write('<br> Email id is ' + field.email_id)
            res.write('<br>' + files.filetoupload.path + ' File uploaded');
            return res.end();
        });
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('Username:<br>');
        res.write('<input type="text" name="username"><br>');
        res.write('Email id:<br>');
        res.write('<input type="text" name="email_id"><br><br>');
        res.write('<label for="fileselect">Identity Document:</label>');
        res.write('<input type="file" name="filetoupload"><br><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8040);