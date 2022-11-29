import productosDao from "../dao/productos.dao.js"

const getAllProductos = async() =>{
    const data = await productosDao.getAllProductos()
    return data
}

const getProductByFilters = async(filters) =>{
  const data = await productosDao.getProductByFilters(filters)
  console.log("valid info service filter:",data);
  return data
}

const createProduct = async ({name, price, thumbnail, category, description}) => {
    // if(typeof name !== "string") throw "el nombre no es tipo string";
    // // if(typeof price !== "number") throw "el precio no es tipo number";
    // if(typeof thumbnail !== "string") throw "la miniatura no es tipo string";
    // if(typeof category !== "string") throw "la categoria no es tipo string";
    // if(typeof description !== "string") throw "la descripcion no es tipo string";

    const createProduct = await productosDao.createProduct({
        name, 
        price, 
        thumbnail, 
        category, 
        description
    });
    return createProduct;
};

const getProductobyID = async(ProductoId) =>{
    // if(typeof ProductoId !== "string") throw " Producto ID no es tipo string";
    const data = await productosDao.getProductobyID(ProductoId)

    if (!data) throw "Producto no existe";

    return data
}

const deleteProduct = async (ProductoId) => {
  console.log("data que viene service:",ProductoId)
    // if (typeof ProductoId !== "string") throw "el id de producto no es string";
    await productosDao.deleteProduct(ProductoId);
  };

const updateProduct = async ({ name, price, thumbnail, category, description}, ProductId) => {
  
    if(typeof name !== "string") throw "el nombre no es tipo string";
    if(typeof price !== "number") throw "el precio no es tipo number";
    if(typeof thumbnail !== "string") throw "la miniatura no es tipo string";
    if(typeof category !== "string") throw "la categoria no es tipo string";
    if(typeof description !== "string") throw "la descripcion no es tipo string";
    // if(typeof ProductId !== "string") throw "Product ID must be string";
  
    const updatedProduct = await productosDao.updateProduct(
      { name, price, thumbnail, category, description},
      ProductId
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