import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config({path:'./congig/.env'})

let user ={
    name:'Rahul',
    cid:'1',
    password:'ILOVEINDIA'
}

let S_KEY = process.env.SECRET_KEY

let token = jwt.sign(user,'S_KEY')
console.log(token)

let user_1 = jwt.verify(token,'S_KEY')
console.log(user_1)