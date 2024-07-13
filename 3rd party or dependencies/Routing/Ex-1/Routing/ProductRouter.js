import express from 'express'

let router = express.Router()

router.put('/update',(req,res)=>{
    res.send('Product Router - Put Request')
})

router.delete('/delete',(req,res)=>{
    res.send('Product Router - Delete Request')
})

export default router;