import logger from '../src/winstonconfig.js';
import productosService from '../service/productos.service.js'
import { WSresponse } from '../libs/WSresponse.js'


const getAllProductos = async(req, res)=>{
    const {url , method} = req
    try{
        const response = await productosService.getAllProductos()

        res.render("productosList", {ProductosDB:response} );

    }
    catch(err){
        logger.error(`Ruta ${method}${url}:  ${err}`);
    }
}

const createProduct = async(req, res, next)=>{
    // const {url , method} = req
    try{
        console.log("req", req)
        const response = await productosService.createProduct(req.body);

        console.log("valuidacion response:", response );
        location.reload("productosList", {ProductosDB:response} );
    
        // res.json(new WSresponse(response, "success, producto creado!!"))

    }
    catch(err){
        res.status(400).json( new WSresponse(null, err, true, 400));
        // logger.error(`Ruta ${method}${url}:  ${err}`);
    }
}

const getProductobyID = async(req, res)=>{
    // const {url , method} = req
    try{
        const response = await productosService.getProductobyID(req.params.ProductoId);

        console.log("validate response:", response);
        res.render("productos", {ProductosDB:response} );


        // res.json(new WSresponse(response, "Success!!"))
    }
    catch(err){
        res.json( new WSresponse(null, err, true, 460));
        // logger.error(`Ruta ${method}${url}:  ${err}`);
    }
}

const deleteProduct = async (req, res) => {
  console.log("data valid 111:", req.params.ProductoId)
    try {
      await productosService.deleteProduct(req.params.ProductoId);
      console.log("data delete controller:", req.params.ProductoId);
  
      res.json(new WSresponse(null, "Producto Eliminado"));
    } catch (err) {
      console.log(err);
      res.json(new WSresponse(null, err, true, 320));
    }
  };

  const updateProduct = async (req, res) => {
    try {
      const response = await productosService.updateProduct(
        req.body,
        req.params.ProductoId
      );
  
      res.json(new WSresponse(response, "Product Actualizado"));
    } catch (err) {
      console.log(err);
      res.json(new WSresponse(null, err, true, 489));
    }
  };

export default {
    getAllProductos,
    createProduct,
    getProductobyID,
    deleteProduct,
    updateProduct
}