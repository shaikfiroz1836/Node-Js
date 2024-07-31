import express from 'express'

let router = express.Router();

router.get('/read',(req,res)=>{
    res.status(200).json({"msg":"Read Request"})
})

router.post('/create',(req,res)=>{
    let data = []
    data.push(req.body)
    res.status(200).json({"msg":"Data Created Succesfully..."})
    res.status(200).json(data)
})

export default router;