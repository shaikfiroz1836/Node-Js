const path = require('path')
const fs = require('fs')
let data = fs.readFileSync(path.join(__dirname,"Emp","data.txt"),'utf-8')
console.log(data)