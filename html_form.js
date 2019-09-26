var http = require('http');

http.createServer(function (req, res) {
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
}).listen(8080);