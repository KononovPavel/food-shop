const Router = require('express');
const router = new Router();
const userController = require('../Controllers/userController')
/**
 * Получение всех пользователей
 */
router.get('/users', userController.getUsers)
/**
 * Получение пользователя по его уникальному _id
 */
router.get('/users/:id', userController.getUser)
/**
 * Бан пользователя за его грехи
 */
router.put('/users/ban', userController.banUser)

router.put('/users/razban', userController.razBanUser)



module.exports = router;
