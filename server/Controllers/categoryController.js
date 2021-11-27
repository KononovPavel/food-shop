const categoryModel = require('../models/categoryModel');

/**
 * Класс, создающий категорию продуктов
 */
class CategoryController {
    createCategory = async (req, res) => {
        try {
            const {category, photo} = req.body
            const categoryCandidate = await categoryModel.findOne({link: category})
            if (categoryCandidate) {
                return res.json({message: "Такая категория уже есть, назовите по другому"})
            }
            const newCategory = await new categoryModel({
                link: category,
                photo:photo
            })
            await newCategory.save()
            return res.json({message: "Категория была создана", newCategory, statusCode: 1})
        } catch (e) {
           return res.json({message: "ошибка в catch"})
        }
    }

    deleteCategory = async (req, res) => {
        const {id} = req.params
        await categoryModel.findByIdAndDelete({_id:id});
        res.json({message:"Категория была удалена", statusCode:1})
    }

    getAllCategories = async (req,res) => {
        const categories = await categoryModel.find();
        return res.json({categories});
    }
}

module.exports = new CategoryController()
