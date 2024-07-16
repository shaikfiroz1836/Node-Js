import express from 'express'
import fs from 'fs'
let router = express.Router()
/*
    usage:  create new emp
    URL:  http://127.0.0.1:8080/emp/create/
    Method:POST
    Access Type:Public
    Req Fields:eid,ename,salary
*/
router.post("/create",async(req,resp)=>{
    let emp_Data=req.body;
    console.log(emp_Data);
    let employees=await getEmployees();

    let flag =employees.find((emp)=>{
        return emp.eid === emp_Data.eid
    })
    console.log("Flag Value....",flag)
    if(flag){
        return resp.json({"Error":"Employee Alread exist!"})
    }
    employees.push(emp_Data)
    await saveEmployees(employees);
    return resp.status(200).json({"msg":"new Employee Object created successfully!"})
})
/*
    usage:  Get All employee - Reat Operation
    URL:  http://127.0.0.1:8080/emp/read/
    Method:GET
    Access Type:Public
    Req Fields:None
*/
router.get("/read",async(req,resp)=>{
    let employees= await getEmployees()
    //console.log("Type of:",typeof employees)
    resp.status(200).json(employees);
})
router.put("/update/:id",(req,resp)=>{})
router.delete("/delete/:id",(req,resp)=>{})

let saveEmployees=(employees)=>{
    fs.writeFileSync('data.json',JSON.stringify(employees))
}
let getEmployees=()=>{
    
    console.log("Inside getEmployees method")
    let employees=fs.readFileSync('data.json','utf-8');
    return JSON.parse(employees);
}
export default router;