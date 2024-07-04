const http = require('http')
let server = http.createServer((req,res)=>{
    res.end("<H1>Virat Kohli</H1>")
})

server.listen(5000,"127.0.0.1",(err)=>{
    if(err) throw err
    console.log("Server is running on port 5000")
})