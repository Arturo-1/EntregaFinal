import ProductsModel from '../models/modelsProductos.js'

const getAllProductos = async (req,res) => {
    let ProductosDB = []
    let dataProduct = []
    //console.log(req.user)
    const productos = await ProductsModel.find().lean();
    const Categorias = await ProductsModel.distinct("category");
    // console.log("opciones categorias",Categorias)
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
    dataProduct=[{
      "Productos": ProductosDB,
      "Categorias": Categorias
    }]
    
    return dataProduct
    //res.render("productosList", {ProductosDB:productosArray} );
  }

  const getProductByFilters = async (filters) => {
    let ProductosDB = []
    let dataProduct = []
    //console.log(req.user)
    const productos = await ProductsModel.find(filters).lean();
    const Categorias = await ProductsModel.distinct("category");
    // console.log("opciones categorias",Categorias)
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
    dataProduct=[{
      "Productos": ProductosDB,
      "Categorias": Categorias
    }]
    console.log("data dao filters:",dataProduct)
    
    return dataProduct
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
    updateProduct,
    getProductByFilters

  }