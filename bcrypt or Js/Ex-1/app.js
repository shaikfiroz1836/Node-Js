const express = require('express')
const path = require('path')
const dotenv = require('dotenv')

let app = express()
dotenv.config({ path:'./config/.env'})

let port = process.env.PORT
let host_name = process.env.HOST_NAME

app.get('/index',(req,res)=>{
    res.sendFile(path.join(process.cwd(),'web','index.html'))
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(process.cwd(),'web','about.html'))
})

app.listen(port,host_name,(err)=>{
    if(err) throw err
    console.log(`Server is running on http://${host_name}:${port}`)
})