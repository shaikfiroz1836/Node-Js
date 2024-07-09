const fs = require('fs')
const path = require('path')
const http = require('http')
const dotenv = require('dotenv')

dotenv.config({path:'./config/.env'})

let port = process.env.PORT
let host_name = process.env.HOST_NAME

let server = http.createServer((req,res)=>{
    if(req.url === '/' || req.url === '/index'){
        fs.readFile((path.join(process.cwd(),'web','/index.html')),'utf-8',(err,data)=>{
            if(err) throw err
            res.end(data)
        })
    }
    else if(req.url === '/about'){
        fs.readFile((path.join(process.cwd(),'web','/about.html')),'utf-8',(err,data)=>{
            if(err) throw err
            res.end(data)
        })
    }
    else if(req.url === '/contact'){
        fs.readFile((path.join(process.cwd(),'web','/contact.html')),'utf-8',(err,data)=>{
            if(err) throw err
            res.end(data)
        })
    }
})

server.listen(port,host_name,(err)=>{
    if(err) throw err
    console.log(`server is running on http://${host_name}:${port}`)
})