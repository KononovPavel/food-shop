const Router = require('express');
const router = new Router();
const productRouter = require('../Controllers/productController')

/**
 * Создание одного продукта
 */
router.post('/product', productRouter.createProduct)
/**
 * Получение всех продуктов
 */
router.get('/product', productRouter.getAllProducts)
/**
 * Получение продукта по id : productID
 */
router.get('/product/:id', productRouter.getOneProduct)

/**
 * Получение продуктов по категории
 * @type {e | Express}
 */
router.get('/product/category/:category', productRouter.getProductByCategory)

/**
 * Удаление продукта по его id;
 */
router.delete('/product/:id', productRouter.deleteProduct)

module.exports = router;
