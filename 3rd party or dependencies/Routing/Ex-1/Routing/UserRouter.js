import express from 'express'

let router = express.Router()

router.get('/read',(req,res)=>{
    res.send('User Router - Get Request')
})

router.post('/create',(req,res)=>{
    res.send('User Router - Post Request')
})

export default router;