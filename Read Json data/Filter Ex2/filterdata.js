const fs = require('fs')
const { json } = require('stream/consumers')
fs.readFile("users.json",'utf-8',(err,data)=>{
    if(err) throw err
    console.log(typeof data)
    let users = JSON.parse(data)
    console.log(typeof users)
    console.log(users)

    let maleusers = []
    let femaleusers = []

    for(user of users){
        if(user.gender == "male"){
            maleusers.push(user)
        }else{
            femaleusers.push(user)
        }

        
    }
    fs.writeFile('male.json',JSON.stringify(maleusers),(err,res)=>{
        if(err) throw err
        console.log("Male users created succesfully")
    })

    fs.writeFile('female.json',JSON.stringify(femaleusers),(err,res)=>{
        if(err) throw err
        console.log("Female users created succesfully")
    })
    
})