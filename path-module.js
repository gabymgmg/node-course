const path = require('path')
//path separator
console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath)

//name of the file of the the path you're giving it
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content', 'subfolder', 'text.txt') 
console.log(absolute)