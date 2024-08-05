import express from 'express'
import fs from 'fs'

let router = express.Router();

router.get('/read',async(req,res)=>{
    // res.status(200).json({"msg":"Read Request"})
    let emp = await getEmployees();
    res.status(200).json(emp);
})

// router.post('/create',(req,res)=>{
//     let data = []
//     let {body} = req;
//     if(!body.name){
//        return res.status(400).json({"msg":"Name is required"})
//     }
//     return res.status(200).json({"msg":"Data Created Succesfully..."})

// })

router.post('/create',async(req,res)=>{
    let emp_data = req.body;
    let employees = await getEmployees();
    let flag = employees.find((emp)=>{
        emp.eid===emp_data.eid
    })
    if(flag){
        return res.json({"msg":"Employee Already Exists!"})
    }
    employees.push(emp_data)
    await saveEmployees(employees)
    return res.status(200).json({"Msg":"Employee created successfully!"})
})
let getEmployees=()=>{
    let employees = fs.readFileSync('data.json','utf-8')
    return JSON.parse(employees)
}
let saveEmployees=()=>{
    fs.writeFileSync('data_stored.json',JSON.stringify(employees))
}

export default router;