import express from 'express';
import Product from '../model/product.js'
let router = express.Router();

router.get('/', (req, res) => {
    res.json({"msg": "Product - Root Request"});
});

router.get();

router.post();

router.put();

router.delete();

export default router;
