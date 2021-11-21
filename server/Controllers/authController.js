const {validationResult} = require('express-validator')
const config = require('config')
const secret = config.get('secretKey');
const UserByModel = require('../models/UserModel');
const RoleByModel = require('../models/roleModel');
const jwt = require('jsonwebtoken');//получение токена
const bcrypt = require('bcryptjs') // хеширование пароля
/**
 * Получаем токен исходя из id пользователя и его роли
 * @param userID
 * @param userROLE
 * @returns {*}
 */
const getToken = (userID, userROLE) => {
    const payload = {
        userID,
        userROLE
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

/**
 * Класс описывает процесс регистрации, авторизации, аунтефикации пользователя внутри приложения
 * Все методы являются ассинхронными, так как работают с базами данных
 */
class AuthController {
    async registration(req, res) {
        try {
            const errors = validationResult(req); // ищем ошибки в запросе
            if (!errors.isEmpty()) {
                res.status(400).json({message: "Ошибка при регистрации", errors})
            }
            const {
                firstName,
                lastName,
                email,
                password,
                address
            } = req.body // получаем данные от пользователя
            const candidate = await UserByModel.findOne({email})
            //поиск на совпадение
            if (candidate) {
                return res.status(400).json({message: "Пользователь с такой почтой уже зарегистрирован", statusCode: 0})
            }
            const hashPassword = bcrypt.hashSync(password, 5); // хеширование пароля
            const userRole = await RoleByModel.findOne({value: "USER"})
            const user = new UserByModel({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hashPassword,
                address: {
                    street:"",
                    city:"",
                    country:"",
                },
                role: userRole.value
            })
            await user.save();
            return res.json({message: "Вы успешно зарегистрировались", statusCode: 1})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Ошибка регистрации в catch"})
        }
    }

    async login(req, res) {
        /**
         * получаем данные из формы авторизации
         */
        const {email, password} = req.body;
        /**
         * ищем пользователя из бд по email
         * @type {*}
         */
        const findUserFromBD = await UserByModel.findOne({email: email});//поиск пользователя по почте
        if (!findUserFromBD) {
            return res.status(400).json({message: "Пользователь не был найден", code: 0})
        }
        /**
         * метод compareSync() возвращает пароль, если пароли совпадают
         */
        const isPassValid = bcrypt.compareSync(password, findUserFromBD.password);
        if (!isPassValid) {
            return res.status(400).json({message: "Вы ввели неправильный пароль"})
        }
        const token = getToken(findUserFromBD._id, findUserFromBD.role)
        return res.json({
            token,
            findUserFromBD,
            message: "Вы успешно авторизовались",
            statusCode: 1,
        })
    }



    async auth(req, res) {
        try {
            /**
             * получаем пользователя из бд с данными от middleware
             * @type {*}
             */
            const userFromBD = await UserByModel.findOne({_id: req.userByToken.userID});
            /**
             * генерируем токен используя метод getToken()
             * @type {*}
             */
            const token = getToken(userFromBD._id, userFromBD.roles);
            return res.json({
                token,
                userFromBD,
                statusCode: 1
            })
        } catch (e) {
            console.log(e);
            res.json({message: "зашли в catch"})
        }
    }

}

//экспортируем объект класса authController
module
    .exports = new AuthController();
