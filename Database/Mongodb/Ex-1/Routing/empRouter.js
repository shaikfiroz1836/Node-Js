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
    let emp = req.body
    console.log(emp)
    let Employee = EmployeeModel.findOne({eid:emp.eid})
    console.log(Employee)
    if(Employee){
        return res.status(200).json({"msg":"Employee Already Exists"})
    }
    employee = new EmployeeModel(emp)
    employee.save()
    
})


export default router;