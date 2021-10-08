const Router = require('express')
const router = new Router()
const authMiddleWare = require('../middleware/authMiddleware')
const orderController = require('../Controllers/orderController')


router.post('/order', authMiddleWare, orderController.createOrder)
router.get('/order', orderController.getOrders)
router.get('/orders', orderController.getUserOrders)
module.exports = router
