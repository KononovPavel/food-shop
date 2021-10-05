const UserModel = require('../models/UserModel');

/**
 * Класс описывает суть работы с корзиной пользователя, так как мы должны переходить от браузера в браузер и у нас все должно отображаться
 */
class cardController {
    /**
     * Добавляем массив продуктов в корзину пользователя
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async addProductToCard(req, res) {
        const userFromDb = await UserModel.findOne({_id: req.userByToken.userID}) // ищем нашего пользователя исходя из токена
        if (!userFromDb) {
            return res.status(400).json({message: "Вы не авторизованы! ошибка из addProductToCard"})
        }
        const products = req.body // массив продуктов;
        if (!products) {
            return res.status(400).json({message: "Продуктов не было добавлено", statusCode: 0})
        }
        userFromDb.card = [...products, ...userFromDb.card]// помещаем в конец корзины наши товары
        await userFromDb.save();
        return res.json({userFromDb, message: "Продукты были добавлены в корзину", statusCode: 1})
    }

    /**
     * Удаление отдельного продукта по его _id
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async removeProductToCard(req, res) {
        const {id} = req.params
        const userFromDb = await UserModel.findOne({_id: req.userByToken.userID}) // ищем нашего пользователя исходя из токена
        if (!userFromDb) {
            return res.status(400).json({message: "Вы не авторизованы! ошибка из addProductToCard"})
        }
        const products = req.body // массив продуктов;
        if (!products) {
            return res.status(400).json({message: "Продуктов не было добавлено", statusCode: 0})
        }
        userFromDb.card = userFromDb.card.filter(product => product._id !== id) // фильтрую данные по id
        await userFromDb.save()
        return res.json({
            userFromDb,
            message: `Продукт у пользователя с почтой ${userFromDb.email} успешно удален ${id}`,
            statusCode: 1,
            cardLength: userFromDb.card.length
        })
    }

    async productsByCard (req, res) {

    }



}

module.exports = new cardController()
