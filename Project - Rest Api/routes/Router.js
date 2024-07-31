import express from 'express'

let router = express.Router();

router.get('/read',(req,res)=>{
    res.status(200).json({"msg":"Read Request"})
})

router.post('/create',(req,res)=>{
    let data = []
    let {body} = req;
    if(!body.name){
       return res.status(400).json({"msg":"Name is required"})
    }
    return res.status(200).json({"msg":"Data Created Succesfully..."})

})

export default router;