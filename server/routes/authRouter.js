//для передачи данных по методам нужно создать объект класса Login_registr_main_router
const Router = require('express');
const router = new Router();
const authController = require('../Controllers/authController');
const authMiddleware = require('../middleware/authMiddleware')
const {check} = require('express-validator')
//регистрация
router.post('/registration',[
    check('password',"Пароль должен быть менее 8 символов").isLength({min:8}),
    check('email', "Введен некорректный email").isEmail()
], authController.registration)
//авторизация
router.post('/login', authController.login)
//авторизация постоянная - чтобы пользователь оставался авторизован
router.get('/auth',authMiddleware ,authController.auth)


module.exports = router;

