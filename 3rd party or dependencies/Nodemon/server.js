const http = require('http')
const dotenv = require('dotenv')

dotenv.config({ path: './config/.env' })

let port = process.env.PORT
let host_name = process.env.HOST_NAME
console.log(port)
console.log(host_name)