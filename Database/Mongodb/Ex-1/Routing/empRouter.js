import express from 'express'
import Employee from '../Model/employee.js'
let router = express.Router()

router.get('/read',async(req,res)=>{
    let employees = await Employee.find()
    res.status(200).json(employees)
})

export default router;