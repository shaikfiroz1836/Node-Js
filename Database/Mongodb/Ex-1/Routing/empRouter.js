import express from 'express'
import Employee from '../Model/employee.js'
let router = express.Router()

router.get('/read',async(req,res)=>{
    try{
        let employees = await Employee.find()
    res.status(200).json(employees)
    }catch{
        res.status(500).json({message:'Internal Server Error'})
    }
    
})

router.post('/create',(req,res)=>{
    
})


export default router;