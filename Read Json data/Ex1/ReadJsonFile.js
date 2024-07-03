// const fs = require('fs')
// // const {json} = require('stream/consumers')
// fs.readFileSync('users.json','utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(typeof data)
//     let users = JSON.parse(data)
//     console.log(typeof users)

//     for(user of users){
//         console.log(user.id)
//     }
// })
const fs=require('fs')
const { json } = require('stream/consumers')
fs.readFile('users.json','utf-8',(err,data)=>{
   if(err) throw err 
   console.log(typeof data)
   let users = JSON.parse(data)
   console.log(typeof users)

   for( user of users){
    console.log(user)
   }
})

// const fs = require('fs');

// fs.readFile('users.json', 'utf-8', (err, data) => {
//    if (err) throw err;
   
//    console.log(typeof data); // Should log 'string'
   
//    let users;
//    try {
//        users = JSON.parse(data);
//    } catch (parseError) {
//        throw new Error('Error parsing JSON data');
//    }

//    console.log(typeof users); // Should log 'object'

//    for (let user of users) {
//        console.log(user.id);
//    }
// });
