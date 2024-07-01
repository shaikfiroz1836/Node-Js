function step1(value,err){
    return new Promise((resolve,reject)=>{
        if(!err){
            resolve(value+10)
        }else{reject("Something went wrong at step1")}
    })
}
function step2(value,err){
    return new Promise((resolve,reject)=>{
        if(!err){
            resolve(value+10)
        }else{reject("Something went wrong at step2")}
    })
}
function step3(value,err){
    return new Promise((resolve,reject)=>{
        if(!err){
            resolve(value+10)
        }else{reject("Something went wrong at step3")}
    })
}

step1(10,false)
.then((result1)=>step2(result1,false))
.then((result2)=>step3(result2,false))
.then((result3)=>console.log(result3))
.catch((err)=>(console.log("Error")))