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
    return res.status(200).json({"Msg": "Employee created successfully!"});
});

let getEmployees = () => {
    let employees = fs.readFileSync('data.json', 'utf-8');
    return JSON.parse(employees);
};
let saveEmployees = (employees) => {
    fs.writeFileSync('data.json', JSON.stringify(employees));
};

export default router;
