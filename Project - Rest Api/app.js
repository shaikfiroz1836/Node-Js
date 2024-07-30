import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import dotenv from 'dotenv'
import Router from './routes/Router.js'

let app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

dotenv.config({path:'./config/dev.env'})

let port = process.env.PORT
let host = process.env.HOST_NAME

app.get('/',(req,res)=>{
    res.send('<h1>Hello Good Morning,Had Your Breakfast!</h1>')
})

app.use('/router',Router);

app.listen(port,host,(err)=>{
    if(err) throw err
        console.log(chalk.green(`Server is running on http://${host}:${port}`))
})