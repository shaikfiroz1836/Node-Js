const fs = require('fs')
const path = require('path')
const http = require('http')
const dotenv = require('dotenv')

dotenv.config({path:'./config/.env'})

let port = process.env.PORT
let host_name = process.env.HOST_NAME

let server = http.createServer((req,res)=>{
    res.end("<h1>Siva Anna Topu</h1>")
})

server.listen(port,host_name,(err)=>{
    if(err) throw err
    console.log(`server is running on http://${host_name}:${port}`)
})