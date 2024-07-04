const http = require('http')
let server = http.createServer((req,res)=>{
    res.end("Virat Kohli - 59*(76)")
})
server.listen(3000,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log("Server is running on port 3000")
})