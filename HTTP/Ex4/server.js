const http = require('http')
let server = http.createServer((req,res)=>{
    res.end("<h1>Kerala is a region of great natural beauty. In the eastern part of the state, Anai Peak (8,842 feet [2,695 metres]), the highest peak of peninsular India, crowns the Western Ghats. Descending from the rocky highlands westward toward the coastal plain is a stretch of farmlands, with different crops cultivated at different elevations.</h1>")
})

server.listen(2000,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log("server is running on port 2000")
})