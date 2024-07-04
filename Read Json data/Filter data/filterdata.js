// const fs = require('fs')
// fs.readFileSync('users.json','utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(data)
//     console.log(typeof data)
//     let users = JSON.parse(data)
//     console.log(typeof users)

//     let maleusers = []
//     let femaleusers = []

//     for(user of users){
//         if(user.gender === 'male') {
//             maleusers.push(user)
//         } else{
//             femaleusers.push(user)
//         }

//     }
//     fs.writeFileSync('male.json',JSON.stringify(maleusers),(err)=>{
//         if(err) throw err
//         console.log("male records done")
//     })
//         fs.writeFileSync('female.json',JSON.stringify(femaleusers),(err)=>{
//             if(err) throw err
//             console.log("female records done")
//         })

// })

const fs=require('fs')
fs.readFile('users.json','utf-8',(err,data)=>{
    if(err) throw err 
    //console.log(typeof data)
    let users=JSON.parse(data)
    //console.log(typeof users)
    let male_Users=[]
    let female_Users=[]
    for(user of users){
        if(user.gender==="Male"){
            male_Users.push(user)
        }
        else{
            female_Users.push(user)
        }
    }
    //console.log(male_Users.length)
    //console.log(female_Users.length)
    fs.writeFile('male.json',JSON.stringify(male_Users),(err)=>{
        if(err) throw err 
        console.log("Male Useres written successfully")
    })
    fs.writeFile('female.json',JSON.stringify(female_Users),(err)=>{
        if(err) throw err 
        console.log("Female Users - Written successfully!") 
    })
})