const fs = require('fs')
const path = require('path')
const http = require('http')

let server = http.createServer((req,res)=>{
    if(req.url === '/' || req.url === '/index'){
        fs.readFile(path.join(process.cwd(),'Web','index.html'),'utf-8',(err,data)=>{
            if(err) throw err
            res.end(data)
        })
    }
    else if(req.url === '/home'){
        fs.readFile(path.join(process.cwd(),'Web','home.html'),'utf-8',(err,data)=>{
            if(err) throw err
            res.end(data)
        }
    )}
    else if(req.url === '/about'){
        fs.readFile(path.join(process.cwd(),'Web','about.html'),'utf-8',(err,data)=>{
            if(err) throw err
            res.end(data)
        }
    )}
    else{
        console.log("Page Not Found")
    }

})

server.listen(5000,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`server is runnimg on http://localhost:5000/`)
})