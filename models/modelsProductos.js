import {Schema, model} from 'mongoose'
 
const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    category: { type: String, required: false },
    description: { type: String, required: false },

  });

// const ProductModel = model("product", productSchema);

// export const Product = ProductModel;


export default model('product', productSchema);
