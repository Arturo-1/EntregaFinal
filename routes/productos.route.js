import { Router } from 'express'
import Controllers from '../controller/index.controller.js'
import checkAuthentication from '../Strategy/CheckAuth.js'
const routerProductos = Router()


routerProductos.route('/')
.get(checkAuthentication,Controllers.ProductosController.getAllProductos)
.post(Controllers.ProductosController.createProduct)



routerProductos.route('/:ProductoId')
.get(Controllers.ProductosController.getProductobyID)
.delete(Controllers.ProductosController.deleteProduct)
.put(Controllers.ProductosController.updateProduct)

export default routerProductos