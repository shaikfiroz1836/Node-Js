const fs = require('fs')
let data = (fs.readFileSync('data.txt','utf-8'))
console.log(data)