var createHTML = require('create-html')
var fs = require('fs')

var html = createHTML({ 
    title: 'example',
    css: 'example.css',
    body: '<p> Winter is the season </p>'}
)

html_file = '1.html'

const getHTML = function(){
    fs.writeFile(html_file, html, function(html_file, err){
        if (err) throw err;
        console.log('HTML file is written!')
    });
    return html_file;
}

// export getHTML function()
module.exports = getHTML