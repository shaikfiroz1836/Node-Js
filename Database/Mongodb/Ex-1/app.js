import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import chalk from 'chalk'
import mongoose from 'mongoose'
import empRouter from './Routing/empRouter.js'

let app = express()

dotenv.config({path:'./config/.env'})

let port = process.env.PORT
let host_name = process.env.HOST_NAME
let db_url = process.env.MONGO_LOCAL_URL

app.use('/emp',empRouter)
app.use(morgan('dev'))
app.get('/',(req,res)=>{
    res.status(200).json({"msg":"Root Request"})
})

mongoose.connect(db_url,{})
.then((res)=>{
    console.log("Connected to Database is Successful....")
})
.catch((err)=>{
    console.log("Connection Failed!")
})

app.listen(port,host_name,(err)=>{
    if(err) throw err
    console.log(chalk.bgBlue(`Server is running on http://${host_name}:${port}/`))
})