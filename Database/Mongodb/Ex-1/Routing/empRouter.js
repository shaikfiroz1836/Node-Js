import express from 'express'
import employee from '../Model/employee.js'
let router = express.Router()

router.get('/read',(req,res)=>{
    let employees = Employee.find([])
    res.status(200).json(employees)
})

export default router;