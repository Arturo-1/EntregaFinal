import logger from '../src/winstonconfig.js';
import productosService from '../service/productos.service.js'
import { WSresponse } from '../libs/WSresponse.js'

const getAllProductos = async(req, res)=>{
    const {url , method} = req
    try{  
        const response = await productosService.getAllProductos()
        res.render("productosList", {ProductosDB:response[0].Productos, Categorias:response[0].Categorias} );
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

        console.log("validacion response create product:", response );
        // location.reload("productosList", {ProductosDB:response} );
        res.json(new WSresponse(response, "success, producto creado!!"))
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

  const getProductByFilters = async (req, res) => {
    try {
      const {id,categoria} = req.params
      let filters
      if (typeof id !== 'undefined') {
        filters = { _id: id };
      }
      else
      {
        filters = { category: categoria };
        console.log("data filters:", filters)
      }   
      const response = await productosService.getProductByFilters(filters);
      console.log("data response controller:", response);
      
  
      if (response.length == 0)
      {
        res.json({error: "Este producto no existe"})
      }
      else{
        if (typeof id !== 'undefined') {
          //console.log("datos detalle",response[0])
          // res.render("productDetails", {ProductosDB:response[0].Productos[0],usuariolog: req.user._id.toString()} );
          res.render("productDetails", {ProductosDB:response[0].Productos[0]} );
        }
        else

        {
          console.log("llegue a la funcion filter")
          // res.render("product", {ProductosDB:response[0].Productos, Categorias:response[0].Categorias,usuariolog: req.user._id.toString()} );
          res.render("productos", {ProductosDB:response[0].Productos, Categorias:response[0].Categorias} );
        }
      }
      
      //res.json(response);
    } catch (err) {
      if (err.statusCode) {
        return res.status(statusCode).send(err);
      }
  
      res.sendStatus(500);
    }
  };


export default {
    getAllProductos,
    createProduct,
    getProductobyID,
    deleteProduct,
    updateProduct,
    getProductByFilters
}

