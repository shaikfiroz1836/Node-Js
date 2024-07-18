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
        return emp.id === emp_Data
    })
    console.log("Flag Value....",flag)
    if(flag){
        return resp.json({"Error":"Employee Alread exist!"})
    }
    employees.push(emp_Data)
     saveEmployees(employees);
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

/*
    usage:Update employee record based body data
    URL:http://127.0.0.1:8080/emp/update/1
    Method Type:PUT
    Required Fields: eid,ename,salary
*/
router.put("/update/:id",async(req,resp)=>{
    let emp_Id=req.params.id;
    let emp_Obj = req.body;
    let employees = await getEmployees()
    let emp=employees.find((emp)=>{
        return emp.id==emp_Id
    })
    if(!emp){
        return resp.status(401).json({"msg":"Employee Not Exists"})
    }
    let remaining_Employees=employees.filter((emp)=>{
        return emp.id !=emp_Id;
    })
    remaining_Employees.unshift(emp_Obj)
    saveEmployees(remaining_Employees)
    return resp.status(200).json({"msg":"Employee Object updated Successfully"})
})
/*
    usage:Delete employee record based id
    URL:http://127.0.0.1:8080/emp/delete/1
    Method Type:DELETE
    Required Fields: None
*/
router.delete("/delete/:id",async (req,resp)=>{
    //how to read url data - using req.params.id
    let emp_Id = req.params.id;
    console.log(emp_Id)
    let employees= await getEmployees()
    console.log(employees.length)

    let flag=employees.find((emp)=>{
        return emp.eid == emp_Id;
    })
    console.log(flag)
    if(!flag){
        return resp.status(401).json({"msg":"Employee Not Exist!"})
    }
    let remaining_Employees=employees.filter((emp)=>{
        return emp.eid !=emp_Id;
    })
    saveEmployees(remaining_Employees)
    return resp.status(200).json({"msg":"Employee record Deleted Succesfully!"})
})

let saveEmployees=(employees)=>{
    fs.writeFileSync('Data.json',JSON.stringify(employees))
}
let getEmployees=()=>{
    
    console.log("Inside getEmployees method")
    let employees=fs.readFileSync('Data.json','utf-8');
    return JSON.parse(employees);
}
export default router;