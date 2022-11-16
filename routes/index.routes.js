import { Router } from 'express'
import routerLogin from './login.route.js'
import routerProductos from './productos.route.js'
const router = Router()

router.use('/', routerLogin)
router.use('/productos', routerProductos)



export default router