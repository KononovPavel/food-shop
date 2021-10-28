const Router = require('express')
const router = new Router();
const categoryController = require('../Controllers/categoryController')
router.post('/category', categoryController.createCategory);
router.delete('/category', categoryController.deleteCategory)





module.exports = router
