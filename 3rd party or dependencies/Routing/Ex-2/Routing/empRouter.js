import express from 'express'
import fs from 'fs'

let router = express.Router()

router.get('/read',async(req,res)=>{
    let employees = await getEmployees()
    res.status(200).json(employees)
})
router.post('/update/:id',(req,res)=>{
    res.send('Post Request')
})
router.put('/create',(req,res)=>{
    res.send('Put Request')
})
router.delete('/delete/:id',(req,res)=>{
    res.send('Delete Request')
})

let saveEmployees=(employees)=>{}
let getEmployees=()=>{
    let employees = fs.readFileSync('data.json','utf-8')
    return JSON.parse(employees);
}

export default router;