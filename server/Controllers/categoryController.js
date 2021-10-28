const productModel = require('../models/productModel');
const categoryModel = require('../models/categoryModel');

/**
 * Класс, создающий категорию продуктов
 */
class CategoryController {
    createCategory = async (req, res) => {
        try {
            const {category, products} = req.body
            const categoryCandidate = await categoryModel.findOne({value: category})
            if (categoryCandidate) {
                return res.json({message: "Такая категория уже есть, назовите по другому"})
            }
            const newCategory = await new categoryModel({
                value: category,
                products: products ? products : []
            })
            await newCategory.save()
            return res.json({message: "Категория была создана", newCategory, statusCode: 1})
        } catch (e) {
            res.json({message: "ошибка в catch"})
        }
    }

    deleteCategory = async (req, res) => {

    }
}

module.exports = new CategoryController()
