const UserByModel = require('../models/UserModel');

/**
 * Этот класс описывает методы для работы с пользователями :
 * изменить роль пользователя
 * получить всех пользователей
 * получить одного пользователя
 * забанить пользователя за его грехи **
 */
class UserController {
    /**
     * Получение всех пользователей из бд
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async getUsers(req, res) {
        const users = await UserByModel.find();
        if (!users) {
            return res.status(400).json({message: "Пользователей нет в базе данных", statusCode: 0})
        }
        return res.json({users, statusCode: 1, totalCount: users.length})
    }

    /**
     * Получение одного пользователя по его id
     */
    async getUser(req, res) {
        const {id} = req.params
        const user = await UserByModel.findOne({_id: id})
        if (!user) {
            return res.status(400).json({message: "Пользователь не был найден", statusCode: 0})
        }
        return res.json({user, statusCode: 1})
    }

    /**
     * Блокировка пользователя
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async banUser(req, res) {
        const {reason, id} = req.body
        if (!reason) {
            return res.json({message: "Введите причину блокировки!", statusCode: 0})
        }
        const user = await UserByModel.findOne({_id: id})
        if (!user) {
            return res.status(400).json({message: "Пользователь не был найден", statusCode: 0})
        }
        user.ban.status = true;
        user.ban.reason = reason;
        await user.save();
        return res.json({user, message: "Пользователь был заблокирован", statusCode: 1})
    }

    /**
     * Разблокиовка пользователя
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async razBanUser(req, res) {
        const {id} = req.body
        const user = await UserByModel.findOne({_id: id})
        if (!user) {
            return res.status(400).json({message: "Пользователь не был найден", statusCode: 0})
        }
        user.ban.status = false;
        user.ban.reason = '';
        await user.save();
        return res.json({user, message: "Пользователь был разблокирован", statusCode: 1})
    }


}

module.exports = new UserController();
