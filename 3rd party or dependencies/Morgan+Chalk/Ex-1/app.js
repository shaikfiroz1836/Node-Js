// const express = require('express')
// const path = require('path')
// const morgan = require('morgan')
// const dotenv = require('dotenv')

import express from 'express'
import path from 'path'
import morgan from 'morgan'
import dotenv from 'dotenv'
import chalk from 'chalk'

let app = express()

dotenv.config({path: './config/.env'})

app.use(morgan('combined'))

let port = process.env.PORT
let host_name = process.env.HOST_NAME

app.get('/',(req,res)=>{
    res.sendFile(path.join(process.cwd(),"web",'index.html'))
})
app.get('/index',(req,res)=>{
    res.sendFile(path.join(process.cwd(),"web",'index.html'))
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(process.cwd(),"web",'about.html'))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(process.cwd(),"web",'contact.html'))
})
app.listen(port,host_name,(err)=>{
    if(err) throw err
    console.log(chalk.bgMagenta(`Server is running on http://${host_name}:${port}`))
})