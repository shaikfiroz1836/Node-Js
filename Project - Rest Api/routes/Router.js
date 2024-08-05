import express from 'express';
import fs from 'fs';

let router = express.Router();

router.get('/read', (req, res) => {
    let emp = getEmployees();
    res.status(200).json(emp);
});

router.post('/create', async (req, res) => {
    let emp_data = req.body;
    let employees = await getEmployees();
    
    let flag = employees.find((emp) => {
        return emp.eid === emp_data.eid;
    });

    if (flag) {
        return res.json({"msg": "Employee Already Exists!"});
    }

    employees.push(emp_data);
    await saveEmployees(employees);
    return res.status(200).json({"Msg": "Employee created successfully"});
});

// router.put('/update/:id',async(req,res)=>{
//     let emp_id = req.params.id;
//     let emp_data = req.body;
//     let employees =await getEmployees();

//     let flag = employees.findIndex((emp)=>{
//         console.log(emp.id)
//         console.log(emp_id)
//         return emp.id === emp_id;
//     })
//     if(!flag){
//         return res.status(401).json({"msg":"Employee Not Exists With Id!"})
//     }
//     else{
//         employees[emp_id] = { ...employees[emp_id], ...emp_data };
//         await saveEmployees(employees)
//     return res.status(200).json({"msg":"Employee Updated Successfully"})
//     }
// })

router.put("/update/:id",async(req,resp)=>{
    let emp_Id=req.params.id;
    let emp_Obj = req.body;
    let employees = await getEmployees()
    let emp=employees.find((emp)=>{
        return emp.eid==emp_Id
    })
    if(!emp){
        return resp.status(401).json({"msg":"Employee Not Exists"})
    }
    let remaining_Employees=employees.filter((emp)=>{
        return emp.eid !=emp_Id;
    })
    remaining_Employees.unshift(emp_Obj)
    saveEmployees(remaining_Employees)
    return resp.status(200).json({"msg":"Employee Object updated Successfully"})
})


let getEmployees = () => {
    let employees = fs.readFileSync('data.json', 'utf-8');
    return JSON.parse(employees);
};
let saveEmployees = (employees) => {
    fs.writeFileSync('data.json', JSON.stringify(employees));
};

export default router;
