const fs = require('fs')
let data = fs.readFileSync('emp.txt','utf-8')
fs.writeFileSync('data.txt',data,'utf-8')
console.log(data)