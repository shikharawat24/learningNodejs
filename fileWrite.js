const fs = require('fs')

// write into a file 'notes.txt'
fs.writeFileSync('notes.txt', newFunction())
function newFunction() {
    return 'Shikha Rawat';
}

// append into a file 'notes.txt'
fs.appendFileSync('notes.txt', appendText())
function appendText() {
    return '\n I am Node JS developer. Welcome to my world! \n A good programmer looks both ways before crossing a one-way street';
}
