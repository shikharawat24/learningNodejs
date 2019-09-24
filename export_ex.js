const getNote = require('./notes.js') // file name is define by ./
var vd = require('validator') // validator is a npm package

var note = getNote("This is an example to export a function from notes.js and call in app.js")
if (vd.contains("export")) {
    console.log("Find the match")
} else {
    console.log("No match")
}
console.log(note)
console.log(vd.isEmail("shi.shine24@gmail.com"))