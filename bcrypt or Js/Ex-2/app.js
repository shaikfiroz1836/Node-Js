import bcrypt from'bcrypt'

let user = {
    name:'Rahul',
    email:'Rahul123@gmail.com',
    cc:'1234 1234 1234 1111',
    cvv:'121',
    password:'Prostack123'
}

console.log(user)

let salt = bcrypt.genSaltSync(10)

let new_cc = bcrypt.hashSync(user.cc,salt)
let new_password = bcrypt.hashSync(user.password,salt)

console.log(user.cc)
console.log(new_cc)

user = {...user,cc:new_cc,password:new_password}
console.log(user)