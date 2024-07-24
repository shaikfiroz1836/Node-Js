import express, { json } from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import path from 'path'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.get('/',(req,res)=>{
    res.sendFile(path.join(process.cwd(),'/index.html'))
})

app.listen(3000,'127.0.0.1',(err)=>{
    console.log(chalk.bgGreen(`Server is running on http://127.0.0.1:3000/`))
})