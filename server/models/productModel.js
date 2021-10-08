const {Schema, model, Types} = require('mongoose')
//модель продукта, который будет у нас в магазине
const product = new Schema({
    name: {type: String, required: true, unique: true},
    category: {type: Types.ObjectId, ref: "Category"},
    description: {type: String},
    image: {type: String, required: true},
    images: [{type: String}],
    date: {type: Date, required: true},
    count: {type: Number, default: 1},
    price: {type: Number, default: 0},
})

module.exports = model("PRODUCT", product);
