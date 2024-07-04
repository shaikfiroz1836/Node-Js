const http = require('http')
let server = http.createServer((req,res)=>{
    res.end("<H1>Jai Hind</H1>")
})
server.listen(1234,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log("server is running succesfully")
})