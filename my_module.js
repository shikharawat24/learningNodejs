// Example of user defined module
// exports keyword to make properties and methods available outside the module file.
exports.myDateTime = function() {
    return Date()
}

exports.myFileData = function() {
    return 'The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content'
}