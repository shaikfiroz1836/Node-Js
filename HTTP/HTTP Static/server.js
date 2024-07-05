const http = require('http')
const fs = require('fs')
let server = http.createServer((req,res)=>{

    fs.readFile('index.html','utf-8',(err,data)=>{
        if(err) throw err
        res.end(data)
        console.log(req.url)
    })

    
})

server.listen(3000,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`Server is running on port http://localhost:3000/`)
})