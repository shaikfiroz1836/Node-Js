import mongoose from "mongoose";
import {type} from 'os'

let emp_Schema=mongoose.Schema({
    eid:{type:Number, require:true},
    ename:{type:String,require:true},
    esal:{type:Number,require:true}
})
let Employee=mongoose.model("employee",emp_Schema)
export default Employee;