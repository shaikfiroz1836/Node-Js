import express from "express";
import EmployeeModel from '../Model/employee.js'
let router=express.Router();

//URL:localhost:8080/emp/
//Method:GET
router.get("/",(req,resp)=>{

    resp.status(200).json({"msg":"Employee Root Request"})
})

//URL:localhost:8080/emp/read
//GET:GET
router.get("/read", async (req,resp)=>{
    try{
        let employees= await EmployeeModel.find();
        return resp.status(200).json(employees);
    }
    catch(err){
        return resp.status(401).json({"error message":err.message})
    }
   
})
/*
    Usage: create new employee
    URL:http://127.0.0.1:8080/emp/create
    Method:POST
    Req Fields:eid,ename,esal
*/
router.post("/create",async (req,resp)=>{
    try{
        let emp = req.body;
        let Employee=await EmployeeModel.findOne({id:emp.id})
        console.log(Employee)
        if(Employee){
            return resp.status(401).json({"msg":"Employee already exits"})
        }
        Employee=new EmployeeModel(emp)
        console.log(Employee)
        await Employee.save();
        return resp.status(200).json({"msg":"Employee created Successufully"})

    }catch(err){
        return resp.status(401).json({"error message":err.message})
    }
       
})
export default router;