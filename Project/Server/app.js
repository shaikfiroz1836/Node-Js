import express from 'express'
import dotenv from 'dotenv'
import chalk from 'chalk'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cors from 'cors'
import productRouter from './routing/productRouter.js'
let app = express()

app.use(morgan('dev'))
app.use(cors())

dotenv.config({path:"./config/.env"})

let port = process.env.PORT
let host = process.env.HOST_NAME
let db_url = process.env.MONGO_DB_LOCAL_URL

app.get('/',(req,res)=>{
    res.send("<h1>Server - Root Request</h1>")
})

app.use('/product',productRouter)

mongoose.connect(db_url)
    .then(()=>{
        console.log("Database Connected Successfully.....")
        app.listen(port,host,(err)=>{
            if(err) throw err
            console.log(chalk.green(`server is running on http://${host}:${port}/`))
        })
    })
    .catch((err)=>{
        process.exit(1);
    })