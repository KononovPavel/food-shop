const UserModel = require('../models/UserModel');
const ProductModel = require('../models/productModel')

/**
 * Класс описывает суть работы с корзиной пользователя, так как мы должны переходить от браузера в браузер и у нас все должно отображаться
 */
class cardController {
    /**
     * Добавляем массив продуктов в корзину пользователя
     * Работает, проверено
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async addProductToCard(req, res) {
      try {
          const userFromDb = await UserModel.findOne({_id: req.userByToken.userID}) // ищем нашего пользователя исходя из токена
          if (!userFromDb) {
              return res.status(400).json({message: "Вы не авторизованы! ошибка из addProductToCard"})
          }
          const products = req.body // массив продуктов;
          if (!products) {
              return res.status(400).json({message: "Продуктов не было добавлено", statusCode: 0})
          }
          products.forEach(product => {
              userFromDb.card.push(product)
          })
          await userFromDb.save();
          return res.json({userFromDb, message: "Продукты были добавлены в корзину", statusCode: 1})
      }
      catch (e) {
          return res.json({message:"Ошибка в catch"})
      }
    }

    /**
     * Удаление отдельного продукта по его _id
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async removeProductToCard(req, res) {
     try {
         const {id} = req.params
         const userFromDb = await UserModel.findOne({_id: req.userByToken.userID}) // ищем нашего пользователя исходя из токена
         if (!userFromDb) {
             return res.status(400).json({message: "Вы не авторизованы! ошибка из addProductToCard"})
         }
         const product = userFromDb.card.find(pr => pr._id === id)
         if (!product) {
             return res.status(400).json({message: "Продукт не был найден", statusCode: 0})
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
     catch (e) {
         return  res.json({message:'Ошибка в catch', e})
     }
    }
}

module.exports = new cardController()
