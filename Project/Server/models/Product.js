import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    info: { type: String, required: true }
});

const Product = mongoose.model("Product", productSchema);

export default Product;