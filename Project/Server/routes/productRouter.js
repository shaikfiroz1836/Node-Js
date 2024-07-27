import express from "express";
import Product from '../model/Product.js'
let router= express.Router();

/*
    url:http://127.0.0.1:8080/product/
*/
router.get("/",(req,resp)=>{
    resp.json({"msg":"Product Root Request"})
});
/*
    USAGE: get all products
    URL: http://127.0.0.1:8080/product/read
    MEthod:GET
    Fields:none
    Access Type:Public
*/
 router.get("/read",async(req,resp)=>{
    try{
       let products  = await Product.find()
       return resp.status(200).json(products)
    }
    catch(err){
        return resp.status(401).json({"msg":err.message})
    }
 });
//  router.post('/create',async(req,res)=>{
//     try{

//         let abc = req.body;
//     let ProductDT=await Product.findOne({name:abc.name})
//     if(ProductDT){
//         return res.status(400).json({"msg":"Product already exists"})
//     }
//     ProductDT=await new Product(abc)
//     await ProductDT.save()
//     return res.status(200).json({"msg":"Product Created Successfully..."})
//     }
//     catch{
//         return res.status(401).json({"msg":"Error Occured while creating product"})
//     }
    
//  });
router.post('/create',async(req,resp)=>{
    try{
        let emp_body=req.body
        let products=await Product.findOne({name:emp_body.name})
        // console.log(products)
        if(products){
          return resp.status(200).json({"msg":"product already exist"})
        }
       //  await products.push(emp_body)
       products=await new Product(emp_body)
        products.save();
 
        return resp.status(300).json({"msg":"Product created successfully"})
    }
    catch(err){
           console.log(err.mesaage)
           process.exit(1)
}
 })
 router.put('/update/:name',async(req,res)=>{
    try{
        let Pname=req.params.name
        let body=req.body
        let product=await Product.findOneAndUpdate({name:Pname})
        if(product){
            product.update(body)
            console.log("Product Updated Succesfully...")
        }
    }
    catch{
        return res.status(401).json({"msg":"Error Occured while updating product"})
    }
 });
 router.put('/:id',async(req,res)=>{
    try{
        let P_id=req.params.id
        let product = Product.findById(P_id)
        if(!product){
            return res.status(400).json({"msg":"Product not found"})
        }
        product.update(req.body)
        console.log("Product Updated Successfully...")
    }
    catch{
        return res.status(401).json({"msg":"Error Occured while updating product"})
    }
 });
 router.delete('/delete/:id',async(req,res)=>{
    try{
        let id=req.params.id
        let product=await Product.findByIdAndRemove(id)
        if(product){
            console.log("Product Deleted Succesfully...")
        }
    }
    catch{
        return res.status(401).json({"msg":"Error Occured while deleting product"})
    }
 });

export default router;