import express from 'express'
import UserRouter from './Routing/UserRouter.js'
import ProductRouter from './Routing/ProductRouter.js'
import morgan from 'morgan'

let app = express()

app.use('/user',UserRouter)
app.use('/product',ProductRouter)

app.use(morgan('combined'))

app.listen(9999,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log('server is running on port 9999')
})