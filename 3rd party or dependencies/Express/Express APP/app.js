const express = require('express')

let app = express()

app.get('/',(req,res)=>{
    res.send("<h1>VIRAT KOHLI IS THE GOAT!</h1>")
})

app.listen(2000,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log("Server is running on port http://localhost:2000/")
})