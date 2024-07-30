import express from 'express'

let router = express.Router();

router.get('/read',(req,res)=>{
    res.status(200).json({"msg":"Read Request"})
})

export default router;