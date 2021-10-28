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

        try {
            const {products, delivery, payment, cost} = req.body
            let user = await UserModel.findOne({_id: req.userByToken.userID})
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
                owner: user._id,
                delivery: delivery,
                payment: payment,
                cost: cost
            });
            /**
             * сохранение заказа в базе заказов
             */
            await order.save();
            return res.json({message: "Заказ был добавлен!", order, statusCode: 1})
        } catch (e) {
            res.json({message: "Ошибка в catch", e})
        }
    }

    getOrders = async (req, res) => {
        try {
            const orders = await OrderModel.find();
            if (!orders.length) {
                return res.status(400).json({message: "Заказов не найдено", statusCode: 0})
            }
            return res.status(200).json({message: "Все заказы : ", orders, totalCount: orders.length, statusCode: 1})
        } catch (e) {
            res.json({message: "Ошибка в catch", e})
        }
    }

    getUserOrders = async (req, res) => {
        try {
            const id = '615c04aaa80eaabfa80dfd0e'
            const orders = await OrderModel.find({owner: id})
            // if (!user) {
            //     return res.json({message: "Пользователь не был найден"})
            // }
            if (!orders) {
                return res.json({message: "Заказы не были найдены"})
            }
            return res.json({message: "Ваши заказы", orders, statusCode: 1, totalCount: orders.length})
        } catch (e) {
            res.status(400).json({message: "Ошибка в catch", e: e})
        }
    }
}

module.exports = new  OrderController();

