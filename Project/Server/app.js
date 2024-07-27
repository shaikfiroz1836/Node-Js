import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import chalk from 'chalk'
import mongoose from 'mongoose'
import cors from 'cors'
import productRouter from './routes/productRouter.js'
let app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

dotenv.config({path:'./config/dev.env'})
let port = process.env.PORT 
let host=process.env.HOST_NAME
let db_url=process.env.MONGO_DB_LOCAL_URL
app.get("/",(req,resp)=>{
    resp.send("Server -Root Req")
})
app.use("/product",productRouter)
mongoose.connect(db_url)
.then(()=>{
    console.log("Mongo Db Connection Successfull!")
    app.listen(port,host,(err)=>{
        console.log(chalk.green(`Server is Running http://${host}:${port}/`))
        })
    })
.catch((err)=>{
    process.exit(1);
})