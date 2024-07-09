const http = require('http')
const dotenv = require('dotenv')

dotenv.config({ path: './config/.env' })

let port = process.env.PORT
let host_name = process.env.HOST_NAME
// console.log(port)
// console.log(host_name)

let server = http.createServer((req,res)=>{
    res.end("HTTP Server")
})
server.listen(port,host_name,(err)=>{
    if(err) throw err
    console.log(`Server is running on http://${host_name} and ${port}`)
})