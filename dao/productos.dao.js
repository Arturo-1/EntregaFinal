import ProductsModel from '../models/modelsProductos.js'

const getAllProductos = async (req, res) => {
    const ProductosDB = []
    //console.log(req.user)
    const productos = await ProductsModel.find().lean()
    for (let i = 0; i < productos.length; i++)
    {
      ProductosDB.push({
        id: productos[i]._id.toString(),
        name: productos[i].name,
        price: productos[i].price,
        thumbnail: productos[i].thumbnail,
        category: productos[i].category,
        description: productos[i].description
      })
    }
    return ProductosDB
    //res.render("productosList", {ProductosDB:productosArray} );
  }


  const createProduct = async (productToCreate) => {
    const  createProduct = await ProductsModel.create(productToCreate);
    return createProduct;
  }

  const getProductobyID = async (ProductoId) => {
    // const ProductoId = req.ProductoId
    const product = await ProductsModel.find({_id:ProductoId}).lean();
    return product
    //res.render("productosList", {ProductosDB:productosArray} );
  }

  const deleteProduct = async (ProductoId) => {
    const productDelete = await ProductsModel.deleteOne({ _id: ProductoId });
    console.log("data producto dao:", productDelete)
  };

  const updateProduct = async (updateData, ProductId) => {
    const updatedProduct = await ProductsModel.updateOne(
      { _id: ProductId },
      updateData
    );
  
    return updatedProduct;
  };


  export default {
    getAllProductos,
    createProduct,
    getProductobyID,
    deleteProduct,
    updateProduct

  }