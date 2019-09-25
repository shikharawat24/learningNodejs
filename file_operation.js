const fs = require('fs')
const mdm = require('./my_module')


var file = 'file.txt'
fs.open(file, 'w', function (err, file) {
    if (err) throw err;
    console.log('Open file is done!');
});

fs.writeFile(file, mdm.myFileData(), function (err) {
    if (err) throw err;
    console.log('Write in file is done!');
});

fs.appendFile(file, mdm.myDateTime(), function(file, err){
    if (err) throw err;
    console.log('Append file is done!');
});

fs.unlink(file, function (file, err) {
    if (err) throw err;
    console.log('File is deleted!');
});