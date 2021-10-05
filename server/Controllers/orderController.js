const UserModel = require('../models/UserModel')
const OrderModel = require('../models/orderModel')

/**
 * Класс будет описывать работу с заказом, а именно:
 * -> Его создание от лица пользователя
 * -> Изменение его статуса от лица администратора
 * -> Удаление заказа, если пользователь был заблокирован
 */
class OrderController {
    /**
     * Создание заказа , где будем ложить в него id пользователя, который его создал,
     * чтобы можно было из администратора работать с заказом
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    createOrder = async (req, res) => {
        const {products, delivery, payment} = req.body
        const user = await UserModel.findOne({_id: req.userByToken.userID})
        if (!products) {
            return res.status(400).json({message: "Без продуктов не буду ничего добавлять!", statusCode: 0})
        }
        /**
         * Создаю новый заказ
         * @type {EnforceDocument<unknown, {}, {}>}
         */
        const order = new OrderModel({
            products: products,
            date: new Date(),
            owner: {...user},
            delivery: delivery,
            payment: payment
        });
        /**
         * для администратора я делаю так, чтобы были видны все заказы вообще
         */
        await order.save();
        /**
         * Для пользователя, я добавляю в массив заказов еще один заказ
         * @type {*[]}
         */
        user.orders = [order, ...user.orders]
        await user.save();
        return res.json({message:"Ваш заказ был добавлен", user, statusCode: 1, length: user.orders.length})
    }
}

module.exports = new OrderController();

