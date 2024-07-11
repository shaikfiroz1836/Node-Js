const express = require('express')
const path = require('path')
const morgan = require('morgan')
const dotenv = require('dotenv')
const chalk = require('chalk')

let app = express()

dotenv.config({path: './config/.env'})

app.use(morgan('combined'))

let port = process.env.PORT
let host_name = process.env.HOST_NAME

app.get('/',(req,res)=>{
    res.sendFile(path.join(process.cwd(),"web",'index.html'))
})
app.get('/index',(req,res)=>{
    res.sendFile(path.join(process.cwd(),"web",'index.html'))
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(process.cwd(),"web",'about.html'))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(process.cwd(),"web",'contact.html'))
})
app.listen(port,host_name,(err)=>{
    if(err) throw err
    console.log(chalk.bgBlue(`Server is running on http://${host_name}:${port}`))
})