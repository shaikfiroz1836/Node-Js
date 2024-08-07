import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import dotenv from 'dotenv'

let app = express()

dotenv.config({path:'./config/dev.env'})

app.use(morgan('dev'))

let port = process.env.PORT
let host = process.env.HOST_NAME

app.get('/',(req,res)=>{
    res.send('<h1>Good Morning</h1>')
})

app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(chalk.green(`Server is running on http://${host}:${port}/`))
})