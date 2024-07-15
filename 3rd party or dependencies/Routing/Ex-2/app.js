import express from 'express'
import empRouter from './Routing/empRouter.js'
import morgan from 'morgan'
import chalk from 'chalk'
import dotenv from 'dotenv'

dotenv.config({path:'./config/.env'})

let port = process.env.PORT
let host_name = process.env.HOST_NAME

let app = express()

app.use(morgan('tiny'))

app.get('/emp',(req,res)=>{
    res.json({"msg":"Root Request"})
})


app.use('emp',empRouter)


app.listen(port,host_name,(err)=>{
    if(err) throw err
    console.log(chalk.bgBlue(`Server is running on port http://${host_name}:${port}`))
})