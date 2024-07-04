const fs = require('fs')
fs.readFile('users.json','utf-8',(res,data)=>{
    console.log(typeof data)
    let users = JSON.parse(data)
    console.log(typeof users)
    console.log(users)

    let male_users = []
    let female_users = []

    for(user of users){
        if(user.male === 'male'){
            male_users.push(user)
        }else{
            female_users.push(user)
        }
    }

    fs.writeFile('male-users.json',JSON.stringify(male_users),(err,data)=>{
        if(err) throw err
        console.log("Male users created succesfully!")
    })

    fs.writeFile('female-users.json',JSON.stringify(female_users),(err,data)=>{
        if(err) throw err
        console.log("Female users created succesfully!")
    })
})