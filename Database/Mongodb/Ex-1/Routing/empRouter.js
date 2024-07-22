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
        let Employee=await EmployeeModel.findOne({eid:emp.eid})
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
/*
    Usage: update new employee
    URL:http://127.0.0.1:8080/emp/update/1234
    Method:PUT
    Req Fields:eid,ename,esal
*/
router.put("/update/:id",async(req,resp)=>{
    try{
            let emp_Id = req.params.id;
            console.log(emp_Id)
            let emp=req.body;
            console.log(emp)
            let Emplooye=await EmployeeModel.findOne({"eid":emp_Id})
            console.log(Emplooye)
            if(!Emplooye){
                    return resp.status(401).json({"msg":"Employee Not Exits"})
            }
            await EmployeeModel.findByIdAndUpdate(Emplooye._id,{$set:{ename:emp.ename,esal:emp.esal}});
            return resp.status(200).json({"msg":"Employee Updated Successfully"})
    }
    catch(err){
        return resp.status(401).json({"err":err.message})
    }
})
/*
    usage:Delete employee Data
    URL:http://127.0.0.1:8080/emp/delete/10
    Method:DELETE
    Access Tupe:Public
    Req Fields: None
*/
router.delete("/delete/:id",async(req,resp)=>{
    try{
      let emp_Id = req.params.id;
      console.log(emp_Id)
      let Employee  =await EmployeeModel.findOne({eid:emp_Id})
      console.log(Employee)
      if(!Employee){
        return resp.status(401).json({"msg":"Employee Not Exists"})
      }
      await EmployeeModel.findByIdAndDelete(Employee._id);
      return resp.status(200).json({"msg":"Employee Document Deleted Sucessfully"})
    }
    catch(err){
        return resp.status(401).json({"err":err.message})
    }
})
export default router;