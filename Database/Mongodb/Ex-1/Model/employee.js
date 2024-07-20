import mongoose from "mongoose";
import {type} from 'os'

let emp_Schema=mongoose.Schema({
    id:{type:Number, require:true},
    name:{type:String,require:true},
    sal:{type:Number,require:true}
})
let Employee=mongoose.model("employee",emp_Schema)
export default Employee;