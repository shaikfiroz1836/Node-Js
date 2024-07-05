const http = require('http')
let server = http.createServer((req,res)=>{


    res.end("<h1>Hello! Good Morning</h1>")
})

server.listen(3000,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`Server is running on port http://localhost:3000/`)
})