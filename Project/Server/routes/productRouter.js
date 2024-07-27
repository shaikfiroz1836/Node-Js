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


router.put('/update/:id', async (req, res) => {
    try {
        
        let P_id = req.params.id;
        let product = await Product.findById(P_id);
        
        if (!product) {
            return res.status(400).json({ "msg": "Product not found" });
        }

        let P_Data = req.body;
        await Product.findByIdAndUpdate(P_id, {
            $set: {
                name: P_Data.name,
                image: P_Data.image,
                price: P_Data.price,
                qty: P_Data.qty,
                info: P_Data.info
            }
        });

        return res.status(200).json({ "msg": "Product updated successfully" });
    } catch (error) {
        return res.status(500).json({ "msg": "Error occurred while updating product items", "error": error.message });
    }
});




router.delete("/delete/:id", async(req,resp)=>{
    try{    
        let pId=req.params.id;
        let product=await Product.findById(pId)
        if(!product){
            return resp.status(401).json({"msg":"Product Not Exists"})
        }
        await Product.findByIdAndDelete(pId)
        return resp.status(200).json({"msg":"Product Deleted Successfully"})
    }
    catch(err){
        return resp.status(401).json({'err':err.message})
    }
});
export default router;