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
/*
router.get();
router.post();
router.put();
router.delete(); */

export default router;