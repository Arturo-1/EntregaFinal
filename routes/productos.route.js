import { Router } from 'express'
import Controllers from '../controller/index.controller.js'
import checkAuthentication from '../Strategy/CheckAuth.js'
const routerProductos = Router()
const categoryRouter = Router({mergeParams: true});

routerProductos.use('/categoria/:categoria', categoryRouter);

routerProductos.route('/:ProductoId')
.get(Controllers.ProductosController.getProductobyID)
.delete(Controllers.ProductosController.deleteProduct)
.put(Controllers.ProductosController.updateProduct)

routerProductos.route('/')
.get(checkAuthentication,Controllers.ProductosController.getAllProductos)
.post(Controllers.ProductosController.createProduct)



categoryRouter.route("/").get(Controllers.ProductosController.getProductByFilters);

export default routerProductos