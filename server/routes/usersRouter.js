const Router = require('express');
const router = new Router();
const userController = require('../Controllers/userController')
const {check} = require("express-validator");
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

router.post('/profile',[
    check('email', "Введен некорректный email").isEmail()
] ,userController.changeProfileData)

module.exports = router;
