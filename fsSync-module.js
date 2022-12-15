//ways of requiere modules
//const js2 = require('js')
//fs.readFileSync

//These examples are SYNC
const {readFileSync, fstat, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first,second)

// it will overwrite the cotent of the fie if exists. If not, it will create a new one
writeFileSync('./content/result-sync.txt',
    `Here is the result: ${first},${second}`,{flag:'a'})

