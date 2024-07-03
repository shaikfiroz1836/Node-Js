// const fs = require('fs')
// const path = require('path')
// let data = fs.readFileSync(path.join(__dirname,'C:/Users/DELL/Desktop/Programming/Node js/Read&Write/data.txt'),'utf-8')
// fs.writeFileSync('Hyd.txt',data,'utf-8')
// console.log(data)


const fs = require('fs');
const path = require('path');
let data = fs.readFileSync(path.join('C:/Users/DELL/Desktop/Programming/Node js/Read&Write', 'data.txt'), 'utf-8');
fs.writeFileSync(path.join(__dirname, 'Hyd.txt'), data, 'utf-8');
console.log(data);