const Router = require('express')
const router = new Router();
const cardController = require('../Controllers/cardController')
const authMiddleWare = require('../middleware/authMiddleware')
router.post('/card', authMiddleWare, cardController.addProductToCard)
router.delete('/card/:id', authMiddleWare, cardController.removeProductToCard)

module.exports = router;
