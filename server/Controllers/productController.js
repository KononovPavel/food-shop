const ProductByModel = require('../models/productModel')
const CategoryByModel = require('../models/categoryModel')

/**
 * Класс описывает crud для каждого из продукта
 */
class ProductController {
    /**
     * создаем продукт
     * @param req
     * @param res
     * @returns {Promise<*>}
     * протестировано!
     */
    async createProduct(req, res) {
        try {
            const {
                name,
                category,
                description,
                image,
                images,
                count,
                price
            } = req.body

            const candidate = await ProductByModel.findOne({name: name})
            if (candidate) {
                return res.status(400).json({message: "Такой товар уже зарегистрирован в базе"})
            }
            const hasCategory = await CategoryByModel.findOne({value: category})
            const product = new ProductByModel({
                name: name,
                category: hasCategory.value,
                description: description,
                image: image,
                images: images,
                date: new Date(),
                count: count,
                price: price
            })
            await product.save();
            res.json({product, message: "Продукт был успешно добавлен"});
        } catch (e) {
            return res.status(400).json({message: "Ошибка создания в catch"})
        }

    }

    /**
     * Получение всех продуктов
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async getAllProducts(req, res) {
        const products = await ProductByModel.find()
        return res.json({products, totalCount: products.length})
    }

    /**
     * получение продукта по id из url запроса
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async getOneProduct(req, res) {
        const {id} = req.params
        const product = await ProductByModel.findOne({_id: id})
        if (!product) {
            return res.status(400).json({message: "Продукт не был найден"})
        }
        return res.json({product, message: "Запрос выполнен успешно"})
    }

    /**
     * Получение продукта(ов) исходя из категории
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async getProductByCategory(req, res) {
        const {category} = req.params
        const products = await ProductByModel.find({category: category})
        if (!products) {
            return res.status(400).json({message: "Продукт не был найден category"})
        }
        return res.json(products)
    }

    /**
     * Удаление продукта по его id
     */
    async deleteProduct(req, res) {
        const {id} = req.params
        const product = await ProductByModel.findOne({_id: id})
        if (!product) {
            return res.status(403).json({message: "Продукт уже был удален", statusCode: 0})
        }
        await ProductByModel.findByIdAndDelete({_id: id});
        res.status(200).json({message: `Продукт с id ${id} был удален`, statusCode: 1})
    }
}

module.exports = new ProductController();
