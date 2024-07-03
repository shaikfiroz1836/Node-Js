// const fs = require('fs')
// const path = require('path')
// console.log(path.join(__dirname))
// let data = fs.readFileSync(path.join(__dirname,'C:/Users/DELL/Desktop/Programming/Node js/Read&Write/data.txt'),'utf-8')
// fs.writeFileSync('Hyd.txt',data,'utf-8')
// console.log(data)


const fs = require('fs');
const path = require('path');

// Construct the full path to the data.txt file
const dataFilePath = path.join('C:/Users/DELL/Desktop/Programming/Node js/Read&Write', 'data.txt');

// Read the content of the data.txt file
let data = fs.readFileSync(dataFilePath, 'utf-8');

// Write the content to Hyd.txt in the current directory
fs.writeFileSync(path.join(__dirname, 'Hyd.txt'), data, 'utf-8');

// Log the content to the console
console.log(data);
