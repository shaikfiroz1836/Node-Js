import express from 'express'
import fs from 'fs'

let router = express.Router()

router.get('/read',async(req,res)=>{
    let employees = await getEmployees()
    res.status(200).json(employees)
})
router.post('/create',async(req,res)=>{
    let emp_Data = req.body
    console.log(emp_Data)
    let employees = await getEmployees()
    let flag = employees.find((emp)=>{
        return emp.id == emp_Data.id
    })
    console.log("Flag value....".flag)
    if(flag){
        return res.json({"Error":"Employees already exists"})
    }
    employees.push(emp_Data)
    await saveEmployees(employees)
    return res.status(200).json({"msg":"New Employee Object Created Successfully"})
})
router.put('/update',(req,res)=>{
    
    res.json({"msg":"Good Morning"})

})
router.delete('/delete/:id',(req,res)=>{
    res.send('Delete Request')
})

let saveEmployees=()=>{
    let employees = fs.writeFileSync('data.json','utf-8')
    return JSON.stringify(employees)
}
let getEmployees=()=>{
    let employees = fs.readFileSync('data.json','utf-8')
    return JSON.parse(employees);
}

export default router;