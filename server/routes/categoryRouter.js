const Router = require('express')
const router = new Router();
const categoryController = require('../Controllers/categoryController')
router.post('/category', categoryController.createCategory);
router.delete('/category/:id', categoryController.deleteCategory)
router.get('/category', categoryController.getAllCategories)





module.exports = router
